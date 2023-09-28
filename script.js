$(document).ready(function() {
  // Add event listener to email input field
  $('input[name="email"]').on('input', function() {
    // Get email input field value
    const email = $(this).val();

    // Validate email
    if (!isValidEmail(email)) {
      // Display error message
    $('#email_error_message').html('Valid email required');
    $('#email').css('background-color','rgb(204 14 0 / 15%)');
    $('#email').css('border-color','rgb(204 14 0 / 63%)');

    } else {
      // Clear error message
      $('#email_error_message').html('');
      $('#email').css('background-color','white');
      $('#email').css('border-color','hsla(235, 18%, 26%, 0.411)');
    }
  });

  // Add event listener to subscribe button
  $('button[name="email"]').click(function() {
    // Get email input field value
    const email = $('input[name="email"]').val();

    // Validate email
    if (!isValidEmail(email)) {
      // Display error message
      
 $('#email').css('background-color','rgb(204 14 0 / 15%)');
    $('#email').css('border-color','rgb(204 14 0 / 63%)');
      return;
    }
    else{
        $('.sign-up').toggle();
        $('.success').toggle();
        $('.success .text p').html('A confirmation email has been sent '+email+'. Please open it and click the button inside to confirm your subscription.')
    }

    
  });

//   Add event listener to dismiss button on success message
  $('.success button').click(function() {
    // Hide success message
   $('.sign-up').toggle();
        $('.success').toggle();
  });
});

function isValidEmail(email) {
  // Regular expression to check for valid email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}