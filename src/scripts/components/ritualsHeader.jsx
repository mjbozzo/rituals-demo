var React = require('react'),
    navigate = require('react-mini-router').navigate;

require('../../styles/ritualsHeader.css');

module.exports = React.createClass({
    goBack: function () {
        navigate('/');
    },
    render: function () {
        return (
            <header className="rituals-header">
                Header
            </header>
        );
    }
});
