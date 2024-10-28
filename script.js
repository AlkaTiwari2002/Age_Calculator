function calculateAge(dateOfBirth) {
  const dob = new Date(dateOfBirth);
  const diffMs = Date.now() - dob.getTime();
  const ageDate = new Date(diffMs);

  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

document.getElementById("ageForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const dob = document.getElementById("dob").value;
  const age = calculateAge(dob);
  document.getElementById("result").textContent = `Your age is ${age} years.`;
});
