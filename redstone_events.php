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
             </ul>
          </div>
        
         <soan id="menu_headers">Monitoring</span>
          <div id='cssmenu'>
               
             <ul>  
               <li><a href='tracking.php'><span>Player Tracking</span></a></li>
               <li><a href='energy.php'><span>Energy Storage</span></a></li>
               <li><a href='fluid.php'><span>Fluid Storage</span></a></li>
               </ul>
          </div>
          <soan id="menu_headers">Controls</span>
          <div id='cssmenu'>
               
             <ul>  
               <li><a href='redstone.php'><span>Redstone Controls</span></a></li>
               <li><a href='rednet.php'><span>Rednet Controls</span></a></li>
               <li><a href='bigreactors.php'><span>BigReactors Control</span></a></li>
               </ul>
          </div>
          <soan id="menu_headers">Events</span>
          <div id='cssmenu'>
               
             <ul>  
               <li class='active'><a href='redstone_events.php'><span>Redstone Events</span></a></li>
               <li class='last'><a href='notifications.php'><span>Email Notifications</span></a></li>
            </ul>
          </div>
   
      </div>
        
      
      <div class="large-9 columns">
        
        <h2 style="color:#1b9bff">Redstone Events</h2>
        <h6>Set a redstone module to respond to energy or fluid storage levels.</h6>
   
        <hr>
        
        <label style="color:#1b9bff;font-size:20px;font-weight:bold;">Active Events</label>
        <div class="rules_container" id="active_events" >
          <div class="no_events" style="text-align:center;color:#666666;font-weight:bold;width:100%">
            No active redstone events.
          </div>  
        </div>
     
        <label style="color:#1b9bff;font-size:20px;font-weight:bold;margin-top:25px;">Create Event</label>
        <div class="rules_container" style="width:100%;padding:10px;">
          <div class="row">
            <div class="large-6 columns">
              <label style="font-size:20px;font-weight:bold;">Trigger</label>
              <select class="rules_select" id="storage_modules">
                <option value="" disabled selected>Select energy/fluid module</option>
              </select>
              <select class="rules_select" id="event_type">
                <option value="1">when storage is greater than</option>
                <option value="2">when storage is less than</option>
              </select>
              <input type="text" placeholder="00" id="trigger_value" style="background-color:#444444;color:#ffffff;width:50px;display:inline"/> %
            </div>
            <div class="large-6 columns">
              <label style="font-size:20px;font-weight:bold;">Action</label>
              <select class="rules_select" id="redstone_modules">
                <option value="" disabled selected>Select redstone module</option>
              </select>
              <select class="rules_select" id="module_side">
                <option value="" disabled selected>Choose module side</option>
              </select>
              <select class="rules_select" id="output_value">
                <option value="" disabled selected>Select output</option>
                <option value="1">True</option>
                <option value="0">False</option>
              </select>
               
            </div>
          </div>
          <div class="row">
            <center><button type="submit" id="login_btn">Create</button></center>
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
    <script src="js/login_check.js"></script>
    <script src="js/redstone_events.js"></script>
	
  </body>
</html>
