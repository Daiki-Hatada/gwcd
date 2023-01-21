import { Container } from '../../../../components'

export const EmailRecoveryForm = ({ oobCode, continueUrl }: { oobCode: string; continueUrl: string }) => (
  <Container>
    {oobCode}
    {continueUrl}
  </Container>
)
