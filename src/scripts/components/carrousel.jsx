var React = require('react');

require('../../styles/carrousel.css');

module.exports = React.createClass({
    render: function () {
        console.log(this.props.images);
        return (
            <div className="carrousel">
                Carrousel
            </div>
        );
    }
});
