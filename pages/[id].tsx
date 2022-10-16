import { useRouter } from 'next/router'
import Nav from '../components/Nav'

const IdPage = () => {
  const { asPath, route } = useRouter()
  return (
    <>
      <Nav />
      <p>Hello, I'm the {asPath} page</p>
      <p>Hello, I'm the {route} page, actually</p>
    </>
  )
}

export default IdPage