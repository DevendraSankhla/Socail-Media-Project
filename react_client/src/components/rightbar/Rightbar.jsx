import "./rightbar.css"
import Online from "../online/Online"
import {Users} from "../../dummyData"

export default function Rightbar({Profile}) {
  const HomeContainer = () =>{
    return(
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Ram</b> and <b>9 other friends</b> have a birthday today!
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u=>(<Online key={u.id} user={u}/>))}
        </ul>
      </>
    )
  }

  const ProfileContainer = () =>{
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return(
      <>
        <h4 className="rightbarProfileTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Bangalore</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Jodhpur</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarProfileTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src={PF + "person/2.jpeg"} alt="" />
            <span className="rightbarFollowingUsername">John carter</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src={PF + "person/3.jpeg"} alt="" />
            <span className="rightbarFollowingUsername">John carter</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src={PF + "person/4.jpeg"} alt="" />
            <span className="rightbarFollowingUsername">John carter</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src={PF + "person/5.jpeg"} alt="" />
            <span className="rightbarFollowingUsername">John carter</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src={PF + "person/6.jpeg"} alt="" />
            <span className="rightbarFollowingUsername">John carter</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src={PF + "person/7.jpeg"} alt="" />
            <span className="rightbarFollowingUsername">John carter</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src={PF + "person/7.jpeg"} alt="" />
            <span className="rightbarFollowingUsername">John carter</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
          {Profile ? <ProfileContainer/> : <HomeContainer/>}
      </div>
    </div>
  )
}
