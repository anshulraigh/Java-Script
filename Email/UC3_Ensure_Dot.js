function validateEmail(email) {
    const emailPattern = /^abc@bridgelabz\.co(\.[a-zA-Z]{2,})?$/;
    return emailPattern.test(email);
}


console.log(validateEmail("abc@bridgelabz.co"));      
console.log(validateEmail("abc@bridgelabz.co.in"));   
console.log(validateEmail("abc@bridgelabz.co.us"));   
console.log(validateEmail("abc.xyz@bridgelabz.co")); 
console.log(validateEmail("xyz@bridgelabz.co.in"));   