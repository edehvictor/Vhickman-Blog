import React from 'react'
import { auth, googleProvider } from '../Config/Firebase'
import { signInWithPopup, createUserWithEmailAndPassword, } from 'firebase/auth'
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {
    const navigate = useNavigate()
    const [emailRef, setEmailRef] = useState('')
    const [passwordRef, setPasswordRef] = useState('')

    const signInWithGoogle = async () => {

        try {
            await signInWithPopup(auth, googleProvider)
            alert('Youre being logged in')
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    async function createUser() {
        try {
            await createUserWithEmailAndPassword(auth, emailRef, passwordRef);
            navigate('/')

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='Login'>
            <div className="login-container">
                <h2>Sign up</h2>
                <button className="google-button" onClick={signInWithGoogle}>Sign in with Google</button>
                <input
                    autoFocus
                    type="email"
                    required
                    className="email-input"
                    placeholder="Email"
                    value={emailRef}
                    onChange={(e) => setEmailRef(e.target.value)}
                />

                <input
                    type="password"
                    className="password-input"
                    placeholder="Password"
                    required
                    value={passwordRef}
                    onChange={(e) => setPasswordRef(e.target.value)}
                />

                <button className="submit-button" onClick={createUser}>Login</button>
                <div className="reset-password">
                    <p >Have an account?
                        <Link to='/login' style={{ color: "red" }}>Log in </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login