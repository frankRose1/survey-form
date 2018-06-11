$(document).ready(function(){

    const fieldsets = $('fieldset');
    const leftArrow = $('.lt');
    const rightArrow = $('.rt');
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
        let textArea;
        if( e.target.value === 'other' || e.target.value === 'other2'){ 
            const value = e.target.value;
            textArea = document.querySelector(`textarea[name="${value}"]`);
            textArea.classList.add('show');
        }  else {
            document.querySelector('.other').classList.remove('show');
            document.querySelector('.other2').classList.remove('show');
        }
    }
    menu1.addEventListener('change', showField);
    menu2.addEventListener('change', showField);

    //use the arrows to show the next fieldset
    function prev(){
        let currentField;
        let prevField; 
        //loop over the fieldsets to get the current position
        $(fieldsets).each( (i, el)=> {
            if ($(el).css('display') === 'block'){
                if(i === 0){
                    return;
                } else {
                    currentField = el;
                    prevField = fieldsets[i-1];
                } 
            } //end first if stmn
        }); //end loop
        $(currentField).hide();
        $(prevField).show(1500);
    }

    function next(){
        let currentField;
        let nextField;
        $(fieldsets).each( (i, el) =>{
            if ($(el).css('display') === 'block'){
                    if(i === (fieldsets.length - 1)){
                        return;
                    } else {
                        currentField = el;
                        nextField = fieldsets[i+1];
                    } 
                } //end first if stmn    
        }); //end loop
        $(currentField).hide();
        $(nextField).show(1500);
    }

    leftArrow.on('click', prev);
    rightArrow.on('click', next);

}); //end doc ready