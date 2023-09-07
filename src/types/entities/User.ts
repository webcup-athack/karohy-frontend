interface User {
    firstname: string,
    lastname: string,
    email: string,
    birth_date: Date,
    phone_number: string
}

interface UserRegister extends User {
    password: string
}