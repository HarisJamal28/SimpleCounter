var Increase = document.getElementById('Increase');
var Decrease = document.getElementById('Decrease');
var Reset = document.getElementById('Reset');
var Count = document.getElementById('Count');

var i = 0;
// Count.innerText = i;

function IncreaseNum(){
    i++;
    Count.innerText = i;
    console.log(i);
    check();
}

function DecreaseNum(){
    i--;
    Count.innerText = i;
    console.log(i);
    check();
}

function ResetNum(){
    i = 0;
    Count.innerText = i;
    check();
}

function check(){
    if(i==0){
        Count.style.color = 'black'
    }else{
    if(i>0){
        Count.style.color = 'green'
    }else{
        Count.style.color = 'red'
    }
    }
}