<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CraftNanny</title>
    <link rel="stylesheet" href="css/foundation.css" />
    <script src="js/vendor/modernizr.js"></script>
    <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-66224425-1', 'auto');
  ga('send', 'pageview');

</script>
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
               <li class='active'><a href='modules.php'><span>In-game Modules</span></a></li>
               </ul>
          </div>

          </div>
          <div class="large-9 columns">
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
        
        
       
       
          </div>
          <hr>
        
       <div class="row">
         <h3 style="color:#1b9bff;font-weight:bold;" id="tracker">1. Player Tracker</h3>
            <div class="large-6 columns">
              <h4>What it does</h4>
              <ul>
                <li>Logs players that enter/leave its range</li>
                <li>Records changes in inventory while player is in range</li>
              </ul>
              <h4>Setup</h4>
              <ul>
                <li>Place advanced computer with <strong>OpenPeripheral sensor on top.</strong></li>
                <li>Run module installer <a href="setup.php">from here.</a></li>
              </ul>
              <h4>Notes</h4>
              <ul>
                <li>By default, the sensor range is 5 blocks</li>
                <li>Place several sensors by ME terminals, doorways, ect</a></li>
                <li>Server admins can increase the sensor range in the OpenPeripherals configs</li>
              </ul>
            </div>
            <div class="large-6 columns">
              <img src="img/mods/player.png" class="module_img">
              <img src="img/screenshots/tracking.PNG"  class="module_img">
              
            </div>
          </div>
        </div>
          
      <hr>
      
       <div class="row">
         <h3 style="color:#1b9bff;font-weight:bold;" id="tracker">2. Energy Storage</h3>
            <div class="large-6 columns">
              <h4>What it does</h4>
              <ul>
                <li>Records the percent of energy stored in attached peripherals</li>
                <li>IC2, Thermal Expansion, and EnderIO support</li>
              </ul>
             <h4>Setup</h4>
              <ul>
                <li>Place advanced computer directly next to a stroage device or connected with modems</li>
                <li>Run module installer <a href="setup.php">from here.</a></li>
              </ul>
              <h4>Notes</h4>
              <ul>
                <li><strong>Requires OpenPeripherals</strong></li>
                <li>Currently, each module can only connect to one peripheral</li>
              </ul>
            </div>
            <div class="large-6 columns">
              <img src="img/mods/energy.png" class="module_img">
              <img src="img/screenshots/energy.PNG" class="module_img">
              
            </div>
          </div>
        </div>
        
           <hr>
           
         <div class="row">
         <h3 style="color:#1b9bff;font-weight:bold;" id="tracker">3. Fluid Storage</h3>
            <div class="large-6 columns">
              <h4>What it does</h4>
              <ul>
                <li>Logs the storage percent of attached periperals</li>
              </ul>
            <h4>Setup</h4>
              <ul>
                <li>Place advanced computer directly next to a stroage device or connected with modems</li>
                <li>Run module installer <a href="setup.php">from here.</a></li>
              </ul>
              <h4>Notes</h4>
              <ul>
                <li><strong>Requires OpenPeripherals</strong></li>
                <li>Currently, each module can only connect to one peripheral</li>
              </ul>
            </div>
            <div class="large-6 columns">
              <img src="img/mods/fluid.png" class="module_img">
              <img src="img/screenshots/fluid.PNG" class="module_img">
              
            </div>
          </div>
        </div>

           <hr>
           
            <div class="row">
         <h3 style="color:#1b9bff;font-weight:bold;" id="tracker">4. Redstone Controls</h3>
            <div class="large-6 columns">
              <h4>What it does</h4>
              <ul>
                <li>No periperals needed. Install this module on any advanced computer</li>
                <li>Toggle the redstone output of each side from the web</li>
                <li>Give custom names to each side</li>
                <li>Monitor the current redstone inputs of each sise</li>
              </ul>
            <h4>Setup</h4>
              <ul>
                <li>Place advanced computer and run module installer</li>
      
              </ul>
              <h4>Notes</h4>
              <ul>
                <li><strong>Requires OpenPeripherals</strong></li>
                <li>Currently, each module can only connect to one peripheral</li>
              </ul>
            </div>
            <div class="large-6 columns">
              <img src="img/screenshots/redstone.PNG" class="module_img">
              
            </div>
          </div>
        </div>

        
         
         
        </div>
       

      <footer>
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
            <div class="large-4 columns" style="border-right:2px solid;height:200px">
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
    <script src="js/foundation/foundation.orbit.js"></script>
    <script>
      $(document).foundation();
    </script>

	
  </body>
</html>
