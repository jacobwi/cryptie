const Validator = require('validator');
const isEmpty = require('lodash/isEmpty');

module.exports = function validateRegister(data) {
    let errors = {};
    
    if (!Validator.isLength(data.fullname, {min: 2, max: 50})){
        errors.name = "Name must be between 2 and 50 characters";
    }

    if (Validator.isEmpty(data.fullname)) {
        errors.name = 'Name field is required';
    }

    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password is required';
    }

    if (!Validator.equals(data.password, data.passwordConfirmation)) {
        errors.passwordConfirmation = 'Passwords must match';
    }
    
    return {
        errors,
        isValid: isEmpty(errors)
    }
}
