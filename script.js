const wrapper =document.querySelector('.wrapper');
const loginLink =document.querySelector('.login-link');
const registerLink =document.querySelector('.register-link');

registerLink.addEventListener('click',()=>{
	wrapper.classList.add('active');
});

loginLink.addEventListener('click',()=>{
	wrapper.classList.remove('active');
});

const graduationYearSelect = document.getElementById('graduationYear');
const currentYear = new Date().getFullYear();
const startingYear = 1990; // Replace this with your desired starting year

for (let year = currentYear; year >= startingYear; year--) {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    graduationYearSelect.appendChild(option);
}







