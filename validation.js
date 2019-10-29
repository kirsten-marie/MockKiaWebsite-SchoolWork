const fullName = document.getElementById('fullName')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const form = document.getElementById('customerSurvey')
const errorPannel1 = document.getElementById('demographicErrors')

form.addEventListener('submit', (e) => {
    let messages = []
    if (fullName.value === '' || fullName.value == null){
        messages.push('Name is required');
        console.log(messages.join(', '))
    }

    if (messages.length > 0){
        e.preventDefault()
        errorPannel1.innerText  = messages.join (', ')
        console.log(messages.join(', '))
    }
});