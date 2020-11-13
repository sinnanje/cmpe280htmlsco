function hasLogin(){
    return localStorage.getItem("isLoggedIn")||false;
}

function forceUserToLoginIfUnAuthenticated(){
    if(hasLogin())
        return;
    alert("Hi, Please login and proceed with the test. Thanks");
    window.location="login.html";
}

function fillSummary(){
    alert("fill");
    var span = document.getElementById("quantCorrect"); 
    span.innerHTML = localStorage.getItem("quantCorrect");
}

function submitAnswer(formName,radioName1,radioName2){
    var ans = getRadioVal( document.getElementById(formName), radioName1 );
    if(radioName2 != null) var ans2 = getRadioVal( document.getElementById(formName), radioName2 );
    if(formName === 'q1') {
        localStorage.setItem("answer1",ans);
        window.location="cosine.html";
    }
    else if(formName === 'q2') {
        localStorage.setItem("answer2",ans);
        window.location="english.html";
    }
   
    else if(formName === 'q3') {
        localStorage.setItem("answer31",ans);
        localStorage.setItem("answer32",ans2);
        window.location="video.html";
    }
    
    else if(formName === 'q4') {
        localStorage.setItem("answer4",ans);
        window.location="survey.html";
    }
}

function calculateScore(){
    var quantCorrect = 0;
    var quantAnswered = 0;
    var readCorrect = 0;
    var readAnswered = 0;
    var videoCorrect = 0;
    var videoAnswered = 0;

    //alert(localStorage.getItem("answer1"));

    if (localStorage.getItem("answer1") !== null && localStorage.getItem("answer1") !== 'undefined') {
         quantAnswered++;   
    } 
    if(localStorage.getItem("answer1") == 1) {
          quantCorrect++;
        
    }
    if (localStorage.getItem("answer2") !== null
     && localStorage.getItem("answer2") !== 'undefined') {
         quantAnswered++;
        
        
    } 
    if(localStorage.getItem("answer2") == 1) {
         quantCorrect++;
       
        
    } 
    
    if((localStorage.getItem("answer31") !== null  && localStorage.getItem("answer32") !== null) 
    && (localStorage.getItem("answer31") !== 'undefined'  && localStorage.getItem("answer32") !== 'undefined')) {
        readAnswered++;
        
        
    } 
    if(localStorage.getItem("answer31") == 1  && localStorage.getItem("answer32") == 1) {
        readCorrect++;
        
        
    } 
    if (localStorage.getItem("answer4") !== null && localStorage.getItem("answer4") !== 'undefined') {
        videoAnswered++;
       
    } 
    if(localStorage.getItem("answer4") == 1) {
        videoCorrect++;
        
        
    }

    localStorage.setItem("quantAnswered" , quantAnswered);
    localStorage.setItem("quantCorrect" , quantCorrect);
    localStorage.setItem("readAnswered" , readAnswered);
    localStorage.setItem("readCorrect" , readCorrect);
    localStorage.setItem("videoAnswered" , videoAnswered);
    localStorage.setItem("videoCorrect" , videoCorrect);  
    var score = quantCorrect * 50;

    if(isNaN(score)) score = 0;

    localStorage.setItem("quantScore",score);

    score = readCorrect * 50;

    if(isNaN(score)) score = 0;

    localStorage.setItem("readScore",score);

    score = videoCorrect * 50;

    
    
    
    
    if(isNaN(score)) score = 0;

    localStorage.setItem("videoScore",score);

    window.location="summary.html";
}


function logout(){
    localStorage.clear();
    window.location = "login.html";
}

function getRadioVal(form, name) {
    var val;
    // get list of radio buttons with specified name
    var radios = form.elements[name];
    
    // loop through list of radio buttons
    for (var i=0, len=radios.length; i<len; i++) {
        if ( radios[i].checked ) { // radio checked?
            val = radios[i].value; // if so, hold its value in val
            break; // and break out of for loop
        }
    }
    return val; // return value of checked radio or undefined if none checked
}

function clearSelection(form, name) {
    // get list of radio buttons with specified name
    var radios = document.getElementsByName(name);
    
    // loop through list of radio buttons
    for(var i=0;i<radios.length;i++)
        radios[i].checked = false;
    
}

function clearSelection(form, name1, name2) {
    // get list of radio buttons with specified name
    var radios = document.getElementsByName(name1);
    

    // loop through list of radio buttons
    for(var i=0;i<radios.length;i++)
        radios[i].checked = false;

    var radios1 = document.getElementsByName(name2);
    
    
    // loop through list of radio buttons
    for(var i=0;i<radios1.length;i++)
        radios1[i].checked = false;
    
    
}
