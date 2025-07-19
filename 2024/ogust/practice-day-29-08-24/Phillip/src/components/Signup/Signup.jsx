import React, { useState } from 'react';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();

        // Perform validation checks here

        // Create a user object
        const user = {
            email,
            fullName,
            birthDate,
            password
        };

        // user example
        // {
        //     email: 'test@test.com',
        //     fullName: 'Test User',
        //     birthDate: '1990-01-01',
        //     password: 'password'
        // }

        // Save the user to local storage
        localStorage.setItem('user', JSON.stringify(user));

        // Clear the form fields
        setEmail('');
        setFullName('');
        setBirthDate('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <form onSubmit={handleSignup}>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor="fullName">Full Name</label>
            <input type="text" name="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} />

            <label htmlFor="birthDate">Birth Date</label>
            <input type="date" name="birthDate" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

            <button type="submit">Sign Up</button>
        </form>
    );
};

export default Signup;