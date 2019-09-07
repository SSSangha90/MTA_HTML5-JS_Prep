function contactsScreen(mainID) {
    var screen = mainID;
    var initialized = false;
    return {
         init: function() {

            // jQuery mouse click listener to submit button
            $(screen).find('form input [type="submit"]').click(
                function(evt){
                    evt.preventDefault();
                    // check if form is valid
                    if ($(evt.target).parents('form')[0].checkValidity()){
                        var contact = this.serializeForm();
                        var html = '<td>' + contact.phoneNumber +'</td>' +
                        '<td>' + contact.emailAddress +'</td>' +
                        '<td>' + contact.companyName +'</td>' +
                        '<td><time datetime="' + contact.lastContacted + '">' + 
                        contact.lastContacted + '</time'> + 
                        '<div class="overlay">' + contact.notes + '</div></td></tr>';
                    $(screen).find('table tbody').append(html);
                    $(screen).find('form :input[name]').val('')
	                $(screen).find('#contactDetails').hide();
                    }
                }.bind(this)
            );

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
            $(screen).find('tbody').on("mouseenter mouseleave", "td > time", function(evt) {
                if (evt.type === "mouseenter") {
                     $(evt.target).siblings('.overlay').slideDown();
                } else {
                        $(evt.target).siblings('.overlay').slideUp()
                }
            });

            // text count for text area in notes
            $(screen).find('textarea').keyup(function(evt) {
                if ($(evt.target).siblings('.textCount')) {
                    var characters = $(evt.target).val().length;
                    $(evt.target).siblings('.textCount').text(characters + ' characters');
                    
                }
            });

            // hover color effect with mouseleave and mouseenter on the table rows
            $(screen).find('tbody').on("mouseenter mouseleave", "tr", function(evt) {
                if (evt.type === "mouseenter") {
                     $(evt.target).closest('tr').css('color', 'white');
                     $(evt.target).closest('tr').css('background', '#3056A0');
                } else {
                        $(evt.target).closest('tr').removeAttr('style');
                } 
            });

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