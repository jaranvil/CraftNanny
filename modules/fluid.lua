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


	-- write text to the terminal screen
	function draw_text_term(x, y, text, text_color, bg_color)
		term.setTextColor(text_color)
  		term.setBackgroundColor(bg_color)
  		term.setCursorPos(x,y)
  		write(text)
	end

	-- draw a line on the terminal screen
	function draw_line_term(x, y, length, color)
		term.setBackgroundColor(color)
    		term.setCursorPos(x,y)
    		term.write(string.rep(" ", length))
	end

	function bars()
		draw_line_term(1, 1, 51, colors.lime)
		draw_line_term(1, 19, 51, colors.lime)
		draw_text_term(15, 1, 'CraftNanny Fluid Module', colors.gray, colors.lime)
		draw_text_term(10, 19, 'www.craftnanny.org', colors.gray, colors.lime)
	end

	function terminal_screen()
		term.clear()
	
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

	function Tank:new (o)
      		o = o or {}   -- create object if user does not provide one
      		setmetatable(o, self)
      		self.__index = self
     		return o
	end
	function Tank:calcPercent()
		if self.fluidAmount > 0 then
			return round((self.fluidAmount/self.fluidCapacity*100),2)
		else
			return 0
		end
	end	

	------ // Tank Class -------
 
        function phone_home(t)
                response = http.post("http://craftnanny.org/code/fluid.php", 		"token="..token.."&id="..os.getComputerID().."&tank_name="..t.name.."&fluid_type="..t.fluidName.."&percent="..t.fluidPercent)              
                return_string = response.readAll()
               
                if tonumber(return_string) > version then
                                run_installer()
                end
        end

	function writeScreen(t, i)
		print(t.fluidName," :")
                graphBar= round((((term.getSize()-10)*t.fluidPercent)/100),0)
		i = i-1
                if graphBar < 50 then
                	draw_line_term(10, 6+i*3, graphBar , colors.green)
                        draw_line_term(10+graphBar,6+i*3,term.getSize()-graphBar-10,colors.red)
                        draw_text_term(1, 6+i*3, t.fluidPercent.." % ",colors.lime,colors.black)
                        term.setBackgroundColor(colors.black)
                else
                        draw_line_term(10, 6+i*3, graphBar-10 , colors.green)
                        draw_text_term(1, 6+i*3, t.fluidPercent.." % ",colors.lime,colors.black)
                        term.setBackgroundColor(colors.black)
                end
		print(" ")print(" ")        
	end
 
 
        --functions
        function findSide()
		r = {}
                for face = 1, 6, 1 do
                        -- Check Sides for normal Tank
                        local f = rs.getSides()[face]
                        if peripheral.isPresent(f) then
                                table.insert(r, f)
                        end
                end
		if #r > 0 then
			return true, r
		end
                return false, ""
        end
 
        function round(num, idp)
          	local mult = 10^(idp or 0)
          	return math.floor(num * mult + 0.5) / mult
        end
 
        function getTankInformation(face,tankName, i)
		local t= Tank:new{}
                local tnk=peripheral.wrap(face)
                local tankContentAmount = 0
		--t[i] = Tank:new{}
		t.name = tankName
                       
			-- get tank information			

                        if tnk.isConnected then
				--is PressurePipes Tank

                                t.fluidCapacity 	= tnk.getCapacity()

				if(tnk.hasFluid()) then
                                        local fluid 	= tnk.getFluid()
					
					t.fluidAmount 	= fluid["amount"]
					t.fluidName 	= fluid["name"]
					t.fluidPercent	= t:calcPercent()
                                else
                                        t.fluidName	= "nothing"
                                        t.Amount	= 0
					
                                end                                								
                        else
				okLiquid,msg = pcall(tnk.getTankInfo)
                                if okLiquid then
                                	tankTbl		= tnk.getTankInfo()
                                	t.fluidCapacity	= tankTbl[1].capacity
                                	contentsTbl	= tankTbl[1].contents or {["rawName"]="nothing",["amount"]=0}
                                	t.fluidName	= contentsTbl.rawName
                                	t.fluidAmount	= contentsTbl.amount    
					t.fluidPercent	= t:calcPercent()      
				end
                        end
                       
			-- process tank information
			writeScreen(t, i)
                        phone_home(t)
			--print(t.name," ",t.fluidName," ",t.fluidPercent," %",t.fluidCapacity)			
			
			
			return true
        end
 
        function notanks()
                -- relavent error msg
        end
 
 
	function start_loop()
		ok,side=findSide ()
		if not ok then 
			print("No tank storage found")
		else
			tanks = peripheral.getNames()
			terminal_screen()

			while true do
				if #side > 0 then
					for i = 1, #side, 1 do
						ok = getTankInformation(side[i],"Tank"..os.getComputerID(), i)
						if not ok then 
							print("No tank storage found")
							print("Do you have the right module?")
							print("Please check your modems")
							break
						end
					end
			
				end
				-- main active status with server
				sleep(30)
				return true
			end
		end
	end
 
        function start()
                term.clear()
                term.setCursorPos(1,1)
               
          if fs.exists("config.txt") then
                  load_config()
                  start_loop()
          else
                  run_installer()
          end
        end
 
        start()
