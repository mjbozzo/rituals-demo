var React = require('react'),
    RelatedProductsItem = require('./relatedProductsItem.jsx');

require('../../styles/relatedProducts.css');

module.exports = React.createClass({
    render: function () {
        return (
            <ul className="related-products">
                {
                    this.props.products.map(function (product, index) {
                        return (
                            <li key={ index }>
                                <RelatedProductsItem product={ product } />
                            </li>
                        )
                    }.bind(this))
                }
            </ul>
        );
    }
});
