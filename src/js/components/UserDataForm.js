import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import DataForm from './DataForm';
var functions = require('../DataFormFunctions').default;

export default class UserDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'tableName': 'User'
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
                    required
                    onChange={functions.onChange.bind(this, 'user_type_id')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Fourm Pseudonym"
                    maxLength={64}
                    required
                    onChange={functions.onChange.bind(this, 'pseudonym')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Attached Person ID"
                    type="number"
                    required
                    onChange={functions.onChange.bind(this, 'person_id')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Time Zone"
                    maxLength={2}
                    required
                    onChange={functions.onChange.bind(this, 'time_zone')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Date Format"
                    maxLength={1}
                    onChange={functions.onChange.bind(this, 'date_format')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Time Format"
                    type="number"
                    maxLength={1}
                    onChange={functions.onChange.bind(this, 'time_format')}
                    
                />
            </DataForm>
        );
    }
}