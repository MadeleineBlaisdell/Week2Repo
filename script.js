window.onload = function () {//Forward. Triggers on load
  const pg2 = document.getElementById("pg2");
  if (pg2) {//Checks if page 2 exists
    pg2.addEventListener("click", function () {
      window.location.href = "page2.html";
    });
  }

  const pg3 = document.getElementById("pg3");
  if (pg3) {//Checks if page 3 exists
    pg3.addEventListener("click", function () {
      window.location.href = "page3.html";
    });
  }
};

const backBtn = document.getElementById("backBtn");//Back
  if (backBtn) {
    backBtn.addEventListener("click", function () {
      window.history.back(); //Window history tracks individual page history
    });
  };