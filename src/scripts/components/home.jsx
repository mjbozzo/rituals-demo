var React = require('react'),
    ReactDOM = require('react-dom'),
    RitualsHeader = require('./ritualsHeader.jsx');

require('../../styles/home.css');

module.exports = React.createClass({
    render: function () {
        return (
            <div className="home">
                <RitualsHeader />
            </div>
        );
    }
});
