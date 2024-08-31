let string="";
let btn = document.querySelectorAll(".button");
Array.from(btn).forEach((button) => {
    button.addEventListener("click",() => {
        if(button.innerHTML == "=") {
            string = eval(string);
            document.querySelector(".input").value = string;
        }

        else if(button.innerHTML == "C") {
            string = ""
            document.querySelector(".input").value = string;
        }
        
        else{
            console.log(button);
            string = string + button.innerHTML;
            document.querySelector(".input").value = string;
        }
    })
})