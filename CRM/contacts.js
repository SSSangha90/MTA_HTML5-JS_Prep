function contactsScreen(mainID) {
    var screen = mainID;
    var initialized = false;
    return {
         init: function() {
            if (initialized) {
                return;
            }

            // finds all the input fields with the required attr and add a placeholder attr with required text
            $(':input[required]').siblings('label').append($('<span>').text('*').addClass('requiredMarker'));
            // Check contact name validity
            var contactName = document.getElementById('contactName')
            contactName.oninvalid = function(e) {
	            e.target.setCustomValidity("");
	           if (e.target.validity.valid == false) {
	               if (e.target.value.length == 0) {
	               	   e.target.setCustomValidity("Contact name is required.");
		           } else if (e.target.value.length < 5) {
			           e.target.setCustomValidity("Contact name must be at least 5 characters."); 
		           }
	           }
            };
 
            // check email validity
            var email = document.getElementById('emailAddress')
            email.oninvalid = function(e) {
	            e.target.setCustomValidity("");
	            if (e.target.validity.valid == false) {
		            if (e.target.value.length == 0) {
			            e.target.setCustomValidity("Email is required.");
		             } else {
			              e.target.setCustomValidity("Please enter a valid email address."); 
		             }
	            }
            };

            // Display add new contact on click
            document.getElementById('addContact').addEventListener('click', function(event){
                event.preventDefault();
                var displayDetails = document.getElementById('contactDetails');
                displayDetails.style = 'display: block'
            })

            // Hover over notes
            var timeTags = document.getElementsByTagName('time');
            for(let i = 0; i < timeTags.length; i++){
                timeTags[i].addEventListener('mouseenter', function(event){
                    event.target.nextElementSibling.style.display = 'block';
                })
                timeTags[i].addEventListener('mouseleave', function(event){
                    event.target.nextElementSibling.style.display = 'none';
                })
            }

            initialized = true;
        },

        // jQuery function using each method
        serializeForm: function() {
            var inputFields = $(screen).find('form :input');
            var result = {};
            $.each(inputFields, function(index, value) {
                 if ($(value).attr('name')) {
                     result[$(value).attr('name')] = $(value).val();
                 }
            });
            return result;
        }

    };
    
}