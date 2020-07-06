import React, { Component } from 'react';
import Datas from '../../Datas';

class ShowProduct extends Component {
    render() {
        return (
            <div>
                <div className="product">
                    <div className="text">
                        <div className="p-name"><a href="item.html"> {this.props.description}  </a></div>
                    </div>
                    <div className="p-img">
                        <img src={this.props.img} width={200} height={200} />
                    </div>
                    <div className="text">
                        <div className="p-cat"> {this.props.name} </div>
                        <div className="p-price">Please Call</div>
                        <input type="button" className="button" name="add" defaultValue="Add to cart" />
                    </div>
                    <div className="clear" />
                </div>
            </div>
        );
    }
}

export default ShowProduct;