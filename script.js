// Defining Items from HTML
let question_count=document.getElementById('question_count');
let question=document.getElementById('question');
let questions_section= document.querySelector(".questions_section");
let btn_yes=document.getElementById('btn_yes');
let btn_no=document.getElementById('btn_no');
let optional_button;
let main_section=document.querySelector('.main-section');
let gift_box_div=document.querySelector(".gift-box");


// Defining Global Variables
let count=1;
let count_ques=0;

// Creating questions and optional answers array
let questions=["Do you know Lulu Hypermarket?", "How old are you?", "How do you think of LuLu Hypermarket ?", " Are you male or female ?"]

let answer_button=[["yes","no"],["18-20", "20-30", "30-40", "Above 40"], ["Super", "Good", "Bad", "Worse"], ["Male", "Female"] ];

// function for remove Buttons
function removeExistButtons(){
    for(let i=0; i<answer_button[count_ques].length; i++){      
        let optional_button=document.getElementById("btns");
        if(optional_button!=null){
            optional_button.parentNode.removeChild(optional_button);
        }    
    }  

}

// function for remove Main Section
function removeMainSection(){
    if(main_section != null){
        main_section.parentNode.removeChild(main_section);
    }
}

// function for Create Buttons
function createButtons(){

    // Calling remove buttons while executing again
    removeExistButtons();

    for(let i=0; i<answer_button[count_ques].length; i++){
        optional_button=document.createElement("button");
        optional_button.setAttribute("id", "btns");
        optional_button.innerHTML=answer_button[count_ques][i];
        questions_section.appendChild(optional_button)
        optional_button.addEventListener("click", (e)=>{
            count=count+1;
            count_ques++;  
            if(count_ques <4){
                question.innerText=questions[count_ques];
                // Same Function call again
                createButtons();
            }
            question_count.innerText=count;
            if(count>4){
                // Function after question
                removeMainSection()
                giftBox();
            }
        })   
    }  
}

function giftBox(){
    alert("Congragulation!! You answered all of it!!")
    alert("Choose your gift from the box!!")
    document.getElementById("gift-section-div").style.display="grid";
  
    main_section=document.getElementById("main-section");
    if(main_section != null){
        main_section.style.display='none';
    }
}

// Giftbox click functions

let gift_clicked = 0;

function openGiftOne(){
   //document.getElementById("gift-one").style.top="-40px";
   document.getElementById("gift-one").style.animationName="openingGiftBox";
   document.getElementById("gift-one").style.animationDuration="2s";
   document.getElementById("gift-one").style.animationTimingFunction="ease";
   document.getElementById("gift-one").style.top="-35px";
   if(gift_clicked == 0){
    setTimeout(()=>{
        document.getElementById("two-chances-left").style.display="grid";
       }, 1500)
    }else{
        setTimeout(()=>{
            document.getElementById("win-iphone").style.display="grid";
        }, 2200)
    }
   
}
function openGiftTwo(){
    document.getElementById("gift-two").style.animationName="openingGiftBox";
    document.getElementById("gift-two").style.animationDuration="2s";
    document.getElementById("gift-two").style.animationTimingFunction="ease";
    document.getElementById("gift-two").style.top="-35px";
    if(gift_clicked == 0){
        setTimeout(()=>{
            document.getElementById("two-chances-left").style.display="grid";
           }, 1500)
    }else{
        setTimeout(()=>{
            document.getElementById("win-iphone").style.display="grid";
        }, 2200)
        
    }
}
function openGiftThree(){
    document.getElementById("gift-three").style.animationName="openingGiftBox";
    document.getElementById("gift-three").style.animationDuration="2s";
    document.getElementById("gift-three").style.animationTimingFunction="ease";
    document.getElementById("gift-three").style.top="-35px";

    if(gift_clicked == 0){
        setTimeout(()=>{
            document.getElementById("two-chances-left").style.display="grid";
           }, 1500)
        }else{
            setTimeout(()=>{
                document.getElementById("win-iphone").style.display="grid";
            }, 2200)
        }
 }
 function openGiftFour(){
    document.getElementById("gift-four").style.animationName="openingGiftBox";
    document.getElementById("gift-four").style.animationDuration="2s";
    document.getElementById("gift-four").style.animationTimingFunction="ease";
    document.getElementById("gift-four").style.top="-35px";

    if(gift_clicked == 0){
        setTimeout(()=>{
            document.getElementById("two-chances-left").style.display="grid";
           }, 1500)
        }else{
            setTimeout(()=>{
                document.getElementById("win-iphone").style.display="grid";
            }, 2200)
        }
 }
 function openGiftFive(){
    document.getElementById("gift-five").style.animationName="openingGiftBox";
   document.getElementById("gift-five").style.animationDuration="2s";
   document.getElementById("gift-five").style.animationTimingFunction="ease";
   document.getElementById("gift-five").style.top="-35px";

   if(gift_clicked == 0){
    setTimeout(()=>{
        document.getElementById("two-chances-left").style.display="grid";
       }, 1500)
    }else{
        setTimeout(()=>{
            document.getElementById("win-iphone").style.display="grid";
        }, 2200)
    }
 }
 function openGiftSix(){
    document.getElementById("gift-six").style.animationName="openingGiftBox";
   document.getElementById("gift-six").style.animationDuration="2s";
   document.getElementById("gift-six").style.animationTimingFunction="ease";
   document.getElementById("gift-six").style.top="-35px";

   if(gift_clicked == 0){
    setTimeout(()=>{
        document.getElementById("two-chances-left").style.display="grid";
       }, 1500)
    }else{
        setTimeout(()=>{
            document.getElementById("win-iphone").style.display="grid";
        }, 2200)
    }
 }
 function openGiftSeven(){
    document.getElementById("gift-seven").style.animationName="openingGiftBox";
   document.getElementById("gift-seven").style.animationDuration="2s";
   document.getElementById("gift-seven").style.animationTimingFunction="ease";
   document.getElementById("gift-seven").style.top="-35px";

   if(gift_clicked == 0){
    setTimeout(()=>{
        document.getElementById("two-chances-left").style.display="grid";
       }, 1500)
    }else{
        setTimeout(()=>{
            document.getElementById("win-iphone").style.display="grid";
        }, 2200)
    }
 }
 function openGiftEight(){
    document.getElementById("gift-eight").style.animationName="openingGiftBox";
    document.getElementById("gift-eight").style.animationDuration="2s";
    document.getElementById("gift-eight").style.animationTimingFunction="ease";
    document.getElementById("gift-eight").style.top="-35px";

    if(gift_clicked == 0){
        setTimeout(()=>{
            document.getElementById("two-chances-left").style.display="grid";
           }, 1500)
        }else{
            setTimeout(()=>{
                document.getElementById("win-iphone").style.display="grid";
            }, 2200)
        }
 }
 function openGiftNine(){
    document.getElementById("gift-nine").style.animationName="openingGiftBox";
   document.getElementById("gift-nine").style.animationDuration="2s";
   document.getElementById("gift-nine").style.animationTimingFunction="ease";
   document.getElementById("gift-nine").style.top="-35px";

   if(gift_clicked == 0){
    setTimeout(()=>{
        document.getElementById("two-chances-left").style.display="grid";
       }, 1500)
    }else{
        setTimeout(()=>{
            document.getElementById("win-iphone").style.display="grid";
        }, 2200)
    }
 }
 function openGiftTen(){
    document.getElementById("gift-ten").style.animationName="openingGiftBox";
   document.getElementById("gift-ten").style.animationDuration="2s";
   document.getElementById("gift-ten").style.animationTimingFunction="ease";
   document.getElementById("gift-ten").style.top="-35px";

   if(gift_clicked == 0){
    setTimeout(()=>{
        document.getElementById("two-chances-left").style.display="grid";
       }, 1500)
    }else{
        setTimeout(()=>{
            document.getElementById("win-iphone").style.display="grid";
        }, 2200)
    }
 }
 function openGiftEleven(){
    document.getElementById("gift-eleven").style.animationName="openingGiftBox";
   document.getElementById("gift-eleven").style.animationDuration="2s";
   document.getElementById("gift-eleven").style.animationTimingFunction="ease";
   document.getElementById("gift-eleven").style.top="-35px";

   if(gift_clicked == 0){
    setTimeout(()=>{
        document.getElementById("two-chances-left").style.display="grid";
       }, 1500)
    }else{
        setTimeout(()=>{
            document.getElementById("win-iphone").style.display="grid";
        }, 2200)
    }
 }
 function openGiftTwelve(){
    document.getElementById("gift-twelve").style.animationName="openingGiftBox";
   document.getElementById("gift-twelve").style.animationDuration="2s";
   document.getElementById("gift-twelve").style.animationTimingFunction="ease";
   document.getElementById("gift-twelve").style.top="-35px";

   if(gift_clicked == 0){
    setTimeout(()=>{
        document.getElementById("two-chances-left").style.display="grid";
       }, 1500)
    }else{
        setTimeout(()=>{
            document.getElementById("win-iphone").style.display="grid";
        }, 2200)
    }
 }

/* Alert buttons functions */
function toSecondChance(){
    gift_clicked=1;
    document.getElementById("two-chances-left").style.display="none";
}
function winIphoneClick(){
    document.getElementById("win-iphone").style.display="none";
    document.getElementById("gift-section-div").style.display="none";
    document.getElementById("congragulation-section").style.display="grid";
}

// UUID Creating
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

// Share on whatspapp button function
let url=window.location.href
document.getElementById("share-on-whatsapp").innerHTML=`<a href="whatsapp://send?text=${url}" id="share-on-whatsapp"  data-action="share/whatsapp/share" >Whatsapp</a>`


createButtons();

 

