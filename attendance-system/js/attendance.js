 let students = JSON.parse(localStorage.getItem("students")) || [];

let tbody = document.querySelector("#attendanceTable tbody");

students.forEach(student => {
    tbody.innerHTML += `
        <tr>
            <td>${student.roll}</td>
            <td>${student.name}</td>
            <td>
                <select>
                    <option value="Present">Present</option>
                    <option value="Absent">Absent</option>
                </select>
            </td>
        </tr>
    `;
});

function saveAttendance() {

    let attendance = [];

    let rows = document.querySelectorAll("#attendanceTable tbody tr");

    rows.forEach(row => {

        let roll = row.cells[0].innerText;
        let name = row.cells[1].innerText;
        let status = row.cells[2].querySelector("select").value;

        attendance.push({
            roll,
            name,
            status
        });

    });

    localStorage.setItem("attendance", JSON.stringify(attendance));

    alert("Attendance Saved Successfully!");
}