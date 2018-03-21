var React = require('react');

require('../../styles/cartItem.css');

module.exports = React.createClass({
    goToPrevScreen: function () {
        navigate('/');
    },
    componentDidMount: function () {
        window.scrollTo(0, 0);
    },
    render: function () {
        var item = this.props.item;

        return (
            <div className="cart-item">
                <img className="picture" src={ item.picture } />
                <span className="name">{ item.name }</span>
                <span className="size">Size { item.size }</span>
                <span>Edit details</span>
                <span>Remove</span>
                <div className="quantity">
                    <span>-</span>
                    <span>{ item.quantity }</span>
                    <span>+</span>
                </div>
                <span className="price">{ item.price }</span>
            </div>
        );
    }
});
