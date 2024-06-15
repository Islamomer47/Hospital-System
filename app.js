function submitForm() {
  const form = document.getElementById("patientForm");
  const fullName = form.fullName.value;
  var perfectname = /\s/g;
  if (perfectname.test(fullName)) {
    document.getElementById("nameError").innerHTML =
      "the name must be without spaces";
    return fullName == "";
  }
  const password = document.getElementById("password").value;
  let passwordErrors = [];

  // if (!/[A-Z]/.test(password) || password.length < 9) {
  //   passwordErrors.push(
  //     "The password must be uppercase and at least 9 characters long."
  //   );
  // }
  // if (!/[0-9]/.test(password)) {
  //   passwordErrors.push("The password must contain at least one digit.");
  // }
  // if (
  //   !/[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/.test(password)
  // ) {
  //   passwordErrors.push("The password must contain a special character.");
  // }

  // if (passwordErrors.length > 0) {
  //   document.getElementById("passwordError").innerHTML =
  //     passwordErrors.join("<br>");
  //   password.join("");
  // }
  const email = document.getElementById("email").value;
  if (
    !/[A-Za-z0-9\S\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]{1,}@[a-z]+\.[a-z]{3,}/g.test(
      email
    )
  ) {
    document.getElementById("emailError").innerHTML =
      "Please enter a valid email address.";
    return email == " ";
  }

  const Date = form.Date.value;
  if (!/\d{4}-\d{2}-\d{2}/.test(Date)) {
    document.getElementById("DateError").innerHTML =
      "Birthday must be in YYYY-MM-DD format.";
  }
  const Phone = form.phone.value;
  const phone = document.getElementById("phone").value;
  if (!/^07[789]\d{7}$/.test(phone)) {
    document.getElementById("phoneError").textContent =
      "Phone number must be 10 digits starting with 07 and follows (7 or 8 or 9).";
    return phone == "";
  }
  const gender = form.gender.value;

  const chronicDiseases = [];
  const selectedOptions = form.chronicDiseases.selectedOptions;

  for (let i = 0; i < selectedOptions.length; i++) {
    chronicDiseases.push(selectedOptions[i].text);
  }

  const patientInfo = {
    fullName,
    password,
    Date,
    gender,
    phone,
    chronicDiseases,
  };

  let patients = JSON.parse(localStorage.getItem("patients")) || [];
  patients.push(patientInfo);
  localStorage.setItem("patients", JSON.stringify(patients));

  displayPatientCard(patientInfo, patients.length - 1);
}

function displayPatientCard(patientInfo, index) {
  const cardContainer = document.getElementById("cardContainer");
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
            <img src="businessman.png" alt="Patient Image">
            <h3>${patientInfo.fullName}</h3>
            <p>Date of Birth: ${patientInfo.Date}</p>
            <p>Gender: ${patientInfo.gender}</p>
            <p>Phone Number: ${patientInfo.phone}</p>
            <p>Chronic Diseases: ${patientInfo.chronicDiseases}</p>
            <button onclick="deletePatient(${index})">Delete</button>
        `;

  cardContainer.appendChild(card);
}

function deletePatient(index) {
  let patients = JSON.parse(localStorage.getItem("patients")) || [];
  patients.splice(index, 1);
  localStorage.setItem("patients", JSON.stringify(patients));
  renderPatients();
}

function clearAllPatients() {
  localStorage.removeItem("patients");
  renderPatients();
}

function renderPatients() {
  const cardContainer = document.getElementById("cardContainer");
  cardContainer.innerHTML = "";
  const patients = JSON.parse(localStorage.getItem("patients")) || [];
  patients.forEach((patient, index) => {
    displayPatientCard(patient, index);
  });
}

window.onload = function () {
  renderPatients();
};

function regexvalidate() {
  var fullName = form.fullName.value;
  var perfectname = /\s/;
  if (perfectname.test(fullName)) {
    document.getElementById("nameError").innerHTML =
      "the name must be without spaces";
    isValid = false;
  }

  var password = form.password.value;
  var Date = form.Date.value;
  var gender = form.gender.value;
  var phone = form.phone.value;
}
