var y;/*takes the value gotten from the input*/
var m;/*a variable name to contain sin, cos, tan, square root, square, power computations*/

var s = function(val) { /*s is a variable name for sin*/
  y = document.getElementById("d");
  m = Math.sin(y.value);
  y.value = m;

};

/**/
var o = function(val){  /*o is a variable name for cos*/
    y = document.getElementById("d");
    m = Math.cos(y.value);
  y.value = m;

};

var t = function(val){  /*t is a variable name for tan*/
  y = document.getElementById("d");
  m = Math.tan(y.value);
  y.value = m;

};

var l = function(val){ /*l is a variable name for log*/
  y = document.getElementById("d");
  m = Math.log(y.value);
  y.value = m;

};

var r = function(val){ /*r is a variable name for square root*/
  y = document.getElementById("d");
  m = Math.sqrt(y.value);
  y.value = m;

};

var q = function(val){ /*q is a variable name for square*/
  y = document.getElementById("d");
  m = ((y.value)*(y.value));
    y.value = m;
};

/*
var p = function (base, power) {

  y = document.getElementById("d").value;

  power = Math.round(power);
  
  if (power === 0) {
    return 1;
  }
  if (power < 0) {
    return 1 / pow(base, -power);
  }
  if (power > 0) {
    return base * pow(base, power - 1)
  }
  
}; 

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
}
*/

function c(val) {
        document.getElementById("d").value=val;
    }

function v(val)
    {
        eval(document.getElementById("d").value+=val);
    }

function e() { 
try 
    { 
  c(eval(document.getElementById("d").value)) 
    } 
catch(e) 
    {
  c('Error') 
    } 
}  
