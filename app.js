function submitForm() {
  const form = document.getElementById("patientForm");
  const fullName = form.fullName.value;
  const password = form.password.value;
  const Date = form.Date.value;
  const gender = form.gender.value;
  const phone = form.phone.value;
  const chronicDiseases = Array.from(form.chronicDiseases.selectedOptions).map(
    (option) => option.text
  );

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
