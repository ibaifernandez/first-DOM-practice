let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

let mySelect = document.querySelector('#mySelect');

for (let i = 0; i < countries.length; i++) {
    let option = document.createElement('option');
    option.classList.add = 'abd'
    option.innerHTML = `<option value="${countries[i]}">${countries[i]}</option>`;
    mySelect.appendChild(option);
}

mySelect.addEventListener('change', alertMe);

function alertMe() {
    alert(`${mySelect.value}`)
}