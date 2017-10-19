import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import TimePicker from 'react-md/lib/Pickers/TimePickerContainer';
import YesNoSelect from '../YesNoSelect';
import DataForm from '../DataForm';
var functions = require('../../DataFormFunctions').default;

export default class PhonesDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'tableName': 'Phones'
        }
    }

    render() {
        return (
            <DataForm tableName={this.state.tableName} onSubmit={functions.onSubmit.bind(this)}>
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Person ID"
                    onChange={functions.onChange.bind(this, "person_id")}
                    type="number"
                    required
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Phone"
                    onChange={functions.onChange.bind(this, "phone_number")}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Phone Type ID"
                    onChange={functions.onChange.bind(this, "phone_type_id")}
                    type="number"
                    required
                    
                />
                <YesNoSelect
                    id="contact-select"
                    label="Primary Contact Phone"
                    onChange={functions.onChange.bind(this, "primary_contact_phone")}
                    
                />
            </DataForm>
        );
    }
}