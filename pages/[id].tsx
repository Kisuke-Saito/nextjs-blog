import { useRouter } from 'next/router'
import Nav from '../components/Nav'

const IdPage = () => {
  const { asPath } = useRouter()
  return (
    <>
      <Nav />
      <p>Hello, I'm the {asPath} page</p>
    </>
  )
}

export default IdPage