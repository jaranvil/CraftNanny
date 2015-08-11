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
    
    <div class="row">
        <div class="large-12 columns top_bar">
         <span style="font-weight:bold;font-size:36px;color:#1b9bff">
          
           CraftNanny
         </span>
          <span style="font-weight:bold;font-size:16px;color:#ffffff">
          
           Monitor and Control Minecraft Online through ComputerCraft
         </span>
        </div>
 
      </div>
      
      <div class="row">
        <div class="large-12 columns thin_bar">
         
        </div>
 
      </div>


      <div class="row">  
      <div class="large-3 columns">
        <p>
          <div id='cssmenu'>
            <ul>
               <li><a href='signin.php'><span>Login</span></a></li>
               <li><a href='signup.php'><span>Create Account</span></a></li>
             </ul>
          </div>
          <p>
          <div id='cssmenu'>
               
             <ul>  
               <li><a href='index.php'><span>Home</span></a></li>
               <li><a href='setup.php'><span>Setup Instructions</span></a></li>
               <li class='active'><a href='modules.php'><span>In-game Modules</span></a></li>
               <li><a href='contact.php'><span>Contact</span></a></li>
               </ul>
          </div>
         
      </div>

        <div class="large-9 columns">
       
       <div class="row">
            <div class="large-12 columns">
              <h2 style="color:#1b9bff">In-game Modules</h2>
              <h6 style="color:red;font-weight:bold">Modules currently only run on advanced computers</h6>
              <ul>
                <li><a href="#tracker">Player Tracking</a></li>
                <li><a href="#energy">Energy Storage</a></li>
                <li><a href="#fluid">Fluid Storage</a></li>
                <li><a href="#redstone">Redstone Controls</a></li>
                <li>Rednet (coming soon)</li>
                <li>BigReactor Control (coming soon)</li>
                <li><a href="https://github.com/jaranvil/CraftNanny/issues">Suggestions?</a></li>
              </ul>
            </div>
          </div>
          <hr>
        <h3 style="color:#1b9bff" id="tracker">Player Tracker</h3>
       <div class="row">
            <div class="large-6 columns">
              <h4>What it does</h4>
              <ul>
                <li>Logs players that enter/leave its range</li>
                <li>Records changes in inventory while player is in range</li>
              </ul>
            </div>
            <div class="large-6 columns">
               <h4>Setup</h4>
              <ul>
                <li>Place advanced computer with </strong>openperipheral sensor on top.</strong></li>
                <li>Run module installer <a href="setup.php">from here.</a></li>
              </ul>
              
            </div>
          </div>
          <div class="row">
            <div class="large-6 columns">
              <img src="img/mods/player.png">
              
            </div>
            <div class="large-6 columns">
              <img src="img/screenshots/tracking.PNG">
            </div>
          </div>
      <hr>
         <h3 style="color:#1b9bff" id="energy">Energy Storage</h3>
       <div class="row">
            <div class="large-6 columns">
              <h4>What it does</h4>
              <ul>
                <li>Logs the storage percent of attached periperals</li>
                <li>IC2, Thermal Expansion, and EnderIO support</li>
              </ul>
            </div>
            <div class="large-6 columns">
               <h4>Setup</h4>
              <ul>
                <li>Place advanced computer directly next to a stroage device or connected with modems</li>
                <li>Run module installer <a href="setup.php">from here.</a></li>
              </ul>
              
            </div>
          </div>
          <div class="row">
            <div class="large-6 columns">
              <img src="img/mods/energy.png">
              
            </div>
            <div class="large-6 columns">
              <img src="img/screenshots/energy.PNG">
            </div>
          </div>
           <hr>
         <h3 style="color:#1b9bff" id="fluid">Fluid Storage</h3>
       <div class="row">
            <div class="large-6 columns">
              <h4>What it does</h4>
              <ul>
                <li>Logs the storage percent of attached periperals</li>
                <li></li>
              </ul>
            </div>
            <div class="large-6 columns">
               <h4>Setup</h4>
              <ul>
                <li>Place advanced computer directly next to a stroage device or connected with modems</li>
                <li>Run module installer <a href="setup.php">from here.</a></li>
              </ul>
              
            </div>
          </div>
          <div class="row">
            <div class="large-6 columns">
              <img src="img/mods/fluid.png">
              
            </div>
            <div class="large-6 columns">
              <img src="img/screenshots/fluid.PNG">
            </div>
          </div>
           <hr>
         <h3 style="color:#1b9bff" id="redstone">Redstone Controls</h3>
       <div class="row">
            <div class="large-6 columns">
              <h4>What it does</h4>
              <ul>
                <li>No periperals needed. Install this module on any advanced computer</li>
                <li>Toggle the redstone output of each side from the web</li>
                <li>Give custom names to each side</li>
                <li>Monitor the current redstone inputs of each sise</li>
              </ul>
            </div>
            <div class="large-6 columns">
               <h4>Setup</h4>
              <ul>
                <li>Place advanced computer and run module installer</li>
      
              </ul>
              
            </div>
          </div>
          <div class="row">

            <div class="large-12 columns">
              <img src="img/screenshots/redstone.PNG">
            </div>
          </div>
        
         
         
        </div>
 

    <script src="js/vendor/jquery.js"></script>
    <script src="js/foundation.min.js"></script>
    <script>
      $(document).foundation();
    </script>

	
  </body>
</html>
