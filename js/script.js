// setValues function  ~ js for draw option dynamically 
function setValues(pageName) {
	let rgbRedDropdownField;
	let rgbGreenDropdownField;
	let rgbBlueDropdownField;
	let cmyCyanDropdownField;
	let cmyMagentaDropdownField;
	let cmyYellowDropdownField;

	if(pageName == 'rgb') {
		rgbRedDropdownField = document.getElementById('rgbRedDropdown');
		rgbGreenDropdownField = document.getElementById('rgbGreenDropdown');
		rgbBlueDropdownField = document.getElementById('rgbBlueDropdown');
	} else if(pageName == 'cmy') {
		cmyCyanDropdownField = document.getElementById('cmyCyanDropdown');
		cmyMagentaDropdownField = document.getElementById('cmyMagentaDropdown');
		cmyYellowDropdownField = document.getElementById('cmyYellowDropdown');
	}


	for (let i=0; i<=255; i++) {
		let dropdownOption = document.createElement("option");
		dropdownOption.text = i;
		dropdownOption.value = i;
		if(pageName == 'rgb') {
			rgbRedDropdownField.appendChild(dropdownOption.cloneNode(true));
			rgbGreenDropdownField.appendChild(dropdownOption.cloneNode(true));
			rgbBlueDropdownField.appendChild(dropdownOption.cloneNode(true));
		} else if(pageName == 'cmy') {
			cmyCyanDropdownField.appendChild(dropdownOption.cloneNode(true));
			cmyMagentaDropdownField.appendChild(dropdownOption.cloneNode(true));
			cmyYellowDropdownField.appendChild(dropdownOption.cloneNode(true));
		}
	}
}
// ends here ~ js for draw option dynamically

// common function for return random color
function returnRgbRandomColor() {
	let dynamicColor = "#" + ((1 << 24) + (Math.floor(Math.random() * 255) << 16) + (Math.floor(Math.random() * 255) << 8) + Math.floor(Math.random() * 255)).toString(16).slice(1);
	return dynamicColor;
}
// ends here ~ common function for return random color

// common function for change variable color
let changeWordColor = function(searchElement,wordParam, color) {
	let changeWordArray = $(""+searchElement+":contains('"+wordParam+"'):not(:has(:contains('"+wordParam+"')))")
	console.log(changeWordArray)
	for (let i=0; i<changeWordArray.length; i++) {
		if(changeWordArray[i].innerHTML == wordParam) {
			changeWordArray[i].innerHTML = `<span style="color:${color}">${wordParam}</span>`;
		}
	}
} 
// ends here ~ common function for change variable color

// common function for return random colors with float value
function returnRandomColorsWithFloat(redColorPar, greenColorPar, blueColorPar) {
	let redColorVal = redColorPar;
	let greenColorVal = greenColorPar;
	let blueColorVal = blueColorPar;

	// random Float Values 
	let randomRgbFloatValues = `(${(redColorVal/255).toFixed(2)}, ${(greenColorVal/255).toFixed(2)}, ${(blueColorVal/255).toFixed(2)})`;
	// ends here ~ random Float Values

	// random Dynamic Color 
	let randomDynamicColor = "#" + ((1 << 24) + (redColorVal << 16) + (greenColorVal << 8) + blueColorVal).toString(16).slice(1);;
	// ends here ~ random Dynamic Color

	// object for return values
	let randomColorObj = {'floatValue':randomRgbFloatValues, 'hexValue':randomDynamicColor}
	return randomColorObj;
	// ends here ~ object for return values

}
// ends here ~ common function for return random colors with float value

// rgb color function
function rgb() {
	changeWordColor('*','Red', 'red')
	changeWordColor('*','Green', '#0F740A')
	changeWordColor('*','Blue', '#0B0F59')
	changeWordColor('*','R', 'red')
	changeWordColor('*','G', '#0F740A')
	changeWordColor('*','B', '#0B0F59')
}
// ends here ~ rgb color function


// displayRGBColor function
function displayRGBColor() {
	// get dropdown values
	let redColor =  parseInt(document.getElementById('rgbRedDropdown').value);
	let greenColor = parseInt(document.getElementById('rgbGreenDropdown').value);
	let blueColor = parseInt(document.getElementById('rgbBlueDropdown').value);
	// ends here ~ get dropdown values


	// hexadecimal value
    let rgbHexadecimalVal =  "#" + ((1 << 24) + (redColor << 16) + (greenColor << 8) + blueColor).toString(16).slice(1);
    // ends here ~ hexadecimal value

    // set hexadecimal value to table 
    document.getElementById('rgbTableHexValue').textContent = rgbHexadecimalVal;
    document.getElementById('rgbTableDisplayColor').style.backgroundColor = rgbHexadecimalVal; 
    // ends here ~ set hexadecimal value to table

	// rgb float values
	let rgbFloatValues = `(${(redColor/255).toFixed(2)}, ${(greenColor/255).toFixed(2)}, ${(blueColor/255).toFixed(2)})`;
    document.getElementById('rgbTableFloatValue').textContent = rgbFloatValues;
	// ends here ~ rgb float values    
}
// ends here ~ displayRGBColor function 


// generate random color function
function generateRandomColors() {
	// empty tbody every time
	document.getElementById('randomColorTableBody').innerHTML = '';
	// ends here ~ empty tbody every time
	document.getElementById('completeRandomColorTable').style.display = 'table';
	for(let i=0; i<10; i++) {
		let randomColorReturnVal = returnRandomColorsWithFloat(Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255))
		let newRandomContentRow = `<tr><td>${randomColorReturnVal.floatValue}</td><td>${randomColorReturnVal.hexValue}</td><td style="background: ${randomColorReturnVal.hexValue}"></td></tr>`;
		$(newRandomContentRow).appendTo($("#randomColorTableBody"));

	}
}
// ends here ~ generate random color function

// cmy function 
function cmy() {
	changeWordColor('*','Cyan', '#009ED5')
	changeWordColor('*','Magenta', '#EC9282')
	changeWordColor('*','Yellow', '#FAE110')
	changeWordColor('*','C', '#009ED5')
	changeWordColor('*','M', '#EC9282')
	changeWordColor('*','Y', '#FAE110')
}
// ends here ~ cmy function

// displayCMYColor function
function displayCMYColor() {
	// get dropdown values
	let cyanColor =  parseInt(document.getElementById('cmyCyanDropdown').value);
	let magentaColor = parseInt(document.getElementById('cmyMagentaDropdown').value);
	let yellowColor = parseInt(document.getElementById('cmyYellowDropdown').value);
	// ends here ~ get dropdown values

	// convert according to formula
	let cyanToRed = 255 - cyanColor;
	let magentaToGreen = 255 - magentaColor;
	let yellowToBlue = 255 -yellowColor;
	// ends here  ~ convert according to formula

	// call function for rgb color
	let displayCmyColorVal = returnRandomColorsWithFloat(cyanToRed,magentaToGreen,yellowToBlue)
	// ends here ~ call function for rbg color
	document.getElementById('rgbTableFloatValue').textContent = displayCmyColorVal.floatValue;
	document.getElementById('rgbTableHexValue').textContent = displayCmyColorVal.hexValue;
	document.getElementById('rgbTableDisplayColor').style.backgroundColor = displayCmyColorVal.hexValue;
}
// ends here ~ displayCMYColor function

// set web safe colors array as globally
let webSafeAllColorArray = ['#000000','#000033','#000066','#000099','#0000CC','#0000FF','#003300','#003333','#003366','#003399','#0033CC','#0033FF','#006600','#006633','#006666','#006699','#0066CC','#0066FF','#009900','#009933','#009966','#009999','#0099CC','#0099FF','#00CC00','#00CC33','#00CC66','#00CC99','#00CCCC','#00CCFF','#00FF00','#00FF33','#00FF66','#00FF99','#00FFCC','#00FFFF','#330000','#330033','#330066','#330099','#3300CC','#3300FF','#333300','#333333','#333366','#333399','#3333CC','#3333FF','#336600','#336633','#336666','#336699','#3366CC','#3366FF','#339900','#339933','#339966','#339999','#3399CC','#3399FF','#33CC00','#33CC33','#33CC66','#33CC99','#33CCCC','#33CCFF','#33FF00','#33FF33','#33FF66','#33FF99','#33FFCC','#33FFFF','#660000','#660033','#660066','#660099','#6600CC','#6600FF','#663300','#663333','#663366','#663399','#6633CC','#6633FF','#666600','#666633','#666666','#666699','#6666CC','#6666FF','#669900','#669933','#669966','#669999','#6699CC','#6699FF','#66CC00','#66CC33','#66CC66','#66CC99','#66CCCC','#66CCFF','#66FF00','#66FF33','#66FF66','#66FF99','#66FFCC','#66FFFF','#990000','#990033','#990066','#990099','#9900CC','#9900FF','#993300','#993333','#993366','#993399','#9933CC','#9933FF','#996600','#996633','#996666','#996699','#9966CC','#9966FF','#999900','#999933','#999966','#999999','#9999CC','#9999FF','#99CC00','#99CC33','#99CC66','#99CC99','#99CCCC','#99CCFF','#99FF00','#99FF33','#99FF66','#99FF99','#99FFCC','#99FFFF','#CC0000','#CC0033','#CC0066','#CC0099','#CC00CC','#CC00FF','#CC3300','#CC3333','#CC3366','#CC3399','#CC33CC','#CC33FF','#CC6600','#CC6633','#CC6666','#CC6699','#CC66CC','#CC66FF','#CC9900','#CC9933','#CC9966','#CC9999','#CC99CC','#CC99FF','#CCCC00','#CCCC33','#CCCC66','#CCCC99','#CCCCCC','#CCCCFF','#CCFF00','#CCFF33','#CCFF66','#CCFF99','#CCFFCC','#CCFFFF','#FF0000','#FF0033','#FF0066','#FF0099','#FF00CC','#FF00FF','#FF3300','#FF3333','#FF3366','#FF3399','#FF33CC','#FF33FF','#FF6600','#FF6633','#FF6666','#FF6699','#FF66CC','#FF66FF','#FF9900','#FF9933','#FF9966','#FF9999','#FF99CC','#FF99FF','#FFCC00','#FFCC33','#FFCC66','#FFCC99','#FFCCCC','#FFCCFF','#FFFF00','#FFFF33','#FFFF66','#FFFF99','#FFFFCC','#FFFFFF'];
// ends here ~ set web safe colors array as globally

// function displaySafeColors
function displaySafeColors() {
	let webSafeColorDivData = document.getElementById('webSafeColorDiv')
	webSafeColorDivData.innerHTML='';
	for(let i=0; i<webSafeAllColorArray.length; i++) {
		let newWebSafeColorContent = `<div class="col-md-2 col-sm-3 col-xs-4" style="background:${webSafeAllColorArray[i]}; height:30px; padding: 3px;">${webSafeAllColorArray[i]}</div>`;
		$(newWebSafeColorContent).appendTo($("#webSafeColorDiv"));
	}
}
// ends here ~ function displaySafeColors
