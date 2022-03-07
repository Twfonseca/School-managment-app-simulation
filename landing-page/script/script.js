let formAction= document.querySelector("#formTargetJs")
let btnAction= document.querySelector("#sendBtn")
let nameClient= document.querySelector("#nameUser")
let emailClient= document.querySelector("#emailUser")
let phoneClient= document.querySelector("#phoneUser")
let popUp= document.querySelector("#windowJsTarget")
let container= document.querySelector("#containerTarget")


formAction.addEventListener("submit",e =>{ e.preventDefault()})

function moreInfo(){
    if(nameClient.value !=="" && emailClient.value!=="" && phoneClient.value!==""){
    popUp.style ="display: initial;"
    container.style ="display:none;"
    console.log(nameClient.value)
    } 
}
