let form = document.querySelector('.needs-validation');

form.addEventListener('submit', function (e) {

  e.preventDefault();

  if (form.checkValidity()) {

    let successAlert = document.getElementById('successAlert');
    //DISPLAY THE MESSAGE
    successAlert.style.display = 'block';

    // RESET THE FORM FIELDS
    form.reset();

    // CLEAR THE VALIDATION STYLES
    form.classList.remove('was-validated');

  } else {
    // IF THE FORM IS NOT VALID, SHOW VALIDATION FEEDBACK
    form.classList.add('was-validated');
  }
});
