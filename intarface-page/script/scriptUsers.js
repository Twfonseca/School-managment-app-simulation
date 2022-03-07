var profileType= document.querySelector("#profileSelect")
var loginUser= document.querySelector("#login")
var passUser= document.querySelector("#password")
var  btnLogin= document.querySelector("#loginBtn")
var btnRegister= document.querySelector("#registerBtn")
var formAction= document.querySelector("#formLogin")
var login= document.querySelector("#loginBtn")





function loginCheck(){
 let logUser= loginUser.value;
 let pass =passUser.value;
 let hierarchy= profileType.value;

 if(hierarchy=== deanInfo.hierarchy  &&logUser=== deanInfo.loginEmail && pass=== deanInfo.pass){

     console.log("bateu o login e a senha")
 }else if(hierarchy=== deanInfo.hierarchy  &&logUser=== deanInfo.loginEmail && pass=== deanInfo.pass){
     
 }

}



