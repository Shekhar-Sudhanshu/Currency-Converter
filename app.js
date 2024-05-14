let selectBox = document.querySelectorAll(".select_container select");

let fromCountry = document.querySelector(".from select");
let toCountry = document.querySelector(".to select");

for(let select of selectBox){
    for(let countriesCurr in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = countriesCurr;
        newOption.value = countriesCurr;

        if(select.name === "from" && countriesCurr === "USD"){
            newOption.selected = "selected";
        }
        else if(select.name === "to" && countriesCurr === "INR"){
            newOption.selected = "selected";
        }

        select.append(newOption);

        select.addEventListener("change", (evt) => {
            Flags(evt.target);
        })
    }
}


const Flags = (element) => {
    let code = element.value;
    let country = countryList[code];
    let newSrc = `https://flagsapi.com/${country}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}


const conversion = async () => {
    let amount = document.querySelector(".amount input");
    let message = document.querySelector(".message");
    let api = `https://api.frankfurter.app/latest?amount=${amount.value}&from=${fromCountry.value}&to=${toCountry.value}`;
    let response = await fetch(api);
    response = await response.json();
    let result = response.rates;
    console.log(response);
    console.log(result);
    console.log(result[toCountry.value]);
    message.innerText = `${amount.value} ${fromCountry.value} = ${result[toCountry.value]} ${toCountry.value}`;
};


let submitBTN = document.querySelector("form button");
submitBTN.addEventListener("click", async (evt)=>{
    evt.preventDefault();
    conversion();
})


window.addEventListener("load", ()=> {
    conversion();
});


let arrowBTN = document.querySelector(".dropdown i");
i.addEventListener("click", () => {
    let from = document.querySelector(".from select");
    let to = document.querySelector(".to select");   
})