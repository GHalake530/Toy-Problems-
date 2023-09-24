    // Function to calculate and display a student's grade based on their marks
function calculateGrade() {
    // Prompt the user to enter the student's marks
    const studentMarks = parseFloat(prompt("Enter students marks (between 0 and 100):"));
   
    let grade;
    // Determine the grade based on the student's marks
    if (studentMarks > 79) {
        grade = "A";
    } else if (studentMarks >= 60) {
        grade = "B";
    } else if (studentMarks >= 50) {
        grade = "C";
    } else if (studentMarks >= 40) {
        grade = "D";
    } else {
        grade = "E";
    }
    // Display the calculated grade using an alert
    alert(`Grade: ${grade}`);
}
// Call the calculateGrade function to initiate the grade calculation and display
calculateGrade();
