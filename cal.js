console.log('working js iss connected');

//let displaybox = document.getElementById("TextView");
function fun(num){
    
    let displaybox = document.getElementById("TextView");
    
    displaybox.value = displaybox.value + num;
    
    //document.TextView.value = document.TextView.value + num;   
}

/*<imput name="TextView"/> inga     document.elementname.value than correct */
                           /*not  document.classname.value this is wrong.*/    

function Answer(){
    let displaybox = document.getElementById("TextView");
    let ans = displaybox.value;
    if(ans){
        displaybox.value = eval(ans);      //eval() - it is a buildin function.
    }
}

function clr(){
    let displaybox = document.getElementById("TextView");
    displaybox.value = " ";
}

function back(){
    let displaybox = document.getElementById("TextView");
    let ans = displaybox.value;
    displaybox.value = ans.substring(0, ans.length-1); //substring(starting, ending);
}