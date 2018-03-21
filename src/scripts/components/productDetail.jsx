var React = require('react'),
    navigate = require('react-mini-router').navigate,
    RitualsHeader = require('./ritualsHeader.jsx'),
    Breadcrumb = require('./breadcrumb.jsx'),
    Carrousel = require('./carrousel.jsx'),
    SizePicker = require('./sizePicker.jsx'),
    RitualsButton = require('./ritualsButton.jsx'),
    RelatedProducts = require('./relatedProducts.jsx'),
    GiftModal = require('./giftModal.jsx');

require('../../styles/productDetail.css');

module.exports = React.createClass({
    componentDidMount: function () {
        window.scrollTo(0, 0);
    },
    addToCart: function () {
        console.log("addToCart");
    },
    render: function () {
        var pathArray = ["home", "clothing", "women's clothing", "ladies yoga wear"],
            product = this.props.product;

        return (
            <div className="product-detail">
                <RitualsHeader />
                <Breadcrumb path={ pathArray } />
                <Carrousel images={ product.images } />

                <p className="price">{ product.price }</p>

                <SizePicker />

                <RitualsButton
                    text="add to cart"
                    type="submit"
                    callback={ this.addToCart } />

                <div className="description">
                    <h1>description</h1>
                    <p>{ product.description }</p>
                </div>

                <RelatedProducts products={ product.relatedProducts } />

                <GiftModal gift={ this.props.gift } />
            </div>
        );
    }
});

