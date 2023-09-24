function calculateGrade() {
    const studentMarks = parseFloat(prompt("Enter students marks (between 0 and 100):"));
   
    let grade;
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
    alert(`Grade: ${grade}`);
}
calculateGrade();
