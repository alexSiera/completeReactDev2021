import MenuItem from 'components/menu-item/menu-item.component';
import React from 'react';
import sections from './directory.data';
import './directory.styles.scss';

const Directory = () => {
	return (
		<div className='directory-menu'>
			{sections.map(({ id, ...otherSectionProps }) => {
				return <MenuItem key={id} {...otherSectionProps} />;
			})}
		</div>
	);
};

export default Directory;
