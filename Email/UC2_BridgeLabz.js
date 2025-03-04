function validateEmail(email) {
    const emailPattern = /^abc@bridgelabz\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;
    return emailPattern.test(email);
}


console.log(validateEmail("abc@bridgelabz.co"));      
console.log(validateEmail("abc@bridgelabz.co.in"));   
console.log(validateEmail("abc@bridgelabz.com"));     
console.log(validateEmail("abc.xyz@bridgelabz.co"));  
console.log(validateEmail("xyz@bridgelabz.co.in"));   
console.log(validateEmail("abc@xyz.co"));            
console.log(validateEmail("abc@bridgelabzcom"));     
console.log(validateEmail("abc@bridgelabz."));     
console.log(validateEmail("abc@.co.in"));           
console.log(validateEmail("abc@bridgelabz..co"));   
