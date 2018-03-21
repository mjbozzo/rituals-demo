var React = require('react'),
    navigate = require('react-mini-router').navigate,
    RitualsHeader = require('./ritualsHeader.jsx'),
    CartItem = require('./cartItem.jsx'),
    ApplePay = require('./applePay.jsx');

require('../../styles/cartCheckout.css');

module.exports = React.createClass({
    goToPrevScreen: function () {
        navigate('/');
    },
    componentDidMount: function () {
        window.scrollTo(0, 0);
    },
    render: function () {
        var cartItems = [],
            gift = this.props.gift;

        return (
            <div className="cart-checkout">
                <RitualsHeader />

                <section className="cart">
                    <h1>your cart</h1>

                    {
                        cartItems.map(function (item, index) {
                            return (
                                <CartItem key={ index }
                                    item={ item } />
                            );
                        }.bind(this))
                    }
                </section>

                <section className="gift">
                    <h1>your gift</h1>

                    <div>
                        <img src={ gift.picture }/>
                        <span>{ gift.name }</span>
                    </div>
                </section>

                <ApplePay />
            </div>
        );
    }
});
