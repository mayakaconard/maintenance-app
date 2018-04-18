import React, { Component } from 'react';
import { get, compose } from 'lodash/fp';
import Checkbox from 'material-ui/Checkbox';
import programStore from '../eventProgramStore';
import addD2Context from 'd2-ui/lib/component-helpers/addD2Context';
import { CustomRegistrationDataEntryForm } from "../data-entry-form/EditCustomRegistrationForm";
import { bindActionCreators } from 'redux';

const styles = {
    outer: {
        marginTop: '24px',
    },
    checkbox: {
        marginBottom: '24px'
    }
}

class CustomRegistrationForm extends Component {
    state = {
        useCustom: !!this.props.model.dataEntryForm && !!this.props.model.dataEntryForm.id,
    };

    handleUseCustom = (e, checked) => {
        this.setState({ ...this.state, useCustom: checked });
    };

    renderCustomForm = () => {
        return <CustomRegistrationDataEntryForm />
    };


    handleNameChange = (e, val) => {
        console.log(e)
        console.log(val);


    }

    render() {
        return (
            <div style={styles.outer}>
                <Checkbox
                    checked={this.state.useCustom}
                    onCheck={this.handleUseCustom}
                    label={this.context.d2.i18n.getTranslation(
                        'use_custom_registration_form'
                    )}
                    style={styles.checkbox}
                />
                {this.state.useCustom && this.renderCustomForm()}
            </div>
        );
    }
}

export default addD2Context(CustomRegistrationForm);
