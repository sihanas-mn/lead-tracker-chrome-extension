let myLeads = [];
const inputEl = document.getElementById("input-el");
const saveInputEl = document.getElementById("input-btn");
const ulEl = document.getElementById("unorderedList-el");

saveInputEl.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  renderLeads();
});

function renderLeads() {
    let listItems = "";

  for (i = 0; i < myLeads.length; i++) {
    listItems += `<li><a href='${myLeads[i]}' target='_blank'>  ${myLeads[i]} </a></li>`
  }
  console.log(listItems);
  ulEl.innerHTML = listItems;
}
