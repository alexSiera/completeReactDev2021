import { ShopItemType } from 'pages/shop/shop.data';
import React, { FC } from 'react';
import './collection-preview.styles.scss';

interface OwnProps {
	title: string;
	items: ShopItemType[];
}

const CollectionPreview: FC<OwnProps> = ({ title, items }) => (
	<div className='collection-preview'>
		<h1 className='title'>{title}</h1>
		<div className='preview'>
			{items
				.filter((item, idx: number) => idx < 4)
				.map(({ name, id }) => {
					return <div key={id}>{name}</div>;
				})}
		</div>
	</div>
);
export default CollectionPreview;
