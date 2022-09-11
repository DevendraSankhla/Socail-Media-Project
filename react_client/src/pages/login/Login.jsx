import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <div className="loginLogo">Devocial</div>
                <span className="loginDesc">Connect with friends and the world around you with Devocial</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Enter your email" type="Email" className="loginInput" />
                    <input placeholder="Enter your password" type="Password" className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot password?</span>
                    <hr className="loginHr" />
                    <button className="loginRegister">Create a new account</button>    
                </div>
            </div>
        </div>
    </div>
  )
}
