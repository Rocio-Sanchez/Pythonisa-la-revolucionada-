document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name");
    let last_name = document.getElementById("last_name");
    let phone = document.getElementById("phone");
    let email = document.getElementById("email");
    let subject = document.getElementById("subject");
    let message = document.getElementById("message");
    let newsletter = document.getElementById("newsletter");

    if (name.value == "") {
        name.classList.add("error");
        alert("Por favor, ingresa tu nombre");
      }

    if (last_name.value == "") {
        last_name.classList.add("error");
        alert("Por favor, ingresa tu apellido");
      }

    if (phone.value == "") {
        phone.classList.add("error");
        alert("Por favor, ingresa tu telefono");
      }

    if (email.value == "") {
        email.classList.add("error");
        alert("Por favor, ingresa tu correo");
      }

    if (subject.value == "") {
        subject.classList.add("error");
        alert("Por favor, ingresa el asunto");
      }
        
    if (message.value == "") {
      message.classList.add("error");
      alert("Por favor, ingresa tu consulta");
    } 
    
    if(document.querySelector('input[name=source]:checked') == null) {
      alert("Por favor, selecciona una opción valida");
    }

    if (!newsletter.checked) {
      alert("Por favor, acepta la newsletter");
    }

    alert("Gracias por contactarnos");

    this.reset();
    
  });