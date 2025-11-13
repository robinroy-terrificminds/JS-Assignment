const studentForm = document.getElementById('studentForm');
const studentDiv = document.getElementById('students');

let students = [];

studentForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const score = Number(document.getElementById('score').value);

    if (name === "" || score === "") return;

    const status = score >= 60 ? "Pass" : "Fail";

    const student = { name, score, status };
    students.push(student);

    displayStudents();

    document.getElementById('name').value = "";
    document.getElementById('score').value = "";
});


function displayStudents() {
    studentDiv.innerHTML = "";

    students.forEach(s => {

        const div = document.createElement('div');
        div.classList.add('student-item');

        let statusClass = s.score >= 60 ? "pass" : "fail";

        div.innerHTML = `
          <span><strong>${s.name}</strong></span>
          <span>${s.score}</span>
          <span class="${statusClass}">${s.status}</span>
        `;

        studentDiv.appendChild(div);

    });
}
