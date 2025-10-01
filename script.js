window.onload = function () {
  const pg2 = document.getElementById("pg2");
  if (pg2) {
    pg2.addEventListener("click", function () {
      window.location.href = "page2.html";
    });
  }

  const pg3 = document.getElementById("pg3");
  if (pg3) {
    pg3.addEventListener("click", function () {
      window.location.href = "page3.html";
    });
  }
};

const backBtn = document.getElementById("backBtn");
  if (backBtn) {
    backBtn.addEventListener("click", function () {
      window.history.back(); // Goes to the previous page in browser history
    });
  };