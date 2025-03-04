function validatePinCode(pin) {
    const pinPattern = /^400088$/;
    return pinPattern.test(pin);
}

// Test cases
console.log(validatePinCode("400088")); 
console.log(validatePinCode("123456")); 
console.log(validatePinCode("40008"));  
console.log(validatePinCode("400088 ")); 
