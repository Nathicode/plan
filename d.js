const cl = () => {
    let amount = document.querySelector("#num").value;
    
    for (i = 0; i < amount; i++) {
        document.querySelector("div").innerHTML += "<input type='number' id='nums'>";
    }
    
}

function dc() {
let am = document.querySelector("#num2").value;
    for (i = 0; i < am; i++) {
        document.querySelector("#nums").remove();
        
    }
    }
