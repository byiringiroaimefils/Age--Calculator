const input = document.getElementById("input");
const ResultEelement = document.getElementById("result");
const button = document.getElementById("btn")

button.addEventListener("click", function () {
    const BirthDate = new Date(input.value)
    const CurrentDate = new Date()
    const newdate = new Date(CurrentDate - BirthDate)

    const year = newdate.getFullYear() - 1970;
    const day = newdate.getDay();
    const month = newdate.getMonth() - 1;
    day >=0 ?ResultEelement.innerText = `You have  ${year} Year ${month} Month  ${0}Day `:ResultEelement.innerText = `You have  ${year} Year ${month} Month  ${day}Day `
   
  setTimeout(()=>{
    input.value = "";
  },950)

})