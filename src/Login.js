import React from "react";
import Register from "./Register";
function Login(){
    return(
        <div  class="loginpage">
             <div class="logintext">
                 <h1>SeniorJunior</h1>
                 <br></br>
                 <h5>A New World Is Rising. Let’s Discover It.</h5>
             </div>
             <div class="loginbox">
                 
                 <input type="text" class="logininput" placeholder="Username"></input>
                 <br></br><input type="password" class="logininput"placeholder="Password"></input>
                 <br></br> <button type="submit" class="loginbutton">Login</button>
                 <br></br> <p class="gotoregister">New here. Signup Now. </p>
             </div>
        </div>
    );
}
export default Login;