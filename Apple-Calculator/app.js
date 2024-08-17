

let buttons=document.querySelectorAll('button');

let input=document.querySelector('input');

for(let button of buttons){
    button.addEventListener('click',function(event){
        let btnTxt=event.target.innerText;
        if(btnTxt==='AC'){
            input.value='';
        }
        else if(btnTxt==='='){
            try{
                
                input.value=eval(input.value);
            }
            catch(e){
                input.value='invalid';
            }
            
        }
            
        else{
            input.value+=btnTxt;
        }

    })
    // agar 10 seconds tab kuch na kare hum to input clear ho jaaye
    button.addEventListener('click',function(event){
        let prevText=input.value;
        setTimeout(()=>{
            if(input.value===prevText)
                input.value='';
        },10000);
    })
    
}







