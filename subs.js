const wrapper = document.querySelector('.wrapper');
const monthly = document.querySelector('.table-container-yearly .border-gap-1');
const yearly = document.querySelector('.border-gap-2');

yearly.addEventListener('click', () =>{
    wrapper.classList.add('active');
});

monthly.addEventListener('click', () =>{
    wrapper.classList.remove('active');
});

function highlight(element) {
    const options = document.querySelectorAll('.table-container-monthly .border-gap-2');
    options.forEach(option => {
        option.style.backgroundColor = ''; // Reset background color
        option.style.color = ''; // Reset text color
    });

    element.style.backgroundColor = 'rgb(35, 35, 111)'; // Set background color
    element.style.color = 'white'; // Set text color
}

