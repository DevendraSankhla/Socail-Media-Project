import "./register.css"

export default function Register() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <div className="loginLogo">Devocial</div>
                <span className="loginDesc">Connect with friends and the world around you with Devocial</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Enter your username" type="Email" className="loginInput" />
                    <input placeholder="Enter your email" type="Email" className="loginInput" />
                    <input placeholder="Enter your password" type="Password" className="loginInput" />
                    <input placeholder="Enter your password again" type="Password" className="loginInput" />
                    <button className="loginButton">Sign Up</button>
                    <hr className="loginHr" />
                    <button className="loginRegister">Log into Account</button>    
                </div>
            </div>
        </div>
    </div>
  )
}
