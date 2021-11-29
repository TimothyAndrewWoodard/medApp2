//const button = document.getElementById('new prescription');

function newPatient() {
  const addPatient = document.getElementById('newPtDemographics');
  addPatient.style.display = 'block';
}

function createPatient() {
  let patients = localStorage.getItem('patients');
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  if (patients !== null) {
    patients = JSON.parse(patients);
  } else {
    patients = [];
  }
  patients.push({ name, age });
  localStorage.setItem('patients', JSON.stringify(patients));
}
function addPrescription() {
  const addPrescription = document.getElementById('addPrescription');
  addPrescription.style.display = 'block';
}

function createPrescription() {
  const div = document.getElementById('prescriptions');

  const newPrescription = document.createElement('div');
  newPrescription.classList.add('prescription');
  newPrescription.innerHTML =
    'Drug: ' +
    document.getElementById('prescriptionForm').Drug.value +
    ' Dosage: ' +
    document.getElementById('prescriptionForm').Dosage.value +
    ' ' +
    document.getElementById('prescriptionForm').measurement.value;
  div.appendChild(newPrescription);
}
function createNote() {
  let noteForm = document.getElementById('noteForm');
  let formData = new FormData(noteForm);
  var object = {};
  formData.forEach(function (value, key) {
    object[key] = value;
  });
  var note = JSON.stringify(object);
}
function noteModal() {
  const noteModal = document.getElementById('noteModal');
  noteModal.style.display = 'block';
}
function addProblem() {
  const addProblem = document.getElementById('addProblem');
  addProblem.style.display = 'block';
}
function closeProblem() {
  const addProblem = document.getElementById('addProblem');
  addProblem.style.display = 'none';
}
function closeNote() {
  const noteModal = document.getElementById('noteModal');
  noteModal.style.display = 'none';
}

function closePrescription() {
  const addPrescription = document.getElementById('addPrescription');
  addPrescription.style.display = 'none';
}
function closeDemo() {
  const addPatient = document.getElementById('newPtDemographics');
  addPatient.style.display = 'none';
}

button.addEventListener('click', () => {});

/*function AddPre() {
  var pre = document.createElement('pre');
  pre.innerHTML =
    '<pre>\n\
Drug:               Dosage:           Instructions: \r\n\
</pre>';
  var container1 = document.getElementById('container1');
  container1.appendChild('pre');
}
*/
