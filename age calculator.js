function calculateAge() {
    var dobInput = document.getElementById('dob').value;
    var dob = new Date(dobInput);
    var currentDate = new Date();

    if (dob > currentDate) {
      alert("Please enter a valid date of birth.");
      displayResult("-", "-", "-");
      return;
    }

    var ageInMilliseconds = currentDate - dob;
    var ageInSeconds = ageInMilliseconds / 1000;
    var ageInMinutes = ageInSeconds / 60;
    var ageInHours = ageInMinutes / 60;
    var ageInDays = ageInHours / 24;
    var ageInMonths = ageInDays / 30.436875; // Average days in a month
    var ageInYears = ageInMonths / 12;

    var years = Math.floor(ageInYears);
    var months = Math.floor((ageInYears - years) * 12);
    var days = Math.floor(ageInDays % 30.436875);

    displayResult(years, months, days);
  }

  function displayResult(years, months, days) {
    document.getElementById('result').innerHTML = "Your age is: " + years + " years, " + months + " months, and " + days + " days.";
  }