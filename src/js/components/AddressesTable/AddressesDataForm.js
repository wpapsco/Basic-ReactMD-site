import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import TimePicker from 'react-md/lib/Pickers/TimePickerContainer';
import YesNoSelect from '../YesNoSelect';
import DataForm from '../DataForm';
var functions = require('../../DataFormFunctions').default;

export default class AddressesDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'tableName': 'Addresses'
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
                    label="Address Type ID"
                    onChange={functions.onChange.bind(this, "address_type_id")}
                    type="number"
                    required

                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Street Address"
                    onChange={functions.onChange.bind(this, "street_address")}
                    maxLength={128}

                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Street Address 2"
                    onChange={functions.onChange.bind(this, "street_address 2")}
                    maxLength={128}

                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="City"
                    onChange={functions.onChange.bind(this, "city")}
                    maxLength={64}

                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="State/Province"
                    onChange={functions.onChange.bind(this, "state_province")}
                    maxLength={64}

                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="County"
                    onChange={functions.onChange.bind(this, "county")}
                    maxLength={3}

                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Country"
                    onChange={functions.onChange.bind(this, "country")}
                    maxLength={2}

                />
                <YesNoSelect
                    id="contact-select"
                    label="Primary Contact Address"
                    onChange={functions.onChange.bind(this, "primary_contact_address")}

                />
            </DataForm>
        );
    }
}