var React = require('react'),
    RouterMixin = require('react-mini-router').RouterMixin,
    navigate = require('react-mini-router').navigate,
    ReactCSSTransitionGroup = require('react-addons-css-transition-group'),
    Configuration = require('./configuration.js');

require('../styles/main.css');

var Home = require('./components/home.jsx'),
    ProductDetail = require('./components/productDetail.jsx'),
    CartCheckout = require('./components/cartCheckout.jsx');

module.exports = React.createClass({
    mixins: [
        RouterMixin
    ],
    routes: {
        '/': 'home',
        '/product-detail/:productId': 'productDetail',
        '/cart-checkout': 'cartCheckout'
    },
    getInitialState: function () {
        return {
            configuration: Configuration
        };
    },
    render: function () {
        return (
            <ReactCSSTransitionGroup
                transitionName="example"
                transitionLeave={false}
                transitionEnterTimeout={ 500 }
                transitionLeaveTimeout={ 500 }>
                { this.renderCurrentRoute() }
            </ReactCSSTransitionGroup>
        );
    },
    home: function () {
        return <Home key={ this.state.path }
                    { ...this.state } />;
    },
    productDetail: function (productId) {
        var product = this.state.configuration.products[productId],
            gift = this.state.configuration.gift;

        return (product) ?
            <ProductDetail key={ this.state.path }
                    product={ product }
                    gift={ gift } />
                :
            <span>The product does not exists.</span>
    },
    cartCheckout: function (workspaceIndex) {
        var gift = this.state.configuration.gift;

        return <CartCheckout key={ this.state.path }
                    gift={ gift } />;
    },
    // DO NOT REMOVE new route callback
    notFound: function (path) {
        return (
            <div key={ this.state.path } className="not-found">
                Page Not Found: {path}
            </div>
        );
    }
});

