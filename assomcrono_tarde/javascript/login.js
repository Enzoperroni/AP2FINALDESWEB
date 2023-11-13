var storedPassword = sessionStorage.getItem("senha");

    
    if (storedPassword === "SENHA") {
      window.location.href = "elenco.html";
    }

    function checkPassword() {
      var enteredPassword = document.getElementById("senha").value;

      if (enteredPassword === "SENHA") {
        sessionStorage.setItem("senha", enteredPassword);
        window.location.href = "elenco.html"; 
      } else {
        alert("Senha incorreta. Por favor, insira a senha correta.");
      }
    }