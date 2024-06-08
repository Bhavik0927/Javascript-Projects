let screen = document.querySelector('.screen');
let buttons = document.querySelectorAll('.btn');
let clear = document.querySelector('.btn-clear');
let equal = document.querySelector('.btn-equal');

buttons.forEach(function(button){
    button.addEventListener('click',(e) =>{
        let value = e.target.dataset.num;  // we create one attribute in html;
        // console.log(value);
        screen.value += value; 
    })

    equal.addEventListener('click', (e) =>{
        if(screen.value === ''){
            screen.value = "";  
        }else{
            let answer = eval(screen.value);  // eval() is used for doing operations
            screen.value = answer;
        }
    });

    clear.addEventListener('click',(e) =>{
        screen.value = ""
    })
})