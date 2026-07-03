// Load attendance data from Local Storage
let attendance = JSON.parse(localStorage.getItem("attendance")) || [];

// Get table body
let tableBody = document.querySelector("#reportTable tbody");

// Check if there is any attendance data
if (attendance.length === 0) {
    tableBody.innerHTML = `
        <tr>
            <td colspan="3" style="text-align:center;">
                No attendance records found.
            </td>
        </tr>
    `;
} else {
    // Display attendance records
    attendance.forEach(student => {
        let row = `
            <tr>
                <td>${student.roll}</td>
                <td>${student.name}</td>
                <td>${student.status}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}