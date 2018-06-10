$(document).ready(function(){
    const leftArr = $('.lt');
    const rightArr = $('.rt');
    //input fields
    const textInput = $('input[type="text"]');
    const emailInput = $('input[type="email"]');
    const ageInput = $('input[type="number"]');

    function shiftText(){
        const text = $(this).attr('placeholder');
        const id = $(this).attr('id');
        const label = $('label[for="'+ id +'"]');
        $(label).text(text);
        $(this).attr('placeholder', '');
    } 

    function replaceText(){
        const id = $(this).attr('id');
        const label = $('label[for="'+ id +'"]');
        const  text = label.text();
        $(this).attr('placeholder', text);
        label.text('');
    }

    //toggle the placeholder text in and out of the input/label
    textInput.on('mouseenter', shiftText);
    textInput.on('mouseleave', replaceText);

    emailInput.on('mouseenter', shiftText);
    emailInput.on('mouseleave', replaceText);

    ageInput.on('mouseenter', shiftText);
    ageInput.on('mouseleave', replaceText);
});