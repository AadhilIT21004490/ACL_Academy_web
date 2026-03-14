"use client"
import Link from 'next/link';
import React from 'react';
interface LoginFormData {
    email: string;
    password: string;
}
const LoginMain: React.FC = () => {
    const handleLogin = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const loginData: LoginFormData = {
            email: formData.get('form_email') as string,
            password: formData.get('form_password') as string,
        };
        if (loginData) {
            alert("OK")
        }
        form.reset();
    };
    return (
        <section className="login-one">
            <div className="container">
                <div className="login-one__form">
                    <div className="inner-title text-center">
                        <h2>Login Here</h2>
                    </div>
                    <form onSubmit={handleLogin}>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="form-group">
                                    <div className="input-box">
                                        <input
                                            type="email"
                                            name="form_email"
                                            id="formEmail"
                                            placeholder="Email..."
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="form-group">
                                    <div className="input-box">
                                        <input
                                            type="password"
                                            name="form_password"
                                            id="formEmail"
                                            placeholder="Password..."
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="form-group">
                                    <button
                                        className="thm-btn"
                                        type="submit"
                                        data-loading-text="Please wait..."
                                    >
                                        Login Here
                                        <span><i className="icon-diagonal-arrow"></i></span>
                                    </button>
                                </div>
                            </div>
                            <div className="remember-forget">
                                <div className="checked-box1">
                                    <input
                                        className="form-check-input mt-1"
                                        type="checkbox"
                                        id="rememberMe"
                                        aria-label="Remember me checkbox"
                                    />
                                    <label htmlFor="rememberMe">
                                        Remember me
                                    </label>
                                </div>
                                <div className="forget">
                                    <Link href="#">Forget password?</Link>
                                </div>
                            </div>

                            <div className="create-account text-center">
                                <p>Not registered yet? <Link href={"/inner/sign-up"}>Create an Account</Link></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default LoginMain;