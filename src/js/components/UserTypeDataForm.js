import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import DataForm from './DataForm';
var functions = require('../DataFormFunctions').default;

export default class UserTypeDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'tableName': 'UserType'
        }
    }

    render() {
        return (
            <DataForm tableName={this.state.tableName} onSubmit={functions.onSubmit.bind(this)}>
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="User Type ID"
                    maxLength={2}
                    onChange={functions.onChange.bind(this, 'user_type_id')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Unique User Type Identifier"
                    maxLength={64}
                    required
                    onChange={functions.onChange.bind(this, 'user_type')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="User Type Description"
                    maxLength={256}
                    onChange={functions.onChange.bind(this, 'user_type_description')}
                    
                />
            </DataForm>
        );
    }
}