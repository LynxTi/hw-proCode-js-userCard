const form = document.querySelector('.form');
const container = document.querySelector('.user-cards-container')

form.addEventListener('submit', (event)=>{
    event.preventDefault();

    const formData = new FormData(event.target)
    const firstName = formData.get('firstName');
    const secondName = formData.get('secondName');
    const age = formData.get('age');

    container.innerHTML= `<div class="user-card">
    <div class="firstName">Имя: ${firstName}</div>
    <div class="secondName">Фамилия: ${secondName}</div>
    <div class="age">Возраст: ${age}</div>
    </div>` + container.innerHTML;
});