 let bodyBkg = document.querySelector("body");
 let formView = document.querySelector(".windowLogin");
 let windowContainer= document.createElement("div");
 let profileColunm= document.createElement("div");
 let userInfos= document.createElement("div");
 let workArea= document.createElement("div");
 let userPhotoContainer= document.createElement("div")
 let userPhoto= document.createElement("img")
 let userHierarchy= document.createElement("p")
 let userHierarchyTxt= document.createElement("span")


 function clearWindow(confirm){
   if(confirm===true){
     bodyBkg.style ="background-image: url()"
     formView.style= "display: none"
   }
 }

function createWindow(){
 windowContainer.id="windowContainer"
 windowContainer.style= "height:100vh; width:100vw; display:grid; grid-template: 1fr / 1fr 2fr ; border: 1px solid black;"
 bodyBkg.appendChild(windowContainer)
 userInfos.style="height:100%; width:100%; border: 1px solid black; display:flex; flex-direction:column;"
 userInfos.id="userInfos"
 windowContainer.appendChild(userInfos)
 workArea.style="height:100%; width:100%; border: 1px solid black;"
 workArea.id="workArea"
 windowContainer.appendChild(workArea)
}

function createUserWindow(){
  userInfos.style="height:100%; width:100%; border: 1px solid black; display:flex; flex-direction:column;"
  userInfos.id="userInfos"
  windowContainer.appendChild(userInfos)

}

function createWorkArea(){
  workArea.style="height:100%; width:100%; border: 1px solid black; display:flex; flex-direction:column; align-items: center;"
  workArea.id="workArea"
  windowContainer.appendChild(workArea)
}


/* NA AERA DE USER WINDOW  CRIAR AREA DE TEXTOS COMO TAG <P> AREA DE IMAGEM  E AMBAS RECEBERÃO OS DADOS CRIADOS EM OUTRO SCRIPT */






/*function deanUserWindow(){
  deanPhotoContainer.style="width:100%; display:flex; flex-direction:column; align-items: center; margin-top:10%;"
  deanPhotoContainer.id="deanPhoto"
  userInfos.appendChild(deanPhotoContainer)
  deanPhoto.style="width:80%; height:100%; border-radius:60%;"
  deanPhoto.src="../style/images/deanPhoto.jpg"
  deanPhotoContainer.appendChild(deanPhoto)
}*/
