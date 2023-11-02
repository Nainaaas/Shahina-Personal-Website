
const mailID = document.getElementById('contactEmail');

const form = document.getElementById('submit-form');
const errorElement = document.getElementById('mailError');

form.addEventListener('submit',(e) =>{
  e.preventDefault()
  
  $.ajax({
      url:"https://script.google.com/macros/s/AKfycbyJhFkXtO631qpkjjI-uSSznY3fJgwyhHRmWBTpKrwi_BSB-Ok6sD7W1ru1oON7uGA/exec",
      data:$("#submit-form").serialize(),
      method:"post",
      success:function (response){
          window.alert("Form submitted successfully");
          window.location.reload()
          //window.location.href="https://google.com"
      },
      error:function (err){
          alert("Something Error")

      }
  })
})

document.getElementById('contactEmail').addEventListener('blur', function () {

    
    var email = this.value;
    if (validateEmail(email)) {
        // Valid email address
        
        this.classList.remove('is-invalid');
        this.classList.add('is-valid');
        
        errorElement.style.display = 'none';

    } else {
        // Invalid email address
       
        this.classList.remove('is-valid');
        this.classList.add('is-invalid');

        errorElement.style.display = 'block';
        errorElement.innerHTML = 'Given mail id is not valid';
        
    }
});

function validateEmail(email) {
    // A simple email validation function using regular expressions
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}