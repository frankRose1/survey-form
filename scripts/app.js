$(document).ready(function(){
    const leftArr = $('.lt');
    const rightArr = $('.rt');
    //input fields
    const textInput = $('input[type="text"]');
    const emailInput = $('input[type="email"]');
    const ageInput = $('input[type="age"]');

    function shiftText(){
        const text = $(this).attr('placeholder');
        const id = $(this).attr('id');
        const label = $('label[for="'+ id +'"]');
        $(label).text(text);
        $(this).attr('placeholder', '');
    }

    textInput.on('mouseenter', shiftText);
    textInput.on('mouseenter', shiftText);
    textInput.on('mouseenter', shiftText);
});