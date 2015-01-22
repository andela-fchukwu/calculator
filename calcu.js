function sin(val){
	document.getElementById("d").value+=val;
	}
function c(val)
{
	document.getElementById("d").value=val;
}
function v(val)
{
	document.getElementById("d").value+=val;
}
function e() 
{ 
try 
{ 
  c(eval(document.getElementById("d").value)) 
} 
catch(e) 
{
  c('Error') 
} 
}  



/*$(document).ready(function(){
	var testNumLength = function(number) {
        if (number.length > 9) {
            displaydiv.text(number.substr(number.length-9,9));
            if (number.length > 15) {
                number = "";
                displaydiv.text("Err");
            }
        } 
    };

Here, I have created three functions. Function c(val) is used for clearing the data from the display. When we click on "C" button, then onclick='c("")' event runs and searches for c(val) function and displays the value according to the parameter passed inside it (here, we have not passed any parameter so the input screen appears blank or clear).

Function v(val) is used for typing numbers as well as mathematical operators.

Function e() is used for evaluating, i.e., on clicking "=" button, value inside the Id="d" is solved.


	var number = "";
    var newnumber = "";
    var operator = "";
    var displaydiv = $(".display");
    totaldiv.text("0");

    $("#curly button").not("#clr").click(function(){
		number += $(this).text();
		displaydiv.text(number);
		testNumLength(number);
    });
    $("#number button").not("#equals").click(function(){
		operator = $(this).text();
		newnumber = number;
		number = "";
		totaldiv.text("0");
    });
    $("#clear,#clearall").click(function(){
		number = "";
		totaldiv.text("0");
		if ($(this).attr("id") === "clearall") {
			newnumber = "";
		}
    });
    $("#equals").click(function(){
		if (operator === "+"){
			number = (parseInt(number, 10) + parseInt(newnumber,10)).toString(10);
		} else if (operator === "-"){
			number = (parseInt(newnumber, 10) - parseInt(number,10)).toString(10);
		} else if (operator === "/"){
			number = (parseInt(newnumber, 10) / parseInt(number,10)).toString(10);
		} else if (operator === "*"){
			number = (parseInt(newnumber, 10) * parseInt(number,10)).toString(10);
		}
		totaldiv.text(number);
		testNumLength(number);
		number = "";
		newnumber = "";
    });
});

/*!

var v = function(input, char,){
	if (input.value = null || inut.valu = \"0"\) {
		input.value = char;
	};
	else{
		input.value = value + char;
	}
}

function sin(run){
	run.display.value = Math.sin(run.dispaly.value);
}

function cos(run){
	run.display.value = Math.cos(run.dispaly.value);
}

function tan(run){
	run.display.value = Math.tan(run.display.value);
}

function sqrt(run){
	run.dispaly.value = Math.sqrt(run.display.value);
}

function delchar(run){
	input.value = input.value.sbstring(0, input.value.length - 1);
}

function log(run){
	run.display.value = Math.log(run.display.value);
}

function raised(run){
	input.value = Math.pow(run.display.value, run.display.value)
}

function evaluate(run){
	run.display.value = eval(run.display.value);
}


function sq(run){
	input.value = eval(run.display.value) * eval(run.display.value);
}

function toCheckChar(str){
	for(var i = 0; i< str.length; i++){
		var chara = str.substring(i, i+1);
		if(chara < 0 || chara > 9){
			if(chara != \"-\" && chara != \"+\" && chara != \"/\" && chara != \"*\" && chara != \".\"){
				alert("Check Your Entry");
				return false;
			}
		}
	}
	return true;
}
*/