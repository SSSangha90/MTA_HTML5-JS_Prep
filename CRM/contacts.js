const init = () => {
    console.log('application started');

    document.getElementById('addContact').addEventListener('click', (event) => {
        event.preventDefault();
        var contactBlock = document.getElementById('contactDetails');
        contactBlock.style.display = 'block';
    })

    var timeElements = document.getElementsByTagName('time');
           for (var i = 0; i < timeElements.length; i++) {
             timeElements[i].addEventListener("mouseenter", function(event) {
	             event.target.nextElementSibling.style.display = 'block';
             });
    	     timeElements[i].addEventListener("mouseleave", function(event) {
	            event.target.nextElementSibling.style.display = 'none';
             });
          }       
    
}

init()