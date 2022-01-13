const departmentsList = document.getElementById("departments");
const departmentName = document.getElementById("updated-name");
const departmentDescription = document.getElementById("updated-description");
const departmentId = document.getElementById("updated-id");

if (departmentsList) {
  departmentsList.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-edit")) {
      id = e.target.nextElementSibling.value;
      departmentName.value =
        e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
      departmentDescription.value =
        e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.textContent;
    }
  });
}
