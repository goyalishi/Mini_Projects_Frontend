document.getElementById('submit-btn').addEventListener('submit', function(event){
    event.preventDefault(); 
})


document.getElementById('submit-btn').addEventListener('click', function(event) {
    var button = document.getElementById('submit-btn');
    var spinner = button.querySelector('.spinner');
    var buttonText = button.querySelector('.button-text');
    var formContainer = document.querySelector('.form-container');
    var bgImage = document.getElementById('image');
    var logo = document.querySelector('.logo');
    
    buttonText.style.visibility = 'hidden';
    spinner.style.visibility = 'visible';

    button.classList.add('spinner-active');

    setTimeout(function() {
        spinner.style.visibility = 'hidden';
        buttonText.style.visibility = 'visible';
        button.classList.remove('spinner-active');

        formContainer.style.animation = 'slide-down 2s forwards';
        
        setTimeout(function() {
           
            bgImage.style.animation = 'shrink-and-disappear 2s forwards';
            setTimeout(function() {
              
                logo.style.visibility = 'visible';
                logo.style.animation = 'pop-in-center 2s forwards';
            }, 2000); 
        }, 2000); 

    }, 2000); 
});
