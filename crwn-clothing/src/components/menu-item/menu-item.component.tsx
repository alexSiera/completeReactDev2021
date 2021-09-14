import React, { FC } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

type PathParamsType = {
	history: string;
};
interface OwnProps {
	title: string;
	imageUrl: string;
	size?: string;
	linkUrl: string;
}

type MenuItemProps = RouteComponentProps<PathParamsType> & OwnProps;

const MenuItem: FC<MenuItemProps> = ({ title, imageUrl, size, history, linkUrl, match }) => (
	<div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
		<div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
		<div className='content'>
			<h1 className='title'>{title?.toUpperCase()}</h1>
			<span className='subtitle'>SHOP NOW</span>
		</div>
	</div>
);
export default withRouter(MenuItem);
