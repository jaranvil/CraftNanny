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
               <li><a href='index.php'><span>Homepage</span></a></li>
               <li><a href='home.php'><span>My Dashboard</span></a></li>
               <li><a href='setup.php'><span>Setup Instructions</span></a></li>
               <li><a href='modules.php'><span>In-game Modules</span></a></li>
               </ul>
          </div>
         
      </div>
    

        <div class="large-9 columns">
          <h1>Login</h1>
          <input type="text" class="create_user_input" name="username_login" id="username_login" placeholder="Username" style="background-color:#444444;color:#ffffff;width:300px;"/>
          <input type="password" class="create_user_input" name="password_login" id="password_login" placeholder="password" style="background-color:#444444;color:#ffffff;width:300px;"/>

          <a href="" class="radius button sidebar_btn_form" id="login_btn">Login</a>&nbsp;&nbsp;&nbsp;
          <a href="signup.php">Create an Account</a>
        </div>
      </div>

       <footer style="margin-top:250px;">
        <div class="large-12 columns footer_top">
          <div class="row">
            <div class="large-6 columns">
              
            </div>
            <div class="large-6 columns">
              
            </div>
          </div>
        </div> 
        <div class="large-12 columns footer_middle">
          <div class="row">
            <div class="large-2 columns">
              <img src="img/skin.PNG" style="height:200px;">
            </div>
            <div class="large-4 columns" style="height:200px">
              <p><h2 style="font-weight:bold;color:#cccccc;">CraftNanny.org</h2>
              <p style="color:#cccccc;font-size:18px;">Contribute to this open-source project on GitHub!</p>
              <a href="https://github.com/jaranvil/CraftNanny"><img src="img/git.png" style="width:100px;"></a>
            </div>
            <div class="large-6 columns">

            </div>
            </div>
        </div> 
        <div class="large-12 columns footer_bottom">
          <div class="row">
            <div class="large-3 columns">
             
            </div>
            <div class="large-9 columns" style="color:#cccccc">
              <ul class="inline-list right" style="margin-top:40px;">
                <li><a href="home.php" style="color:#cccccc">My Dashboard</a>  </li>
                <li><a href="setup.php" style="color:#cccccc">Setup Instructions</a>  </li>
                <li><a href="modules.php" style="color:#cccccc">Modules</a> </li>
                <li><a href="https://github.com/jaranvil/CraftNanny/issues" style="color:#cccccc">Report Issues </a></li>
              </ul>
            </div>
          </div>
        </div> 
      </footer>

    <script src="js/vendor/jquery.js"></script>
    <script src="js/foundation.min.js"></script>
    <script>
      $(document).foundation();
    </script>
    <script src="js/login.js"></script>
	
  </body>
</html>
