export function switchTab(event) {
  const activeBtn = document.querySelector(".tabs .active");
  activeBtn.classList.remove("active");
  event.target.classList.add("active");
  renderActiveTab();
}

export function renderActiveTab() {
  const dateCalcForm = document.getElementById("datecalc");
  const timerForm = document.querySelector("#timer");

  const activeTab = document.querySelector(".tabs .active");
  const tabLabel = activeTab.textContent.toLowerCase();

  if (tabLabel === "calculator") {
    timerForm.style.setProperty("display", "none");
    dateCalcForm.style.removeProperty("display");
  } else if (tabLabel === "timer") {
    dateCalcForm.style.setProperty("display", "none");
    timerForm.style.removeProperty("display");
  }
}

const a = "bla";
console.log(a);
