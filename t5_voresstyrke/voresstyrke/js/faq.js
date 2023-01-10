document.addEventListener("DOMContentLoaded", init);

function init() {
  const faq1 = document.querySelector(".q1");
  const faq2 = document.querySelector(".q2");
  const faq3 = document.querySelector(".q3");
  const faq4 = document.querySelector(".q4");

  faq1.addEventListener("click", toggleAccordeon);
  faq2.addEventListener("click", toggleAccordeon);
  faq3.addEventListener("click", toggleAccordeon);
  faq4.addEventListener("click", toggleAccordeon);
}

function toggleAccordeon(e) {
  console.log(e.target.parentElement.classList.contains("faq-item"));
  if (e.target.parentElement.classList.contains("faq-item")) {
    e.target.parentElement.querySelector(".faq-body").classList.toggle("show");
  }
}
