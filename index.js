const btnRegister = document.querySelector(".btn__register");

btnRegister.addEventListener("click", mainFunction);

function mainFunction(event) {
  event.preventDefault();
  if (Validation()) {
    showModalRegister();
    createTable();
    genderSelect();
    newsletterSelect();
    clearField();
    deleteUser();
  }
  event.preventDefault();
}

function Validation() {
  const name = document.querySelector("#name").value;
  const nickname = document.querySelector("#nickname").value;
  const email = document.querySelector("#email").value;
  const country = document.querySelector("#country").value;
  const terms = document.querySelector("#terms");
  const password = document.querySelector("#password").value;
  const showModalError = document.querySelector(".dialog__error");
  const dialogCloseError = document.querySelector(".btn__modalCloseError");

  if (!name) {
    showModalError.showModal();
    dialogCloseError.onclick = () => {
      showModalError.close();
    };
    const warming = document.querySelector("#name");
    const warmingSpan = document.querySelector("#nameSpan");

    warming.style.borderRight = "1px solid red";
    warming.style.borderTop = "1px solid red";
    warming.style.borderBottom = "1px solid red";

    warmingSpan.style.borderLeft = "1px solid red";
    warmingSpan.style.borderTop = "1px solid red";
    warmingSpan.style.borderBottom = "1px solid red";

    warming.addEventListener("input", () => {
      warming.style.borderRight = "1px solid rgb(141, 141, 141)";
      warming.style.borderTop = "1px solid rgb(141, 141, 141)";
      warming.style.borderBottom = "1px solid rgb(141, 141, 141)";

      warmingSpan.style.borderLeft = "1px solid rgb(141, 141, 141)";
      warmingSpan.style.borderTop = "1px solid rgb(141, 141, 141)";
      warmingSpan.style.borderBottom = "1px solid rgb(141, 141, 141)";
    });
    return false;
  }
  if (!nickname) {
    showModalError.showModal();
    dialogCloseError.onclick = () => {
      showModalError.close();
    };
    const warming = document.querySelector("#nickname");
    const warmingSpan = document.querySelector("#nicknameSpan");

    warming.style.borderRight = "1px solid red";
    warming.style.borderTop = "1px solid red";
    warming.style.borderBottom = "1px solid red";

    warmingSpan.style.borderLeft = "1px solid red";
    warmingSpan.style.borderTop = "1px solid red";
    warmingSpan.style.borderBottom = "1px solid red";

    warming.addEventListener("input", () => {
      warming.style.borderRight = "1px solid rgb(141, 141, 141)";
      warming.style.borderTop = "1px solid rgb(141, 141, 141)";
      warming.style.borderBottom = "1px solid rgb(141, 141, 141)";

      warmingSpan.style.borderLeft = "1px solid rgb(141, 141, 141)";
      warmingSpan.style.borderTop = "1px solid rgb(141, 141, 141)";
      warmingSpan.style.borderBottom = "1px solid rgb(141, 141, 141)";
    });
    return false;
  }
  if (!email) {
    showModalError.showModal();
    dialogCloseError.onclick = () => {
      showModalError.close();
    };
    const warming = document.querySelector("#email");
    const warmingSpan = document.querySelector("#emailSpan");

    warming.style.borderRight = "1px solid red";
    warming.style.borderTop = "1px solid red";
    warming.style.borderBottom = "1px solid red";

    warmingSpan.style.borderLeft = "1px solid red";
    warmingSpan.style.borderTop = "1px solid red";
    warmingSpan.style.borderBottom = "1px solid red";

    warming.addEventListener("input", () => {
      warming.style.borderRight = "1px solid rgb(141, 141, 141)";
      warming.style.borderTop = "1px solid rgb(141, 141, 141)";
      warming.style.borderBottom = "1px solid rgb(141, 141, 141)";

      warmingSpan.style.borderLeft = "1px solid rgb(141, 141, 141)";
      warmingSpan.style.borderTop = "1px solid rgb(141, 141, 141)";
      warmingSpan.style.borderBottom = "1px solid rgb(141, 141, 141)";
    });
    return false;
  }
  if (!password) {
    showModalError.showModal();
    dialogCloseError.onclick = () => {
      showModalError.close();
    };
    const warming = document.querySelector("#password");
    const warmingSpan = document.querySelector("#passwordSpan");

    warming.style.borderRight = "1px solid red";
    warming.style.borderTop = "1px solid red";
    warming.style.borderBottom = "1px solid red";

    warmingSpan.style.borderLeft = "1px solid red";
    warmingSpan.style.borderTop = "1px solid red";
    warmingSpan.style.borderBottom = "1px solid red";

    warming.addEventListener("input", () => {
      warming.style.borderRight = "1px solid rgb(141, 141, 141)";
      warming.style.borderTop = "1px solid rgb(141, 141, 141)";
      warming.style.borderBottom = "1px solid rgb(141, 141, 141)";

      warmingSpan.style.borderLeft = "1px solid rgb(141, 141, 141)";
      warmingSpan.style.borderTop = "1px solid rgb(141, 141, 141)";
      warmingSpan.style.borderBottom = "1px solid rgb(141, 141, 141)";
    });
    return false;
  }
  if (!document.querySelector("input[name='gender']:checked")) {
    showModalError.showModal();
    dialogCloseError.onclick = () => {
      showModalError.close();
    };
    const warming = document.querySelectorAll(".input__gender");
    const warmingSpan = document.querySelectorAll(".genderSpan");

    for (let i = 0; i < warming.length; i++) {
      warming[i].style.borderRight = "1px solid red";
      warming[i].style.borderTop = "1px solid red";
      warming[i].style.borderBottom = "1px solid red";
    }

    for (let i = 0; i < warming.length; i++) {
      warmingSpan[i].style.borderLeft = "1px solid red";
      warmingSpan[i].style.borderTop = "1px solid red";
      warmingSpan[i].style.borderBottom = "1px solid red";

    }
    for (let i = 0; i < warming.length; i++) {  
        warming[i].addEventListener("input", () => {
        for (let i = 0; i < warming.length; i++) { 
        warming[i].style.borderRight = "1px solid rgb(141, 141, 141)";
        warming[i].style.borderTop = "1px solid rgb(141, 141, 141)";
        warming[i].style.borderBottom = "1px solid rgb(141, 141, 141)";
  
        warmingSpan[i].style.borderLeft = "1px solid rgb(141, 141, 141)";
        warmingSpan[i].style.borderTop = "1px solid rgb(141, 141, 141)";
        warmingSpan[i].style.borderBottom = "1px solid rgb(141, 141, 141)";
            }
      });
    }
    return false;
  }

  if (!country) {
    showModalError.showModal();
    dialogCloseError.onclick = () => {
      showModalError.close();
    };
    const warming = document.querySelector("#country");

    warming.style.borderRight = "1px solid red";
    warming.style.borderTop = "1px solid red";
    warming.style.borderBottom = "1px solid red";

    warming.addEventListener("input", () => {
      warming.style.borderRight = "1px solid rgb(141, 141, 141)";
      warming.style.borderTop = "1px solid rgb(141, 141, 141)";
      warming.style.borderBottom = "1px solid rgb(141, 141, 141)";

      warmingSpan.style.borderLeft = "1px solid rgb(141, 141, 141)";
      warmingSpan.style.borderTop = "1px solid rgb(141, 141, 141)";
      warmingSpan.style.borderBottom = "1px solid rgb(141, 141, 141)";
    });

    return false;
  }
  if (terms.checked) {
  } else {
    showModalError.showModal();
    dialogCloseError.onclick = () => {
      showModalError.close();
    };
    const warmingTerms = document.querySelector("#terms");
    warmingTerms.style.border = "1px solid red";

    warmingTerms.addEventListener("change", () => {
      warmingTerms.style.border = "1px solid rgb(141, 141, 141)";
    });
    return false;
  }
  return true;
}

function createTable() {
  const button = document.createElement("button");
  button.className = "btn__deletar";
  button.textContent = "Delete";

  const table = document.querySelector("tbody");
  const rowNew = document.createElement("tr");
  rowNew.className = "tr__New";
  table.appendChild(rowNew);

  const nicknameNew = document.createElement("td");
  const nameNew = document.createElement("td");
  const emailNew = document.createElement("td");
  const genderNew = document.createElement("td");
  const countryNew = document.createElement("td");
  const newsletterNew = document.createElement("td");
  const buttonDeleteNew = document.createElement("td");

  rowNew.appendChild(nameNew);
  rowNew.appendChild(nicknameNew);
  rowNew.appendChild(emailNew);
  rowNew.appendChild(genderNew);
  rowNew.appendChild(countryNew);
  rowNew.appendChild(newsletterNew);
  rowNew.appendChild(buttonDeleteNew);
  buttonDeleteNew.appendChild(button);

  const name = document.querySelector("#name").value;
  const nickname = document.querySelector("#nickname").value;
  const email = document.querySelector("#email").value;
  const gender = genderSelect();
  const country = document.querySelector("#country").value;
  const newsletter = newsletterSelect();

  nameNew.textContent = name;
  nicknameNew.textContent = nickname;
  emailNew.textContent = email;
  genderNew.textContent = gender;
  countryNew.textContent = country;
  newsletterNew.textContent = newsletter;
}
function genderSelect() {
  const male = document.querySelector("#male");
  const female = document.querySelector("#female");
  const trans = document.querySelector("#trans");
  const binary = document.querySelector("#binary");

  if (male.checked) {
    return "Male";
  }
  if (female.checked) {
    return "Female";
  }
  if (trans.checked) {
    return "Trans";
  }
  if (binary.checked) {
    return "Not binary";
  }
}
function newsletterSelect() {
  const agreeNewsletter = document.querySelector("#newsletter");

  if (agreeNewsletter.checked) {
    return "Yes";
  } else {
    return "No";
  }
}
function clearField() {
  const form = document.querySelector("form");

  form.reset();
}
function showModalRegister() {
  const dialogRegister = document.querySelector(".dialog__register");
  const dialogClose = document.querySelector(".btn__modalClose");
  dialogRegister.showModal();

  dialogClose.onclick = () => {
    dialogRegister.close();
  };
}

function  deleteUser() {

    const deleteButton = document.querySelectorAll(".btn__deletar");
    

    
    deleteButton.forEach(deleteRow => {
      deleteRow.addEventListener('click', event =>{
        const row = event.target.parentNode.parentNode;
        row.remove();
      });
    });
    
}