import { useEffect, useState } from "react"
import { Post } from "../../componets/post"
import { useIdUserContext } from "../../hooks/useIdUserContext"
import { getPost } from "../../services/getData"

export const Main = () => {
  const [posts, setPosts] = useState([])
  const {id} = useIdUserContext()
  
  useEffect(()=>{
   if(id){
     (async()=>{
       const data = await getPost()
       setPosts(data.posts)
     })()
   }
  }, [id])

  return (
    <main className="flex justify-center max-w-5xl mx-auto mb-16 px-10">

      {posts.length ===0 && <span>Please Login</span>}
      {posts.length !==0 && <div className="grid gap-x-8 gap-y-16 lg:grid-cols-3">{posts.map((post)=>{
        return <Post  key = {post.id} 
                      title = {post.title}
                      body = {post.body} 
                      tags = {post.tags} 
                      isAuthor = {post.userId == id}
                      reactions = {post.reactions}
                      id={post.userId}
                />
      })}</div>}
    </main>
  )
}
