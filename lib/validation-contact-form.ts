// utils/validateContactForm.ts

export interface FormData {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    message: string;
  }
  
  export interface FormErrors {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    message: string;
  }
  
  const validateEmail = (email: string): boolean => {
    // Simple email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  
  export const validateForm = (formData: FormData): { isValid: boolean; errors: FormErrors } => {
    const errors: FormErrors = {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      message: "",
    };
  
    let isValid = true;
  
    if (!formData.firstname) {
      errors.firstname = "First name is required.";
      isValid = false;
    }
  
    if (!formData.lastname) {
      errors.lastname = "Last name is required.";
      isValid = false;
    }
  
    if (!formData.email) {
      errors.email = "Email address is required.";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      errors.email = "Invalid email format.";
      isValid = false;
    }
  
    if (!formData.phone) {
      errors.phone = "Phone number is required.";
      isValid = false;
    }
  
    if (!formData.message) {
      errors.message = "Message is required.";
      isValid = false;
    }
  
    return { isValid, errors };
  };
  