import React, { FormEvent, useState } from 'react';
import './sign-in.styles.scss';

type FormDataType = {
  email: string;
  password: string;
}

const SignIn = () => {
  const [formData, setFormData] = useState<FormDataType>({
    email: '',
    password: ''
  });
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  }
  return (
    <div className="sign-in">
    <h2>I already have an account</h2>
    <span>Sign in with your email and password</span>
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
      <label htmlFor="password">Password</label>
      <input id="password" name="password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} required />
      <input type="submit" value="Submit Form" />
    </form>
  </div>
  )

}

export default SignIn;
