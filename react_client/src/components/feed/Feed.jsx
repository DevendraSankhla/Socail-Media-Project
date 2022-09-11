import "./feed.css"
import Share from "../share/Share"
import Post from "../post/Post"
import axios from "axios"
import { useEffect, useState } from "react"

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    const fatchPosts = async () =>{
      const res = await axios.get("posts/timeline/616eef0f06e317a2e2b639f3").then(function(res){
        setPosts(res.data);
      } )
    }
    fatchPosts();
  }, []);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/>
        {posts.map((p)=>(
          <Post key={p._id} post={p}/> 
        ))}
      </div>
    </div>
  )
}
