import React, { FC } from 'react';
import './custom-button.styles.scss';

type OwnProps = {
  type?: 'button' | 'reset' | 'submit';
};

const CustomButton: FC<OwnProps> = ({ children, ...otherProps }) => (
	<button type={otherProps.type ?? 'button'} className='custom-button' {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
