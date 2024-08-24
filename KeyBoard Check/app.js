
let insert=document.querySelector('#insert');

window.addEventListener('keydown', (e) =>{
    insert.innerHTML=`
    <div class="table">
        <table>
           <tr>
            <th>key</th>
            <th>Keycode</th>
            <th>code</th>
            </tr>
           <tr>
            <td>${e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
           </tr> 

        </table>
    </div>
    `
})

