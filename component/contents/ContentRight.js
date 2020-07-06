import React, { Component } from 'react';
import ShowProduct from './ShowProduct';
import Datas from '../../Datas';

class ContentRight extends React.Component {
    render() {
        var data = Datas();
        var elements = data.map((product) => (
            <ShowProduct
                id={product.id}
                price={product.price}
                name={product.name}
                img={product.image}
                description={product.description}
            />
        ));
        return (
            <div>
                <div id="right-content">
                    <h2>Product : </h2>
                    <div id="products">
                        {elements}
                        <div style={{ clear: 'both' }} />
                    </div>
                    <div style={{ clear: 'both' }} />
                </div>
                {/* this is the content for menu */}
            </div>
        );
    }
}

export default ContentRight;