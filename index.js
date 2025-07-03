let myLeads = ["www.freeleads.com", "megaleads.com", "pastlives.com"]
const inputEl = document.getElementById("input-el")
const saveInputEl = document.getElementById("input-btn")
const ulEl = document.getElementById("unorderedList-el")

saveInputEl.addEventListener ("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

for (i = 0; i < myLeads.length; i++) {
    ulEl.textContent += myLeads[i]
}