import { Container } from '../../../../components'
import { SignInForm } from '../components/SignInForm'
import { usePage } from '../hooks/usePage'

const Page = () => {
  const { onAuth } = usePage()
  return (
    <Container>
      <SignInForm onAuth={onAuth} />
    </Container>
  )
}

export default Page
