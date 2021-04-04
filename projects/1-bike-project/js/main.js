// blue button functionality
let blueButtonClick=document.getElementById('blueBtn');
let blueChangedJumbotron=document.querySelector('.jumbotron');
let blueChangedDonateButton=document.querySelector('.buttons a:first-child');
let changeVolunteer= document.querySelector('.buttons a:last-child');
blueButtonClick.addEventListener('click', () => {
    blueChangedJumbotron.style.backgroundColor = "#588fbd";
    blueChangedDonateButton.style.backgroundColor="#ffa500";
    changeVolunteer.style.backgroundColor="black";
    changeVolunteer.style.color="white";
});

//orange button functionality
let orangeButtonClick=document.getElementById('orangeBtn');
let orangeChangedJumbotron=document.querySelector('.jumbotron');
let  orangeChangedDonateButton=document.querySelector('.buttons a:first-child')
let orangeChangedVolunteerButton= document.querySelector('.buttons a + a'); //adjacent sibling selector
orangeButtonClick.addEventListener('click', () =>{
    orangeChangedJumbotron.style.backgroundColor='#f0ad4e';
    orangeChangedDonateButton.style.backgroundColor='#5751fd';
    orangeChangedVolunteerButton.style.backgroundColor="#31b0d5";
    orangeChangedVolunteerButton.style.color="#FFFFFF";
})

// green button functionality
let greenButtonClick=document.getElementById('greenBtn');
let greenChangedJumbotron=document.querySelector('.jumbotron');
let  greenChangedDonateButton=document.querySelector('.buttons a:first-child')
let greenChangedVolunteerButton= document.querySelector('.buttons a + a'); //adjacent sibling selector
greenButtonClick.addEventListener('click', () =>{
    greenChangedJumbotron.style.backgroundColor='#87ca8a';
    greenChangedDonateButton.style.backgroundColor='black';
    greenChangedVolunteerButton.style.backgroundColor="#8c9c08";
})


//Register form functionality
//access the DOM
let submitButton=document.getElementById("submit");
let getEmailInput=document.getElementById('exampleInputEmail1');
let getName=document.getElementById('example-text-input');
let getTextArea=document.getElementById('exampleTextarea');

//this check if all the field had been fill before clicking the submit button
function checkFill(){
    if(getEmailInput.value==='' ||getName.value===''|| getTextArea.value===''){
        alert('please fill all field');

    }
    return true;
}
// this check id the value inserted in the input field are in the correct format
function checkInput(){
    if(getEmailInput.value.includes('@') || getName.value.length > 0 || getTextArea.value !== ""){
        
        alert('great Thank you have successfully register')
        
    }
    else{
        getEmailInput.style.backgroundColor='red';
        getName.style.backgroundColor='red';
        getTextArea.style.backgroundColor='red';
        
    }
}
submitButton.addEventListener('click',() => {
    checkFill();
    checkInput()
});
