// Function to calculate and display demerit points based on a given speed
function demeritPoints(speed) {
    // Define the speed limit and the number of km per demerit point
    const speedLimit = 70;
    const kmPerPoint = 5;

    // Check if the speed is within the speed limit
    if (speed <= speedLimit) {
        console.log("OK"); // If speed is within the limit, no demerit points, so log "OK"
    } else {
        // Calculate demerit points based on how much the speed exceeds the limit
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerPoint);
        
        // Check if the calculated demerit points lead to a license suspension
        if (demeritPoints >= 12) {
            console.log("License suspended"); // If demerit points are 12 or more, log "License suspended"
        } else {
            console.log(`Points: ${demeritPoints}`); // Otherwise, log the calculated demerit points
        }
    }
}


 

