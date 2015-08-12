-- CraftNanny
-- Redstone module
local version = 2

-- pastebin for installer
local installer = "Q8ah3K9S"
local time = 0
local token = '0'
-- this scanners name
local module_name = ''
-- owenrs username on website
local username = ''
local type = ''

local top = ''
local bottom = ''
local front = ''
local back = ''
local left = ''
local right = ''

local top_input = 0
local bottom_input = 0
local front_input = 0
local back_input = 0
local left_input = 0
local right_input = 0

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
	draw_text_term(15, 1, 'CraftNanny Redstone Module', colors.gray, colors.lime)
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
	
	draw_text_term(2, 6, 'Top: '..top, colors.white, colors.black)
	draw_text_term(2, 7, 'Bottom: '..bottom, colors.white, colors.black)
	draw_text_term(2, 8, 'Front: '..front, colors.white, colors.black)
	draw_text_term(2, 9, 'Back: '..back, colors.white, colors.black)
	draw_text_term(2, 10, 'Right: '..right, colors.white, colors.black)
	draw_text_term(2, 11, 'Left: '..left, colors.white, colors.black)
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


function string:split(delimiter)
  local result = { }
  local from  = 1
  local delim_from, delim_to = string.find( self, delimiter, from  )
  while delim_from do
    table.insert( result, string.sub( self, from , delim_from-1 ) )
    from  = delim_to + 1
    delim_from, delim_to = string.find( self, delimiter, from  )
  end
  table.insert( result, string.sub( self, from  ) )
  return result
end

function phone_home()
	getInputs()

    response = http.post("http://craftnanny.org/code/redstone.php",
    			"token="..token.."&id="..os.getComputerID().."&top_input="..top_input.."&bottom_input="..bottom_input.."&front_input="..front_input.."&back_input="..back_input.."&left_input="..left_input.."&right_input="..right_input)		
	return_string = response.readAll()
	
	result_array = string.split(return_string,",")
	current_version = result_array[1]
	
	if tonumber(result_array[2]) == 1 then
		rs.setOutput('top', true)
		top = 'true'
	else
		rs.setOutput('top', false)
		top = 'false'
	end
	if tonumber(result_array[3]) == 1 then
		rs.setOutput('bottom', true)
		bottom = 'true'
	else
		rs.setOutput('bottom', false)
		bottom = 'false'
	end
	if tonumber(result_array[4]) == 1 then
		rs.setOutput('back', true)
		back = 'true'
	else
		rs.setOutput('back', false)
		back = 'false'
	end
	if tonumber(result_array[5]) == 1 then
		rs.setOutput('front', true)
		front = 'true'
	else
		rs.setOutput('front', false)
		front = 'false'
	end
	if tonumber(result_array[6]) == 1 then
		rs.setOutput('left', true)
		left = 'true'
	else
		rs.setOutput('left', false)
		left = 'false'
	end
	if tonumber(result_array[7]) == 1 then
		rs.setOutput('right', true)
		right = 'true'
	else
		rs.setOutput('right', false)
		right = 'false'
	end

	if tonumber(current_version) > version then
			run_installer()
	end
end

function getInputs()
	if rs.getInput('top') then
		top_input = 1
	else
		top_input = 0
	end
	if rs.getInput('bottom') then
		bottom_input = 1
	else
		bottom_input = 0
	end
	if rs.getInput('front') then
		front_input = 1
	else
		front_input = 0
	end
	if rs.getInput('back') then
		back_input = 1
	else
		back_input = 0
	end
	if rs.getInput('left') then
		left_input = 1
	else
		left_input = 0
	end
	if rs.getInput('right') then
		right_input = 1
	else
		right_input = 0
	end
	
end

------  End module specific code ---------


function start_loop()
	phone_home()
	while true do
		terminal_screen()
		
		-- main active status with server
		time = time + 1
		if time > 30 then
			time=0
			phone_home()
		end
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





