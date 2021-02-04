import React, { useEffect, useState } from 'react';
import Layout from '../Layout/Layout';
import classes from './Login.module.css';
import axios from 'axios';

const Login = () => {
    const [ inputValue, setInputValue ] = useState({
        email: "",
        password: ""
    });

    const [ loging, setLoging ] = useState(false);

    //Contact the Api
    useEffect(() => {
        setLoging(false);

        const login = (email, password) => {

            setInputValue({
                email: "",
                password: ""
            });

            const user = {
                action: 'login',
                email: email,
                password: password,
            };

            const formData = new FormData();

            for ( var key in user ) {
                formData.append(key, user[key]);
            }

            console.log(user);
            axios.post('/vadmin/api2/apiLine.php', formData)
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log(err)
                })
        }

        if (loging) {
            login(inputValue.email, inputValue.password);
        }
    }, [loging, inputValue])

    //Pick up email being typed
    const handleInputChange = (e) => {
        setInputValue((prevProps) => ({
            ...prevProps,
            [e.target.name]: e.target.value
        }))
    }


    //Pick up Email and Password
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(inputValue)

        setLoging(true);
    }


    return (
        <React.Fragment>
            <Layout>
                <div className={classes.Login}>
                    <div>
                        <span className={classes.Web}>WEB VENDOR</span>
                    </div>
                    <hr />

                    <form onSubmit={handleSubmit}>
                        <div className={classes.Email}>
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                name="email"
                                value={inputValue.email}
                                onChange={handleInputChange} />
                        </div>

                        <div className={classes.Password}>
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                name="password"
                                value={inputValue.password}
                                onChange={handleInputChange} />
                        </div>

                        <div className={classes.Button}>
                            <button>LOGIN</button>
                            <div>Forgot Password?</div>
                        </div>

                    </form>
                </div>
            </Layout>
        </React.Fragment>
    )
}

export default Login;