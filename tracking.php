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
               <li><a href='home.php'><span>Home</span></a></li>
             </ul>
          </div>
          <soan id="menu_headers">Monitoring</span>
          <div id='cssmenu'>
               
             <ul>  
               <li class='active'><a href='tracking.php'><span>Player Tracking</span></a></li>
               <li><a href='energy.php'><span>Energy Storage</span></a></li>
               <li><a href='fluid.php'><span>Fluid Storage</span></a></li>
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
			
     <h3 style="color:#0099FF">Connected player modules:</h3>
     Module Online/Offline status acurate within 1-2 minutes.<br>
     Player logs limited to the most recent 50 records per player per sensor. (for now)<br>
     <span style="color:red;font-wright:bold">NOTE: inventory tracking is not working yet.</span>
     <hr>
     
      <ul id="log">
				   
			</ul>
     
     
      <div class="no_connected_modules">
        
      </div>
     
                
        </div>
      </div>
        

     

    <script src="js/vendor/jquery.js"></script>
    <script src="js/foundation.min.js"></script>
    <script>
      $(document).foundation();
    </script>
    <script src="js/login_check.js"></script>
    <script src="js/tracking.js"></script>
	
  </body>
</html>
