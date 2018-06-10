$(document).ready(function(){

    const leftArr = $('.lt');
    const rightArr = $('.rt');
    //input fields
    const textInput = $('input[type="text"]');
    const emailInput = $('input[type="email"]');
    const ageInput = $('input[type="number"]');
    //dropdown menus
    const menu1 = document.querySelector('#dropdown');
    const menu2 = document.querySelector('#dropdown2');
    const other = $('option[value="other"]');

    //toggle the placeholder text in and out of the input/label
    function shiftText(){
        const text = $(this).attr('placeholder');
        const id = $(this).attr('id');
        const label = $('label[for="'+ id +'"]');
        $(label).addClass('active');
        $(this).attr('placeholder', '');
    } 

    function replaceText(){
        const id = $(this).attr('id');
        const label = $('label[for="'+ id +'"]');
        const  text = label.text();
        $(this).attr('placeholder', `${text}...`);
        label.removeClass('active');
    }

    textInput.on('mouseenter', shiftText);
    textInput.on('mouseleave', replaceText);

    emailInput.on('mouseenter', shiftText);
    emailInput.on('mouseleave', replaceText);

    ageInput.on('mouseenter', shiftText);
    ageInput.on('mouseleave', replaceText);

    //show the textarea if user selects 'other'
    function showField(e){
        const textArea1 = document.querySelector('.other');
        const textArea2 = document.querySelector('.other2');
        if( e.target.value === 'other'){ 
            textArea1.classList.add('show');
        } else if(e.target.value === 'other2') {
            textArea2.classList.add('show');
        } else {
            textArea1.classList.remove('show');
            textArea2.classList.remove('show');
        }
    }
    menu1.addEventListener('change', showField);
    menu2.addEventListener('change', showField);

}); //end doc ready