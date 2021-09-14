import MenuItem from 'components/menu-item/menu-item.component';
import React from 'react';
import sections from './directory.data';
import './directory.styles.scss';

const Directory = () => {
	return (
		<div className='directory-menu'>
			{sections.map(({ title, id, imageUrl, size }) => {
				return <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />;
			})}
		</div>
	);
};

export default Directory;
