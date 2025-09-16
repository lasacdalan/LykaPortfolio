/*ABOUT*/
document.querySelector(".hire-me").addEventListener("click", () => {
    window.location.href = "contact.html";
  });

document.querySelector(".dl-cv").addEventListener("click", () => {
    var link = document.createElement("a");
    link.href = "../files/LykaSacdalan.pdf";
    link.download = "LykaSacdalan.pdf";
    link.click();
  });
