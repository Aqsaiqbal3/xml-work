function calculateAge() {
    var dob = document.getElementById("dob").value;

    if (dob) {
        var dobDate = new Date(dob);
        var currentDate = new Date();
        var timeDiff = currentDate - dobDate;
        var age = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));

        document.getElementById("result").innerText = "Your age is: " + age + " years.";
    } else {
        alert("Please enter your date of birth.");
    }
}
