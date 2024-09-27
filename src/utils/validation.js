export const regexRules = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Basic email validation
    name: /^[a-zA-Z\s]{3,30}$/, // Name: allows letters and spaces, 3 to 30 characters
  };
  
  export const validateEmail = (email) => {
    return regexRules.email.test(email);
  };
  
  export const validateName = (name) => {
    return regexRules.name.test(name);
  };
  
  export const validateMessage = (message) => {
    return message.length >= 10;
  };
  