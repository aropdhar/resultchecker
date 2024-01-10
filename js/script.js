let input = document.querySelector(".inputbox");
let btn = document.querySelector(".btn");
let result = document.querySelector(".result");
let img = document.createElement("img");
let imgstore = document.querySelector(".imgstore")


btn.addEventListener("click" , function(){
 
    if ( input.value < 40 ) {

         result.innerHTML = "Your Result is Fail: " + input.value;
         img.src = "images.jpg";
         imgstore.appendChild(img);
    }

    else if( input.value < 55 ) {

        result.innerHTML = "Your Result is C: " + input.value;
       
    }
    
    else if( input.value < 65 ) {

        result.innerHTML = "Your Result is B: " + input.value;
    }
    
    else if( input.value < 75 ) {

        result.innerHTML = "Your Result is A-: " + input.value;
    }

    else if( input.value < 85 ) {

        result.innerHTML = "Your Result is A: " + input.value;
    }

    else if( input.value < 95 ) {

        result.innerHTML = "Your Result is A+: " + input.value;
        img.src = "a+.jpg";
        imgstore.appendChild(img);
    }

    else if( input.value < 100 ) {

        result.innerHTML = "Your Result is Golden A+: " + input.value;
    }

    else{

        result.innerHTML = "Your condition is not Right: " + input.value;
    }

});


