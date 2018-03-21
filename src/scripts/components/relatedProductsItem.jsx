var React = require('react');

require('../../styles/relatedProductsItem.css');

module.exports = React.createClass({
    render: function () {
        var product = this.props.product;

        return (
            <div className="related-products-item">
                <img className="item-picture" src={ product.picture } />

                <div className="item-data">
                    <span className="name">{ product.name }</span>
                    <span className="price">{ product.price }</span>
                </div>
            </div>
        );
    }
});

