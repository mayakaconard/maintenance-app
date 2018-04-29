import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import withProps from 'recompose/withProps';
import { compose } from 'lodash/fp';

import SaveButton from './SaveButton.component';
import CancelButton from './CancelButton.component';

import { goToAndScrollUp } from '../router-utils';

const styles = {
    cancelButton: {
        marginLeft: '1rem',
    },
};

// TODO: Make the isValid prop actually useful..
export default function FormActionButtons({ onSaveAction, onCancelAction, isDirtyHandler, isSaving, isValidating }) {
    return (
        <div>
            <SaveButton onClick={onSaveAction} isSaving={isSaving} isValidating={isValidating} />
            <CancelButton onClick={onCancelAction} isDirtyHandler={isDirtyHandler} style={styles.cancelButton} />
        </div>
    );
}

FormActionButtons.propTypes = {
    onSaveAction: PropTypes.func.isRequired,
    onCancelAction: PropTypes.func.isRequired,
    isDirtyHandler: React.PropTypes.func,
    isSaving: PropTypes.bool,
    isValidating: PropTypes.bool,
};
FormActionButtons.defaultProps = {
    isDirtyHandler: () => {},
    isSaving: false,
    isValidating: false,
};

export function createConnectedFormActionButtonsForSchema(mapDispatchToProps, mapStateToProps = null) {
    const onCancelActionCreator = (groupName, schema) => () => goToAndScrollUp(`/list/${groupName}/${schema}`);

    const enhance = compose(
        withProps(({ groupName, schema }) => ({
            onCancelAction: onCancelActionCreator(groupName, schema),
        })),
        connect(mapStateToProps, mapDispatchToProps),
    );

    return enhance(FormActionButtons);
}
