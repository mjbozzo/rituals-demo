var React = require('react'),
    navigate = require('react-mini-router').navigate,
    RitualsButton = require('./ritualsButton.jsx');

require('../../styles/giftModal.css');

module.exports = React.createClass({
    goTo: function (path) {
        console.log("goTo", path);
        navigate(path);
    },
    render: function () {
        var gift = this.props.gift;

        return (
            <div className="gift-modal">
                <h1>congratulations!</h1>
                <p className="description">
                    We have added this { gift.name } to your shopping cart.
                </p>

                <img className="picture" src={ gift.picture } />

                <RitualsButton
                    text="return to shopping"
                    type="cancel"
                    callback={ this.goTo.bind(this, '/') } />

                <RitualsButton
                    text="go to cart"
                    type="submit"
                    callback={ this.goTo.bind(this, '/cart-checkout') } />

                <p>Spend $57,50 more and choose from the premium gift.</p>
            </div>
        );
    }
});
