var React = require('react');

require('../../styles/applePay.css');

module.exports = React.createClass({
    componentDidMount: function () {
        window.scrollTo(0, 0);
    },
    render: function () {
        return (
            <div className="apple-pay">
                Apple Pay
            </div>
        );
    }
});
