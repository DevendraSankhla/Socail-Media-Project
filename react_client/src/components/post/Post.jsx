import "./post.css"
import {MoreVert} from "@mui/icons-material"
import { useEffect, useState } from "react"
import axios from "axios";
import {format} from "timeago.js";
import {Link} from "react-router-dom";

export default function Post({post}) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  
  const LikeHander=()=>{
    setLike(isLiked ? like-1 : like+1);
    setIsLiked(!isLiked);  
  }

  useEffect(()=>{
    const fatchUser= async () =>{
      const res = await axios.get(`users/${post.userId}`).then(function(res){
        setUser(res.data);
      } )
    }
    fatchUser();
  }, [post.userId]);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
              <div className="postTopLeft">
                <Link to={`/profile/${user.username}`}>
                  <img src={user.profilePicture || PF + "person/noAvatar.png"} alt="" className="postProfileImg" />
                </Link>
                <span className="postUsername">
                  {user.username}
                </span>
                <span className="postDate">{format(post.createdAt)}</span>
              </div>
              <div className="postTopRight">
                <MoreVert className="postTopRightIcon"/>
              </div>
            </div>
            <div className="postCenter">
              <span className="postText">{post?.desc}</span>
              <img className="postImg" src={PF + post.img} alt=""/>
            </div>
            <div className="postBottom">
              <div className="postBottomLeft">
                <img className="likeIcon" src={PF + "like.png"} alt="" onClick={LikeHander}/>
                <img className="likeIcon" src={PF + "heart.png"} alt="" onClick={LikeHander}/>
                <span className="postLikeCounter">{like} people like it</span>
              </div>
              <div className="postBottomRight">
                <span className="postCommentText">{post.comment <= 1?post.comment + " comment":post.comment + " comments"}</span>
              </div>
            </div>
        </div>
    </div>
  )
}
