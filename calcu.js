var y, m, a;

function s(val)

{
		y = document.getElementById("d");
		m = Math.sin(y.value);

		y.value = m;
    	
}

function o(val)

{
		y = document.getElementById("d");
		m = Math.cos(y.value);
		y.value = m;
    	
}

function t(val)

{
		y = document.getElementById("d");
		m = Math.tan(y.value);
		y.value = m;
    	
}

function l(val)
{
		y = document.getElementById("d");
		m = Math.log(y.value);
		y.value = m;
}

function r(val)
{
		y = document.getElementById("d");
		m = Math.sqrt(y.value);
	y.value = m;
}

function q(val)

{
		
	m = ((y.value)*(y.value));
	y.value = m;
}

function p(val){
	input.value = Math.pow(val.display.value, val.display.value);
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
