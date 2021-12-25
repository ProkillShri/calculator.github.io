let numerals = document.getElementById('numerals');
buttons = document.querySelectorAll("button");
let numeralValue = "";

for(item of buttons){
    item.addEventListener('click',(e) => {
        buttonText = e.target.innerText
        console.log("Text on button is " , buttonText)

        if(buttonText == "×"){
            buttonText = '*'
            numeralValue += buttonText
            numerals.value = numeralValue;
        }
        else if(buttonText == "C"){
            numeralValue = "";
            numerals.value = numeralValue
        }
        else if(buttonText == "="){
            numerals.value = eval(numeralValue)
        }
        else if(buttonText == "÷"){
            buttonText = "/"
            numeralValue += buttonText
            numerals.value = numeralValue;
        }
        else{
            numeralValue += buttonText;
            numerals.value = numeralValue;
        }
    });
}