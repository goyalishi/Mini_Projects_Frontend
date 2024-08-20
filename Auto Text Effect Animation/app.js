
let contEle=document.querySelector('.container');

const careers=['Web Developer','Artist','Engineer','Krishna Bhakt']

let careerIdx=0;
let charIdx=0;

updateText();

function updateText(){
    contEle.innerHTML=`<h1>I am 
    ${(careers[careerIdx].slice(0,1)==="A" || careers[careerIdx].slice(0,1)==="E" )? 'an':'a'} 
    ${careers[careerIdx].slice(0,charIdx)} <h1>`;
    charIdx++;
    if(charIdx===careers[careerIdx].length+1){
        charIdx=0;
        careerIdx++;
    }

    if(careerIdx===careers.length){
        careerIdx=0;
    }
    setTimeout(updateText,400);
}




