import CollectionPreview from 'components/collection-preview/collection-preview.component';
import React from 'react';
import collection from './shop.data';

const ShopPage = () => {
	return (
		<div className='shop-page'>
			{collection.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
		</div>
	);
};
export default ShopPage;
