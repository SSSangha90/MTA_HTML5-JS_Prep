const init = () => {
    console.log('application started');

    document.getElementById('addContact').addEventListener('click', (event) => {
        event.preventDefault();
        var contactBlock = document.getElementById('contactDetails');
        contactBlock.style.display = 'block';
    })

    
}

init()