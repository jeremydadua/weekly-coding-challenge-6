$(function(){


    $('#submitBtn').click(function(){
        validateEmail();
    });

    $('#inputEmail').on('input', function () {
        // Clear the error message when the user starts typing
        $('#errorMsg').text('');
    });

    function validateEmail() {
        var emailInput = $('#inputEmail');
        var errorMessage = $('#errorMsg');
        var email = emailInput.val();

        // Regular expression for basic email validation
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email) || email === '') {
            // Valid email or empty, clear the error message
            errorMessage.text('');
            if (email !== '') {
                alert('Email submitted: ' + email);
                emailInput.val(''); // Clear the input text
                // You can also submit the form or perform other actions here
            }
        } else {
            // Invalid email
            errorMessage.text('Please enter a valid email address');
        }
        
    }


    $(".secIcon").matchHeight();
    $(".heading03").matchHeight();
    $(".subTxt02").matchHeight();
    
    

    

    
});