import { Button, Container } from '../../../components'
import { usePagination } from '../../../hooks/usePagination'
import { projectRepository } from '../../../repositories/projectRepository'
import { QueryHelperProps, queryHelper } from '../../../utils/queryHelper'

const Page = () => {
  const { list, page, prevPage, nextPage } = usePagination({
    fetch: (props: QueryHelperProps) => projectRepository.list({ queryConstraints: queryHelper(props) }),
    limit: 50,
    usingLoader: true,
  })
  return (
    <Container>
      <Button onClick={prevPage}>prev</Button>
      {list.map((project) => project.name)}
      <Container>current page: {page}</Container>
      <Button onClick={nextPage}>next</Button>
    </Container>
  )
}

export default Page
