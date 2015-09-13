---------------------------------------------
--		Tank module for caftNanny
--		by demethan
--		www.breakfastcraft.com
--  		www.craftnanny.org
--		www.builtbroken.com		
--  		2015 08 12  demethan: 
--		-fixed modem support
--		-did some error magement
-- 		-added visual bar	
--		02.09.2015 Theudas:
--		- added support for Pressure Pipes
--		- added support for multiple tanks
--		- redone a lot of code to make it object oriented
--		- fixed the visual bars as they were cut off at the left side
---------------------------------------------
 
        -- variables
 
        local containers={}
        local version = 1
 
        local installer = "Ja5bQSqT"
		local token = '0'
		local module_name = ''
		local username = ''
		local type = ''	
		
		local tankArray = {}
        local names = {}
        local mon = term
 
        -- write text to the terminal screen
        function draw_text_term(x, y, text, text_color, bg_color)
                mon.setTextColor(text_color)
                mon.setBackgroundColor(bg_color)
                mon.setCursorPos(x,y)
                mon.write(text)
        end
 
        -- draw a line on the terminal screen
        function draw_line_term(x, y, length, color)
                mon.setBackgroundColor(color)
        mon.setCursorPos(x,y)
        mon.write(string.rep(" ", length))
        end
 
        function bars()
                draw_line_term(1, 1, 51, colors.lime)
                draw_line_term(1, 19, 51, colors.lime)
                draw_text_term(15, 1, 'CraftNanny Fluid Module', colors.gray, colors.lime)
                draw_text_term(10, 19, 'www.craftnanny.org', colors.gray, colors.lime)
        end
 
        function terminal_screen()
                mon.clear()
       
                bars()
                draw_text_term(1, 2, 'Module: ', colors.lime, colors.black)
                draw_text_term(10, 2, module_name, colors.white, colors.black)
                draw_text_term(1, 3, 'Owner: ', colors.lime, colors.black)
                draw_text_term(8, 3, username, colors.white, colors.black)
                draw_text_term(1, 4 , string.rep("-", 51), colors.lime, colors.black)
       
                --draw_text_term(2, 8, "I dont know what to put here...", colors.white, colors.black)
        end
 
        -- retrieves token from local text file
        function load_config()
                sr = fs.open("config.txt", "r")
                token = sr.readLine()
                module_name = sr.readLine()
                username = sr.readLine()
                type = sr.readLine()
                sr.close()
        end
 
        -- called for new installations and when the scanner needs to be updated
        function run_installer()
                if fs.exists("install") then
                        fs.delete("install")
                end
                shell.run("pastebin get "..installer.." install")
                sleep(1)
                shell.run("install")
        end
 
 
 
 
        ------  Start module specific code ---------
 
 
        ------ TANK Class, lets do it oop style baby --------
 
        Tank = {
                name="", fluidName="Nothing", fluidAmount=0, peripheral="", fluidCapacity=0, fluidPercent=0
        }
 
        -- creator class
        function Tank:new (o)
                o = o or {}   -- create object if user does not provide one
                setmetatable(o, self)
                self.__index = self
                return o
        end
       
        --calculate how much filled we are
        function Tank:calcPercent()
                if self.fluidAmount > 0 then
                        return round((self.fluidAmount/self.fluidCapacity*100),2)
                else
                        return 0
                end
        end    
       
        -- read the pressurepipes tanks
        function Tank:readPPTank()
                self.fluidCapacity      = self.p.getCapacity()
 
                if(self.p.hasFluid()) then
                        local fluid             = self.p.getFluid()
                                       
                        self.fluidAmount        = fluid["amount"]
                        self.fluidName          = fluid["name"]
                        self.fluidPercent       = self:calcPercent()
                else
                        self.fluidName          = "nothing"
                        self.Amount                     = 0
                end
        end
       
        -- read the standard bc tanks
        function Tank:readStandardTank()
                local tankTbl           = self.p.getTankInfo()
                self.fluidCapacity      = tankTbl[1].capacity
                contentsTbl                     = tankTbl[1].contents or {["rawName"]="nothing",["amount"]=0}
                self.fluidName          = contentsTbl.rawName
                self.fluidAmount        = contentsTbl.amount    
                self.fluidPercent       = self:calcPercent()
        end
       
        -- find out what kind of tank is there
        function Tank:readTank()
                if t.p.isConnected then
                        self:readPPTank()
                elseif t.p.getTankInfo then
                        t:readStandardTank()
                end
        end
        ------ // Tank Class -------
 
        function phone_home(t)
                response = http.post("http://craftnanny.org/code/fluid.php",
                        "token="..token.."&id="..os.getComputerID().."&tank_name="..t.name.."&fluid_type="..t.fluidName.."&percent="..t.fluidPercent)              
                return_string = response.readAll()
                   
                if tonumber(return_string) > version then
                        run_installer()
                end
        end
 
        function writeScreen(t, i)
                draw_text_term(1, 2+i*3, t.fluidName..": ",colors.white,colors.black)
                graphBar= round((((mon.getSize()-10)*t.fluidPercent)/100),0)
                i = i-1
                if graphBar < 50 then
                        draw_line_term(10, 6+i*3, graphBar , colors.green)
                        draw_line_term(10+graphBar,6+i*3,mon.getSize()-graphBar-10,colors.red)
                        draw_text_term(1, 6+i*3, t.fluidPercent.." % ",colors.lime,colors.black)
                        mon.setBackgroundColor(colors.black)
                else
                        draw_line_term(10, 6+i*3, graphBar-10 , colors.green)
                        draw_text_term(1, 6+i*3, t.fluidPercent.." % ",colors.lime,colors.black)
                        mon.setBackgroundColor(colors.black)
                end      
        end
               
        local function filter(name)
                table.insert(names, name)
                return true
        end
               
        function getModems()
                local m = {}
               
                -- get pp Tanks
                peripheral.find("tank_dataport", filter)
                for i = 1, #names, 1 do
                        local t = Tank:new{}
                        print(names[i])
                        t.p = peripheral.wrap(names[i])
                        t.name = "Tank"..os.getComputerID()
                        table.insert(tankArray, t)
                end
               
                -- get standard Tanks
                local x = peripheral.getNames()
                for i = 1, #x, 1 do
                        if pcall(peripheral.wrap(x[i]).getTankInfo) then
                                local t = Tank:new{}
                                t.p = peripheral.wrap(x[i])
                                t.name = "Tank"..os.getComputerID()
                                table.insert(tankArray, t)
                        end
                end
        end
               
 
        function round(num, idp)
                local mult = 10^(idp or 0)
                return math.floor(num * mult + 0.5) / mult
        end
               
        function updateTankInfo()
                for i = 1, #tankArray, 1 do
                        t = tankArray[i]
                        t:readTank()
                        writeScreen(t, i)
                        phone_home(t)
                end
        end
 
    function notanks()
                -- relavent error msg
        end
 
        -- Main Loop
        function start_loop()
                terminal_screen()
                getModems()
                       
                while true do
                        updateTankInfo()
                        -- main active status with server
                        --sleep(30)
                        return true
                end
        end
 
        function start()
                mon.clear()
                mon.setCursorPos(1,1)
               
                -- find a monitor to print onto
                local monitor = peripheral.find("monitor")
                if monitor then
                mon = monitor
                end
               
                --turn mainloop on if we are logged in
                if fs.exists("config.txt") then
                        load_config()
                        start_loop()
                else
                        run_installer()
                end
        end
 
        start()