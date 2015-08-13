<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CraftNanny</title>
    <link rel="stylesheet" href="css/foundation.css" />
    <script src="js/vendor/modernizr.js"></script>
    
  </head>
  <body>
    
    <div class="large-12 columns top_bar">
          <div class="row">
           <span style="font-weight:bold;font-size:36px;color:#1b9bff">
             CraftNanny
           </span>
            <span style="font-weight:bold;font-size:16px;color:#ffffff">
             Monitor and Control Minecraft Online through ComputerCraft
           </span>
          </div>
        </div>
        <div class="large-12 columns thin_bar">
        </div>


      <div class="row">  
      <div class="large-3 columns">
        <p>
          <div id='cssmenu'>
            <ul>
               <li class='active'><a href='signin.php'><span>Login</span></a></li>
               <li><a href='signup.php'><span>Create Account</span></a></li>
             </ul>
          </div>
          <p>
          <div id='cssmenu'>
               
             <ul>  
               <li><a href='index.php'><span>Home</span></a></li>
               <li><a href='setup.php'><span>Setup Instructions</span></a></li>
               <li><a href='modules.php'><span>In-game Modules</span></a></li>
               <li><a href='contact.php'><span>Contact</span></a></li>
               </ul>
          </div>
         
      </div>
    

        <div class="large-9 columns">
          <h1>Login</h1>
          <input type="text" class="create_user_input" name="username_login" id="username_login" placeholder="Username" style="background-color:#444444;color:#ffffff;width:300px;"/>
          <input type="password" class="create_user_input" name="password_login" id="password_login" placeholder="password" style="background-color:#444444;color:#ffffff;width:300px;"/>
          <div class="large-3 columns">
                <a href="" class="radius button right sidebar_btn_form" id="login_btn_2">Login</a>
              </div>
        </div>
      </div>


    <script src="js/vendor/jquery.js"></script>
    <script src="js/foundation.min.js"></script>
    <script>
      $(document).foundation();
    </script>
    <script src="js/login.js"></script>
	
  </body>
</html>
