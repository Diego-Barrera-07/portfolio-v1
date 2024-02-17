export const alphabeticalRegex: RegExp = /^[a-zA-Z ']+$/;
export const alphanumericRegex: RegExp = /^[a-zA-Z0-9.,áéíóúÁÉÍÓÚüÜñÑ\s]+$/;
export const emailRegex: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

export const validateInput = (input: string, regex: RegExp): boolean => {
    const isValid = regex.test(input);

    if (!isValid) {
        console.error(`Validation failed for input: ${input}. Expected format: ${regex}`);
    }

    return isValid;
};