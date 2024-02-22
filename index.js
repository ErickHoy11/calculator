const display = document.getElementById("display");

function appendToDisplay(value){
    display.innerHTML += value;
}

function clearDisplay(){
    display.innerHTML = "";
}

function calculate(){
    try{
    const x = eval(display.innerHTML);
    if (x == undefined){
        throw new Error("no input");
    }
    if (isNaN(x)){
        throw new Error("NaN");
    }
    if (x == Infinity){
        throw new Error("NaN");
    }
    display.innerHTML = eval(display.innerHTML);
    }
    catch(error){
        console.error();
        display.innerHTML = "error";
    }
}