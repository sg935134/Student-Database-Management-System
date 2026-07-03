let students = JSON.parse(localStorage.getItem("students")) || [];

function displayStudents() {
    let tbody = document.querySelector("#studentTable tbody");
    tbody.innerHTML = "";

    students.forEach((student, index) => {
        tbody.innerHTML += `
            <tr>
                <td>${student.roll}</td>
                <td>${student.name}</td>
                <td>
                    <button onclick="deleteStudent(${index})">Delete</button>
                </td>
            </tr>
        `;
    });
}

function addStudent() {

    let name = document.getElementById("studentName").value.trim();
    let roll = document.getElementById("studentRoll").value.trim();

    if(name=="" || roll==""){
        alert("Please fill all fields!");
        return;
    }

    students.push({
        name:name,
        roll:roll
    });

    localStorage.setItem("students", JSON.stringify(students));

    displayStudents();

    document.getElementById("studentName").value="";
    document.getElementById("studentRoll").value="";
}

function deleteStudent(index){
    students.splice(index,1);
    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();
}

displayStudents();