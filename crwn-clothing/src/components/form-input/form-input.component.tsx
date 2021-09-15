/* eslint-disable jsx-a11y/label-has-for */
import React, { FC } from 'react';
import './form-input.styles.scss';

type OwnProps = {
  id: string;
  type: string;
  name: string;
  required: boolean;
  handleChange: (e: any) => void;
  label?: string;
  value?: string;
  placeholder?: string;
};

const FormInput: FC<OwnProps> = ({ handleChange, label, ...otherProps}) => (
	<div className='group'>
    {label && <label className={`${otherProps?.value?.length ? 'shrink' : ''} form-input-label`} />}
    <input className="form-input" placeholder={otherProps?.placeholder ?? ''} onChange={handleChange} {...otherProps} />
  </div>
);

export default FormInput;
