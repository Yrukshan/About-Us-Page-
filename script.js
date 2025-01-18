// Variables

var slides= document.querySelectorAll('.slide');
var rbtn= document.querySelectorAll('.rad-btn');
var slideInt; //Store Ongoing Timer
var intTime= 5000;

//Iterate All Radio Navigation Buttons

rbtn.forEach(function(item, index){

    //Click event for buttons

    item.addEventListener('click',function(){
        manButtonNav(index);
    });
});

//Function for Radio Navigation

function manButtonNav(index){
    for(var i=0; i<slides.length; i++){

        //Set slide and radio navigation button

        if(i !== index){
            slides[i].classList.remove('curr');
            rbtn[i].classList.remove('active');
        }
        else{
            slides[index].classList.add('curr');
            rbtn[index].classList.add('active');
        }
    }

    clrInterval();
}

//Function for the Next Slide

function nextSlide(){
    var curr= document.querySelector('.curr');
    var active= document.querySelector('.active');

    //Unset Current Slide and Radio Button

    curr.classList.remove('curr');
    active.classList.remove('active');

    //Set Nextslide and Radio Button

    if(curr.nextElementSibling){
        curr.nextElementSibling.classList.add('curr');
        active.nextElementSibling.classList.add('active');
    }
    else{
        slides[0].classList.add('curr')
        rbtn[0].classList.add('active');
    }
}

//Function for the Previous Slide

function prevSlide(){
    var curr= document.querySelector('.curr');
    var active= document.querySelector('.active');

    //Unset Current Slide and Radio Button

    curr.classList.remove('curr');
    active.classList.remove('active');

    //Set Previous Slide and Radio Button

    if(curr.previousElementSibling){
        curr.previousElementSibling.classList.add('curr');
        active.previousElementSibling.classList.add('active');
    }
    else{
        slides[slides.length-1].classList.add('curr')
        rbtn[rbtn.length-1].classList.add('active');
    }
}

//Function for Clear Intteval

function clrInterval(){
    clearInterval(slideInt);
    slideInt=setInterval(nextSlide,intTime);
}

// Automatic slide Navigation

slideInt=setInterval(nextSlide, intTime);