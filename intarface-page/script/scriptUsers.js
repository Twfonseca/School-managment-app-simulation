var profileType= document.querySelector("#profileSelect");
var loginUser= document.querySelector("#login");
var passUser= document.querySelector("#password");
var  btnLogin= document.querySelector("#loginBtn");
var btnRegister= document.querySelector("#registerBtn");
var formAction= document.querySelector("#formLogin");
var login= document.querySelector("#loginBtn");
var deanConfirm= false;
var professorConfirm= false;
var studentConfirm= false;

function loginCheck(){
  let logUser= loginUser.value;
  let pass= passUser.value;
  let hierarchy= profileType.value;

  if(hierarchy=== deanInfo.hierarchy  &&logUser=== deanInfo.loginEmail && pass=== deanInfo.pass){
    deanConfirm= true;
    clearWindow(deanConfirm)
    createWindow()
    createUserWindow()
    createWorkArea()
    deanUserWindow()
   } else if (hierarchy === "professor"){
       professorsCheck(hierarchy,logUser,pass)
       if(logUser=== loginUser.value && pass=== passUser.value && hierarchy=== profileType.value){
        professorConfirm= true
        clearWindow(professorConfirm)
       }
   } else if (hierarchy==="student"){
       studentCheck(hierarchy,logUser,pass)
       if(logUser=== loginUser.value && pass=== passUser.value && hierarchy=== profileType.value){
       studentConfirm= true
       clearWindow(studentConfirm)
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

  function studentCheck(hierarc, log, pass){
    students.forEach(studant => {
          if(hierarc===studant.hierarchy && log===studant.stundentCode && pass===studant.pass){
              return hierarc, log, pass
          }
      });
  }

