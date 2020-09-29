export const validateEmail = (email) => {
    const expression = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return expression.test(String(email).toLowerCase())
}

export const validatePassword = (password) => {
    const expression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    return expression.test(password)
}

