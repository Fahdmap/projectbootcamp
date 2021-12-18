function registerUser() {

    let formData = {
        "firstName": "",
        'lastName': "",
        'username': "",
        'password': "",
        'confirmPassword': "",
        'email': "",
        'mobileNumber': "",
        'address1': "",
        'address2': "",
        'country': "",
        'state': "",
        'pobox': "",
    }

    // 1.1 use document to get all of the text input elements
    let textElements = document.getElementsByClassName('field');

    // 1.1.2 create variables for each text field
    let firstNameField = textElements[0];
    let lastNameField = textElements[1];
    let userNameField = textElements[2];
    let passwordField = textElements[3];
    let confrimPasswordField = textElements[4];
    let emailField = textElements[5];
    let mobileNumberField = textElements[6];
    let addressField = textElements[7];
    let address2Field = textElements[8];
    let countryField = textElements[9];
    let emirateField = textElements[10];
    let poboxField = textElements[11];

    // 1.2
    let checkBox = document.getElementsByClassName('checkbox')[0];

    // 3. validate the form data
    let errors = [];

    if(firstNameField.value === '') {
        errors.push('Please enter first name');
    }

    if(lastNameField.value === '') {
        errors.push('Please enter last name');
    }

    if(userNameField.value === '') {
        errors.push('Please enter username');
    }

    if(passwordField.value === '') {
        errors.push('Please enter password');
    }

    if(confrimPasswordField.value === '') {
        errors.push('Please confirm password');
    }

    if(emailField.value === '') {
        errors.push('Please enter email');
    }

    if(mobileNumberField.value === '') {
        errors.push('Please enter mobile number');
    }

    if(addressField.value === '') {
        errors.push('Please enter address');
    }

    if(countryField.value === '') {
        errors.push('Please enter your country');
    }

    if(emirateField.value === '') {
        errors.push('Please enter emirate');
    }

    if(poboxField.value === '') {
        errors.push('Please enter POBox');
    }
    

    // Get the hidden div layers
    let errorBox = document.getElementsByClassName('user-errors')[0];
    let successBox = document.getElementsByClassName('user-success')[0];

    if(errors.length > 0) {

        // Hide the success box an because error has occured        
        successBox.style.display = "none";

        // Unhide by changing its CSS to 'display: block'
        errorBox.style.display = "block";

        // Put the errors as html in the 'user-errors' div
        errorBox.innerHTML = errors.join("<br/>");

    } else {

        // Hide the error box because no error has occured  
        errorBox.style.display = "none";

        // Unhide by changing its CSS to 'display: block'
        successBox.style.display = "block";
    }


    // 4. send formData to backend
    formData['firstName'] = firstnameField.value;
    formData['lastName'] = lastnameField.value;
    formData['userName'] = usernameField.value;
    formData['password'] = passwordField.value;
    formData['confrimPassword'] = confrimpasswordField.value;
    formData['email'] = emailField.value;
    formData['mobileNumber'] = mobilenumberField.value;
    formData['address'] = addressField.value;
    formData['address2'] = address2Field.value;
    formData['country'] = countryField.value;
    formData['emirate'] = emirateField.value;
    formData['pobox'] = poboxField.value;
    
    

    console.log( formData )


}