function validatePinCode(pin) {
    const pinPattern = /^\d{3} ?\d{3}$/; 
    return pinPattern.test(pin);
}

// Test cases
console.log(validatePinCode("400088"));   
console.log(validatePinCode("400 088")); 
console.log(validatePinCode("A400088"));  
console.log(validatePinCode("400088B"));  
console.log(validatePinCode("400 08A"));  


