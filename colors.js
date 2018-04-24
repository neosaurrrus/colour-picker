var numSquares = (6);
var colors = [];
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton= document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");

init();

//FUNCTIONS


function init(){
	setupModeButtons();
	setupSquareLogic();
	//RESET BUTTON EL LOGIC
	reset();
	
}

function setupModeButtons(){
		//Mode Button AND RESET EL Logic
	for(var i=0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			//figure out how many squares to show
			this.textContent === "Easy" ? numSquares = 3: numSquares= 6;
			reset()
		});
	}
	resetButton.addEventListener("click", function(){
		reset();
		});
}

function setupSquareLogic(){
	for (var i = 0; i < squares.length; i++){
	//Add click listeners to squares
	squares[i].addEventListener("click", function(){
		//Get colour of clicked square
		var clickedColor = this.style.background;
	
		//compare to picked colour
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Winner is you!";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			resetButton.textContent="Play Again?";
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
		});
	}
}
function changeColors(color){
	//loop through all squares
	for (var i = 0; i < squares.length; i++){
		// change each color to match given color
		squares[i].style.background = color;
	}
}
function pickColor(){
	//pick a random number between 0 and 5
	var random = Math.floor(Math.random() * colors.length);
	//use that number to pick from the array
	return colors[random];
}
function generateRandomColors(num){
	//make an array
	var arr = []
	//add num random colors to array
	for(var i=0; i < num; i++){
		arr.push(randomColor());
		//get random colour and push array
	}
	//return that array
	return arr;
}
function randomColor(){
	//pick a "red" from 0 to 255
	var r = Math.floor(Math.random() * 256);
	//pick a green from - = 255
	var g = Math.floor(Math.random() * 256);
	//pick a blue from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", "+ g + ", " + b + ")";
}
function reset(){
	messageDisplay.textContent = "";
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random colour fgro array
	pickedColor = pickColor();
	//change ColorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change colours of squares
	for (var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	//Add Colours to Squares
	//reset h1 color
	h1.style.background = "steelblue";
	//reset Button text
	resetButton.textContent="New Colours";
}
