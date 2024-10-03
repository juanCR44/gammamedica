const Login = () => {
    return (
        <div className="login-container flex justify-center">
            <div className="row align-center height100 gap100 space-evenly">
                <div className="image-login ">
                    <img src="images/gammalogin.png" alt="" />
                </div>
                <div className="login-form column gap10 height100 ">
                    <span className="title-login">Login</span>
                    <span className="span-tiny-gray">Please enter your login detail to sign in</span>
                    <div className="input-block mt20">
                        <input type="text" name="input-text" id="input-text" required spellCheck="false" />
                        <span className="placeholder">
                            Email
                        </span>
                    </div>
                    <div className="input-block">
                        <input type="text" name="input-text" id="input-text" required spellCheck="false" />
                        <span className="placeholder">
                            Password
                        </span>
                    </div>
                    <div className="row space-between">
                        <div className="row left gap10">
                            <input className ='check' type="checkbox" />
                            <span className="span-tiny-gray pointer">Keep me logged in</span>
                        </div>
                        <div className="right">
                            <span className="forgot-password">Forgot password?</span>
                        </div>
                    </div>
                    <button className="mt100">Log In</button>
                </div>
            </div>
        </div>
    )
}

export default Login;