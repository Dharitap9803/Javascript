const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body")

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(e){
         console.log(e)
         console.log(e.target)
         if(e.target === 'grey'){
            body.style.backgroundcolour = e.taget.id;
         }
                  if(e.target === 'white '){
            body.style.backgroundcolour = e.taget.id;
         }
                  if(e.target === 'blue'){
            body.style.backgroundcolour = e.taget.id;
         }
                  if(e.target === 'yellow'){
            body.style.backgroundcolour = e.taget.id;
         }

    });
});