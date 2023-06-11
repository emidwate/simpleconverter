const meter = 3.281; // feet
const liter = 0.264; // gallon
const kilogram = 2.204; //pound

const length = document.getElementById('meter-feet');
const volume = document.getElementById('liters-gallons');
const mass = document.getElementById('kilograms-pounds');
const unitsEl = document.getElementById('units');
const btnEl = document.getElementById('convert-btn');

btnEl.addEventListener('click', function () {
  let units = Number(unitsEl.value);
  meterToFeet(units);
  literToGallon(units);
  killogramToPound(units);
  if (units == 0) {
    length.textContent = '';
    volume.textContent = '';
    mass.textContent = '';
  }
  unitsEl.value = '';
  unitsEl.style.width = '90px';
});

function meterToFeet(quantityOfUnits) {
  let meterToFeet = (meter * quantityOfUnits).toFixed(2);
  let feetToMeter = ((1 / meter) * quantityOfUnits).toFixed(2);
  length.textContent = `${unitsEl.value} meters = ${meterToFeet} feet | ${unitsEl.value} feet = ${feetToMeter} meters`;
}

function literToGallon(quantityOfUnits) {
  let littersToGallons = (liter * quantityOfUnits).toFixed(2);
  let gallonsToLitters = ((1 / liter) * quantityOfUnits).toFixed(2);
  volume.textContent = `${unitsEl.value} liters = ${littersToGallons} gallons | ${unitsEl.value} gallons = ${gallonsToLitters} litters`;
}

function killogramToPound(quantityOfUnits) {
  let kilosToPounds = (kilogram * quantityOfUnits).toFixed(2);
  let poundsToKilos = ((1 / kilogram) * quantityOfUnits).toFixed(2);
  mass.textContent = `${unitsEl.value} kilos = ${kilosToPounds} pounds | ${unitsEl.value} poounds = ${poundsToKilos} killos`;
}

unitsEl.addEventListener('input', () => {
  unitsEl.style.width = `${unitsEl.value.length * 20 + 90}px`;
});
