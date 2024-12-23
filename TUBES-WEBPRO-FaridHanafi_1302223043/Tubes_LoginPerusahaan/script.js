
function buttonClicked() {
    var email=document.getElementById("email");
    var warningSign=document.getElementById("warning-sign");
    var emailValue = email.value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var messageContainer = document.getElementById("message-container");
    var messageContainerPW = document.getElementById("message-container-PW");
    messageContainer.innerHTML = '';
    messageContainerPW.innerHTML ='';
    var input = document.getElementById("password");
    var inputValue=input.value;
    if(!emailPattern.test(emailValue)||inputValue.length===0){
      if (!emailPattern.test(emailValue)){
        email.style.border='1px solid #FF0000';
        var failMessage = document.createElement("p");
        failMessage.textContent = "Masukkan Email yang Valid"; 
        failMessage.style.color = "#FF0000";
        failMessage.style.fontSize ="10px"
        messageContainer.appendChild(failMessage);
        warningSign.src="./images/warning.png";
      } 
      if(inputValue.length===0){
        input.style.border='1px solid #FF0000';
        var failMessagePW = document.createElement("p");
        failMessagePW.textContent = "Password tidak boleh kosong"; 
        failMessagePW.style.color = "#FF0000";
        failMessagePW.style.fontSize ="10px"
        messageContainerPW.appendChild(failMessagePW);
      }
    }
    else{
  
    }
  };
  function emailClicked(){
    var warningSign=document.getElementById("warning-sign");
    var messageContainer = document.getElementById("message-container");
    email.style.border='1px solid #ccc';
    messageContainer.innerHTML='';
    warningSign.src="";
  }
  function showPassword() {
      var passwordInput = document.getElementById("password");
      var eyeIcon = document.getElementById("eyeIcon"); // Ambil elemen ikon secara langsung
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.src = "./images/PW_hide.png";
      } else {
        passwordInput.type = "password";
        eyeIcon.src = "./images/PW_show.png";
      }
    }
  function PasswordClicked(){
    var messageContainerPW = document.getElementById("message-container-PW");
    password.style.border='1px solid #ccc';
    messageContainerPW.innerHTML='';
  }
  window.onload = function() {
      const button = document.getElementById("login");
      button.addEventListener("click", buttonClicked);
  
      const emailInput = document.getElementById("email");
      emailInput.addEventListener("focus", emailClicked);
  
      const PasswordInput = document.getElementById("password");
      PasswordInput.addEventListener("focus", PasswordClicked);
  
      const clickEye = document.getElementById("eyeIcon");
      clickEye.addEventListener("click",showPassword);
  };
  