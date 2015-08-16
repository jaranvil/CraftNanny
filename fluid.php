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
               <li><a href='home.php'><span>Home</span></a></li>
             </ul>
          </div>
          <soan id="menu_headers">Monitoring</span>
          <div id='cssmenu'>
               
             <ul>  
               <li><a href='tracking.php'><span>Player Tracking</span></a></li>
               <li><a href='energy.php'><span>Energy Storage</span></a></li>
               <li class='active'><a href='fluid.php'><span>Fluid Storage</span></a></li>
               </ul>
          </div>
          <soan id="menu_headers">Controls</span>
          <div id='cssmenu'>
               
             <ul>  
               <li><a href='redstone.php'><span>Redstone Controls</span></a></li>
               <li><a href='rednet.php'><span>Rednet Controls</span></a></li>
               <li><a href='custom.php'><span>Custom Module</span></a></li>
               </ul>
          </div>
          <soan id="menu_headers">Admin</span>
          <div id='cssmenu'>
               
             <ul>  
               <li class='last'><a href='rules.php'><span>Set Rules</span></a></li>
               <li class='last'><a href='notifications.php'><span>Set Notifications</span></a></li>
               <li class='last'><a href='logout.php'><span>Log out</span></a></li>
            </ul>
          </div>
   
      </div>
        
      
        <div class="large-9 columns">
          <div class="module_header">
            <h3 style="color:#0099FF">Connected fluid modules:</h3>
            Information updated every 30 seconds when modules are online.<p>
          </div>
        	<ul id="connected_modules">
				   
			    </ul>

          <div class="no_connected_modules">
            <h3 style="color:#0099FF">Fluid Modules</h3>
            <h4 style="color:#CC0000;font-weight:bold;">
              There are no fluid modules connected to this account. Setup instructions are available <a href="setup.php">here</a>
            </h4>
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
                  <li>
                    Run module installer <a href="setup.php">from here.</a>
                  </li>
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
          </div>
                
        </div>
      </div>
        

     

    <script src="js/vendor/jquery.js"></script>
    <script src="js/foundation.min.js"></script>
    <script>
      $(document).foundation();
    </script>
    <script src="js/login_check.js"></script>
    <script src="js/block.js"></script>
    <script src="js/fluid.js"></script>
	
  </body>
</html>
