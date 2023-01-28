import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
const auth = getAuth();


const BootstrapReactRegister = () => {
    const [passwordError, setPasswordError] = useState('');
    const handleonSubmit = (event) => {
        event.preventDefault();
        // console.log(event.target.email.value)
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        if (!/(?=.*?[A-Z])/.test(password)) {
            setPasswordError('Please Provide at least 1 upperCase')
            return;
        }
        if (password.length < 6) {
            setPasswordError('minimum 6 characters');
            return;
        }
        // if (!/.{4,}/.test(password)) {
        //     setPasswordError('Password should be at 4 characters ')
        //     return;
        // }
        setPasswordError('');

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error('error', error);
            })
    }
    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-primary'>Please Register!!!</h1>
            <Form onSubmit={handleonSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <p className='text-danger'>{passwordError}</p>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default BootstrapReactRegister;