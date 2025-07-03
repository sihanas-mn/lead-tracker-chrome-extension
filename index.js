let myLeads = [];
const inputEl = document.getElementById("input-el");
const saveInputEl = document.getElementById("input-btn");
const ulEl = document.getElementById("unorderedList-el");

let leadsFromLocal = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocal) {
  myLeads = leadsFromLocal
  renderLeads()
}

saveInputEl.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  renderLeads();
});

function renderLeads() {
    let listItems = "";

  for (i = 0; i < myLeads.length; i++) {
    listItems += `<li><a href='${myLeads[i]}' target='_blank'>  ${myLeads[i]} </a></li>`
  }
  ulEl.innerHTML = listItems;
}
