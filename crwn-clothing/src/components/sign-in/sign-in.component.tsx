import CustomButton from 'components/custom-button/custom-button.component';
import FormInput from 'components/form-input/form-input.component';
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
      <FormInput id="email" type="email" name="email" label="email" placeholder="email" value={formData.email} handleChange={(e: { target: { value: any; }; }) => setFormData({...formData, email: e.target.value})} required />
      <FormInput id="password" type="password" name="password" placeholder="password" label="password" value={formData.password} handleChange={(e) => setFormData({...formData, password: e.target.value})} required />
      <CustomButton type="submit">
        Sign In
      </CustomButton>
    </form>
  </div>
  )

}

export default SignIn;
