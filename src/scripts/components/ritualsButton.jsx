var React = require('react');

require('../../styles/ritualsButton.css');

module.exports = React.createClass({
    render: function () {
        var gift = this.props.gift;

        return (
            <div className={"rituals-button " + this.props.type }
            	onClick={ this.props.callback }>
            </div>
        );
    }
});
