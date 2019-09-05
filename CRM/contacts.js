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

// 1 - select all with classes of overlay
$('.overlay');

// 2 - select all input fields with name attribute
$(':input[name]')

// 3 - find form element with name attr = companyName 
// and assign to var called companySelector
var companySelector = 
$('form[name="companyName"]')

// 4 - invoke the find method on companySelector
// and find all option elems gt 0
companySelector.find('option:gt(0)')

// 5. find the odd numbered tr elements in the tbody
// $('tbody tr: odd')

$(':input[required]').siblings('label').css('color', 'red');
