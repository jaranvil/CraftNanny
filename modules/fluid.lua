---------------------------------------------
--	Tank module for caftNanny
--	by demethan
--	www.breakfastcraft.com
---------------------------------------------

-- variables

local containers={}
local version = 1

local installer = "Q8ah3K9S"
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
	
	draw_text_term(2, 8, "I dont know what to put here...", colors.white, colors.black)
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


function phone_home(tank_name, fluid_type, percent)
    response = http.post("http://craftnanny.org/code/fluid.php",
        "token="..token.."&id="..os.getComputerID().."&tank_name="..tank_name.."&fluid_type="..fluid_type.."&percent="..percent)		
	return_string = response.readAll()
	
	if tonumber(return_string) > version then
        run_installer()
	end
end


--functions
function findSide()
	local face
	if peripheral.isPresent("left") then 
		face="left"
		return true, face
	elseif peripheral.isPresent("right") then 
		face="right"
		return true, face
	elseif peripheral.isPresent("bottom") then 
		face="bottom"
		return true, face
	elseif peripheral.isPresent("top") then 
		face="top"
		return true, face
	elseif peripheral.isPresent("back") then 
		face="back"
		return true,face
	else
		face=""
		return false,face
	end
end

function round(num, idp)
    local mult = 10^(idp or 0)
    return math.floor(num * mult + 0.5) / mult
end

function getTankInformation(t,tankName)
    tnk=peripheral.wrap(t)
    tankTbl=tnk.getTankInfo()
    capacity=tankTbl[1].capacity
    contentsTbl=tankTbl[1].contents or {["rawName"]="nothing",["amount"]=0}
    tankContentName=contentsTbl.rawName
    tankContentAmount=contentsTbl.amount
    percent=round((tankContentAmount/capacity*100),2)
    
    --print(tankName," ",tankContentName," ",percent," %        ")
    phone_home(tankName, tankContentName, percent)
end

function notanks()
	-- relevent error msg
end


function start_loop()
	ok,side=findSide ()
	if not ok then 
		notanks()
	end
	
	tanks = peripheral.getNames()

	while true do
		terminal_screen()
		
		-- I'm not use yet how to record multible tanks from one token in the db
		-- just recording the first one it connects to for now
		
		--if #tanks >1 then
			-- for tankNo,tank in pairs(tanks) do
			-- 	if tank~=side then
			-- 	getTank(tank,tank)			
			-- 	end
	
			-- end
			
		--else
			getTankInformation(side,tanks[1])
		--end
		
		-- main active status with server
		sleep(30)
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