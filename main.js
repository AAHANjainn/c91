
function login()
{
  name_1 = document.getElementById("username_1").value;
  name_2 = document.getElementById("username_2").value;
  localStorage.setItem("name_1" , name_1);
  localStorage.setItem("name_2" , name_2);
  window.location="screen2.html";
}