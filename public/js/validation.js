// Client-side form validation
// The form element
const form = document.getElementById("booking-form");

// The input elements that can error
const destinationElement = document.getElementById("destination");
const travelersElement = document.getElementById("travelers");

// All error messages
const errors = document.getElementsByClassName("err");

// Sets every error message to hidden
function clearErrors() {
    // For every error
    for (let i=0;i<errors.length;i++) {
        // Hide it on the page
        errors[i].style.display = "none";
    }
}

form.onsubmit = () => {
    // Get the values of the inputs that can error for this submission
    const destination = destinationElement.value;
    const travelers = travelersElement.value;

    let isValid = true;
    // Clear existing errors
    clearErrors();


    if (destination == "none") {
        // Find the destination-err and set it visible
        document.getElementById("destination-err").style.display = "block";
        isValid = false;
    }
    if (travelers == 0) {
        document.getElementById("travelers-err").style.display = "block";
        isValid = false;
    }

    return isValid;
};

clearErrors();