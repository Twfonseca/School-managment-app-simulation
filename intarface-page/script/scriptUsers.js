var profileType= document.querySelector("#profileSelect")
var loginUser= document.querySelector("#login")
var passUser= document.querySelector("#password")
var  btnLogin= document.querySelector("#loginBtn")
var btnRegister= document.querySelector("#registerBtn")
var formAction= document.querySelector("#formLogin")
var login= document.querySelector("#loginBtn")


function loginCheck(){
  let logUser= loginUser.value;
  let pass= passUser.value;
  let hierarchy= profileType.value;


  if(hierarchy=== deanInfo.hierarchy  &&logUser=== deanInfo.loginEmail && pass=== deanInfo.pass){
     console.log("bateu o login e a senha")
   } else if (hierarchy === "professor"){
       professorsCheck(hierarchy,logUser,pass)
       if(logUser=== loginUser.value && pass=== passUser.value && hierarchy=== profileType.value){
        console.log("bateu o login e a senha")
       }
   }

  }

  function professorsCheck(hierarc,log, pass ){
      professors.forEach(professor => {
          if( hierarc=== professor.hierarchy && log=== professor.loginEmail && pass=== professor.pass  ){
             return hierarc,log, pass
          }
      });
  }



/* Create a function to check each professor  and their informations in the array professor*/


/*else if(hierarchy=== professorsData.hierarchy  && logUser=== professorsData.loginEmail && pass=== professorsData.pass){
    console.log("bateu o login e a senha")
 }else if(hierarchy=== studentsData.hierarchy  && logUser=== studentsData.stundentCode && pass=== studentsData.pass){
    console.log("bateu o login e a senha")
 } */