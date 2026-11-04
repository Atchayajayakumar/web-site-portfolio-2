let students = [];
let editIndex = -1;

// Get form
let form = document.getElementById("studentForm");

// Register Student
form.addEventListener("submit", function(event) {

    event.preventDefault();

    let student = {
        name: document.getElementById("name").value,
        regno: document.getElementById("regno").value,
        email: document.getElementById("email").value,
        department: document.getElementById("department").value
    };

    if (editIndex === -1) {

        students.push(student);

    } else {

        students[editIndex] = student;
        editIndex = -1;

    }

    form.reset();

    displayStudents();

});

// Display Students
function displayStudents() {

    let list = document.getElementById("studentList");

    list.innerHTML = "";

    students.forEach(function(student, index) {

        list.innerHTML += `
        <tr>
            <td>${student.name}</td>
            <td>${student.regno}</td>
            <td>${student.email}</td>
            <td>${student.department}</td>
            <td>
                <button onclick="editStudent(${index})">Edit</button>
                <button onclick="deleteStudent(${index})">Delete</button>
            </td>
        </tr>
        `;

    });

    document.getElementById("count").innerText = students.length;

}

// Edit Student
function editStudent(index) {

    let student = students[index];

    document.getElementById("name").value = student.name;

    document.getElementById("regno").value = student.regno;

    document.getElementById("email").value = student.email;

    document.getElementById("department").value = student.department;

    editIndex = index;

}

// Delete Student
function deleteStudent(index) {

    if (confirm("Do you want to delete this student?")) {

        students.splice(index, 1);

        displayStudents();

    }

}

// Search Student
document.getElementById("search").addEventListener("input", function() {

    let value = this.value.toLowerCase();

    document.querySelectorAll("#studentList tr").forEach(function(row) {

        row.style.display = row.innerText.toLowerCase().includes(value)
            ? ""
            : "none";

    });

});