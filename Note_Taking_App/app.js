
// selecting the input element 
let inpEle=document.querySelector('input');
// selecting list
let list=document.querySelector('#list');
//selecting the button
let btnEle=document.querySelector('#btn');

btnEle.addEventListener('click',function(){

    //creating the li
    let li=document.createElement('li');
    let task=document.createElement('p');
    let remBtn=document.createElement('button');

    let inp=inpEle.value;  //accessing the task written by the user
    task.innerText=inp; 
    remBtn.innerText='Remove';
    remBtn.setAttribute('class','removeMe');
    li.append(task,remBtn);  //adding button and task inside the li

    list.appendChild(li);  // adding the li inside the ul


    // clearing the input element after a task is added

    inpEle.value='';

    //removing the li after clicking on the remove button
    remBtn.addEventListener('click',function(){
        let parentli=remBtn.parentElement;
        parentli.remove();
    });

});























