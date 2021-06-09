import React from "react";
 function Register(){
     return(
         <div class="registerpage">
             <div class="registertext">
                 <h1>SeniorJunior</h1>
                 <br></br>
                 <h5>A New World Is Rising. Let’s Discover It.</h5>
             </div>
             <div class="registerbox">
                 <input type="text" class="registerinput" placeholder="Username"></input>
                 <br></br><input type="text" class="registerinput"placeholder="Password"></input>
                 <br></br><input type="text" class="registerinput" placeholder="Confirm Password"></input>
                 <br></br><input type="text" class="registerinput" placeholder="Profession"></input>
                 <br></br> <button type="submit" class="registerbutton">Sign Up</button>
                 
             </div>
         </div>
     );
 }
 export default Register;