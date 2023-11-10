import { useContext } from "react"

import { PostsContext } from "./contexts/PostsContexts"

import { Form } from "./components/Form/Form"
import { Card } from "./components/Card/Card"

function App() {
  const { posts } = useContext(PostsContext)
  return (
    <>
      <Form />
      <section>
        {posts.map(post => <Card key={crypto.randomUUID()} {...post} />)}
      </section>
    </>
  )
}

export default App
