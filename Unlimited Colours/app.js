// first we need to generate a random hexcode for color
const hex="0123456789ABCDEF"
let color='#';


const strt=document.querySelector('#start');
const stp=document.querySelector('#stop');
const body=document.querySelector('body');

function applyColor(){
    color='#';  // Reset color before generating a new one
    for(let i=0;i<6;i++){
        let idx=Math.floor(Math.random()*16);
        color+=hex.charAt(idx);
    }

    body.style.backgroundColor=color;
}  

const resetColor=()=>{
    body.style.backgroundColor='#FFFFFF';
    stopMe=null;
}

let stopMe
strt.addEventListener('click',function(){
    if(!stopMe){
        stopMe=setInterval(applyColor,1500);
    }
});
    

stp.addEventListener('click',()=>{
    clearInterval(stopMe);
    resetColor();
    
})
