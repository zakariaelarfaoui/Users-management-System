const departmentsList = document.getElementById("departments");
const departmentName = document.getElementById("updated-name");
const departmentDescription = document.getElementById("updated-description");
const departmentUpdateModal = document.querySelector(".departmentUpdateModal");

const usersList = document.getElementById("users");

const userName = document.querySelector("input[name=newUserName]");
const userEmail = document.querySelector("input[name=newUserEmail]");
const userDepartment = document.querySelector("input[name=newUserDepartment]");
const userUpdateModal = document.querySelector(".userUpdateModal");

if (departmentsList) {
  departmentsList.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-edit")) {
      id = e.target.nextElementSibling.value;
      departmentName.value =
        e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent.trim();
      departmentDescription.value =
        e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.textContent.trim();
      departmentUpdateModal.action = `/department/${id}`;
      departmentUpdateModal.method = "post";
    }
  });
}
if (usersList) {
  usersList.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-edit")) {
      console.log(
        e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.textContent.trim()
      );
      id = e.target.nextElementSibling.value;
      userName.value =
        e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.textContent.trim();
      userEmail.value =
        e.target.parentElement.parentElement.previousElementSibling.textContent.trim();
      userUpdateModal.action = `/user/${id}`;
      userUpdateModal.method = "post";
    }
  });
}


