function validatePinCode(pin) {
    const pinPattern = /^[0-9]{6}$/;
    return pinPattern.test(pin);
}

// Test cases
console.log(validatePinCode("400088")); 
console.log(validatePinCode("A400088")); 
console.log(validatePinCode("40008A"));
console.log(validatePinCode("400088 ")); 
console.log(validatePinCode("1234@6"));
