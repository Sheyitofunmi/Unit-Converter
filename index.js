
const convertBtn = document.getElementById("convert-btn")
const numberEl = document.getElementById("number-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
let inputNumber = numberEl.value

// make the button and input field work when clicked
convertBtn.addEventListener("click", function(){
  inputNumber = numberEl.value
  convert()
})

// create function to calculate

const oneMeter = 3.281
const oneLiter = 0.264
const oneKg = 2.204

function calculLength() {
  let sumMeter = inputNumber / oneMeter
  sumMeter = parseFloat(sumMeter.toFixed(3)) 
  let sumFeet = inputNumber * oneMeter
  sumFeet = parseFloat(sumFeet.toFixed(3))
  lengthEl.innerHTML = `<p>${inputNumber} meters = ${sumFeet} feet | ${inputNumber} feet = ${sumMeter} meters</p>`
}
 
function calculVolume() {
  let sumLiters = inputNumber / oneLiter
  sumLiters = parseFloat(sumLiters.toFixed(3))
  let sumGallons = inputNumber * oneLiter
  sumGallons = parseFloat(sumGallons.toFixed(3))
  volumeEl.innerHTML = `<p>${inputNumber} liters = ${sumGallons} gallons | ${inputNumber} gallons = ${sumLiters} liters</p>`
}

function calculMass() {
  let sumKg = inputNumber / oneKg
  sumKg = parseFloat(sumKg.toFixed(3))
  let sumPounds = inputNumber * oneKg
  sumPounds = parseFloat(sumPounds.toFixed(3))
  massEl.innerHTML = `<p>${inputNumber} kilos = ${sumPounds} pounds | ${inputNumber} pounds = ${sumKg} kilos</p>`
}

function convert() {
  calculLength()
  calculVolume()
  calculMass()
}

