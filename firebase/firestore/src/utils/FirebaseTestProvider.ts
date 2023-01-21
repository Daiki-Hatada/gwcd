import fs from 'fs'

import * as firebase from '@firebase/app'
import * as firebaseTesting from '@firebase/rules-unit-testing'

export const setUpTest = (projectName: string) => {
  const provider = new FirebaseTestProvider(projectName)
  firebase.setLogLevel('error')
  afterAll(async () => {
    await provider.cleanup()
  })

  afterEach(async () => {
    await provider.clearFirestore()
  })
  return provider
}

export default class FirebaseTestProvider {
  private readonly projectName: string

  private readonly rules: string

  private readonly emulatorPort: number
  private testEnv: firebaseTesting.RulesTestEnvironment | undefined
  constructor(projectName: string, emulatorPort = 8080, rulesFilePath = '../firestore.rules') {
    this.projectName = projectName.toLowerCase()
    this.rules = fs.readFileSync(rulesFilePath, 'utf8')
    this.emulatorPort = emulatorPort
  }

  private getProjectId(): string {
    return `${this.projectName}`
  }

  private async loadTestEnv(): Promise<firebaseTesting.RulesTestEnvironment> {
    if (!this.testEnv) {
      this.testEnv = await firebaseTesting.initializeTestEnvironment({
        projectId: this.getProjectId(),
        firestore: {
          host: 'localhost',
          port: this.emulatorPort,
          rules: this.rules,
        },
      })
    }
    return this.testEnv
  }

  async getAuthenticatedClientDB(props?: { uid: string }) {
    const uid = props?.uid
    const testEnv = await this.loadTestEnv()
    const authenticatedContext = testEnv.authenticatedContext(uid || 'alice', {
      admin: false,
    })
    return authenticatedContext.firestore()
  }

  async getAdminClientDB(props?: { uid: string }) {
    const uid = props?.uid
    const testEnv = await this.loadTestEnv()
    const adminContext = testEnv.authenticatedContext(uid || 'bob', {
      admin: true,
    })
    return adminContext.firestore()
  }

  async getUnauthenticatedClientDB() {
    const testEnv = await this.loadTestEnv()
    const unauthenticatedContext = testEnv.unauthenticatedContext()
    return unauthenticatedContext.firestore()
  }

  async getServerDB(callback: (context: firebaseTesting.RulesTestContext) => Promise<void>) {
    const testEnv = await this.loadTestEnv()
    await testEnv.withSecurityRulesDisabled(async (context) => await callback(context))
  }

  async cleanup() {
    const testEnv = await this.loadTestEnv()
    await testEnv.cleanup()
  }
  async clearFirestore() {
    const testEnv = await this.loadTestEnv()
    await testEnv.clearFirestore()
  }
}
