export const signUpFormControl = [
    {
        name: 'userName',
        label: 'User Name',
        placeholder: 'jhondoe',
        type: 'text',
        componentType: 'input'
    },
    {
        name: 'userEmail',
        label: 'User Email',
        placeholder: 'example@gmail.com',
        type: 'email',
        componentType: 'input'
    },
    {
        name: 'password',
        label: 'User Password',
        placeholder: 'password',
        type: 'password',
        componentType: 'input'
    }
];

export const signInFormControl = [
    {
        name: 'userEmail',
        label: 'User Email',
        placeholder: 'example@gmail.com',
        type: 'email',
        componentType: 'input'
    },
    {
        name: 'password',
        label: 'User Password',
        placeholder: 'password',
        type: 'password',
        componentType: 'input'
    }
];

export const initialSignInFormData = {
    userEmail: '',
    password: ''
};

export const initialSignUpFormData = {
    userName: '',
    userEmail: '',
    password: ''
};