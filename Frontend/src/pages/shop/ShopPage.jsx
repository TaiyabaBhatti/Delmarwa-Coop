import React from 'react';
import Headline from './Headline';
import ProductCatlouge from './ProductCatlouge';

const ShopPage = () => {
    return (
       <section>
        <Headline/>
        {/* product cards or product catelouge */}
        <ProductCatlouge/>
       </section>
    );
}

export default ShopPage;
