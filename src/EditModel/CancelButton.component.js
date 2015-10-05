import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import Translate from 'd2-ui/i18n/Translate.mixin';

const CancelButton = React.createClass({
    propTypes: {
        onClick: React.PropTypes.func.isRequired,
    },

    mixins: [Translate],

    render() {
        return (
            <RaisedButton {...this.props} label={this.getTranslation('cancel')} />
        );
    },
});

export default CancelButton;
