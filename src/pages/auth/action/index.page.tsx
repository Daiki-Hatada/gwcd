import { GetServerSidePropsContext } from 'next'
import { FIREBASE_AUTH_ACTION_MODE } from '../../../constants/firebase/auth'
import Page from '../../../features/auth/action/Page'
import { Props } from '../../../features/auth/action/Page/Page.types'
import { FirebaseAuthActionMode } from '../../../types/FirebaseAuthActionMode.types'

const NextPage = (props: Props) => <Page {...props} />

export default NextPage

export const getServerSideProps = ({ query }: GetServerSidePropsContext) => {
  const { mode, oobCode, continueUrl } = query

  if (
    !Object.values(FIREBASE_AUTH_ACTION_MODE).includes(mode as FirebaseAuthActionMode) ||
    typeof oobCode !== 'string' ||
    typeof continueUrl !== 'string'
  ) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      mode,
      oobCode,
      continueUrl,
    },
  }
}
