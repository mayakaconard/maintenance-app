import React from 'react';
import PropTypes from 'prop-types';

import TextField from 'material-ui/TextField/TextField';
import FlatButton from 'material-ui/FlatButton/FlatButton';

import ColorPicker from 'd2-ui/lib/legend/ColorPicker.component';
import Row from 'd2-ui/lib/layout/Row.component';

const styles = {
    textField: {
        flex: '1 1 100%',
        paddingLeft: '3rem',
    },
    colorPicker: {
        flex: 0,
    },
    button: {
        color: 'red',
    },
    row: {
        flexDirection: 'row',
    },
};

const Color = ({ id, name, color, onChange, onDelete }) => {
    const onNameChange = (event, newName) => onChange(newName, color);
    const onColorChange = newColor => onChange(name, newColor);

    return (
        <Row style={styles.row}>
            <ColorPicker
                color={color}
                onChange={onColorChange}
                style={styles.colorPicker}
            />
            <div style={styles.textField}>
                <TextField
                    id={id}
                    value={name}
                    onChange={onNameChange}
                    fullWidth
                />
            </div>
            <FlatButton
                label="Remove"
                onClick={onDelete}
                secondary
                style={styles.button}
            />
        </Row>
    );
};

Color.propTypes = {
    name: PropTypes.string,
    color: PropTypes.string,
    id: PropTypes.string,
    onChange: PropTypes.func,
    onDelete: PropTypes.func,
};

Color.defaultProps = {
    onChange: () => {},
    onDelete: () => {},
    name: '',
    id: '',
    color: '#000000',
};

export default Color;