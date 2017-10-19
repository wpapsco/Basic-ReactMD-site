import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import YesNoSelect from '../YesNoSelect';
import DataForm from '../DataForm';
var functions = require('../../DataFormFunctions').default;

export default class PatientDeviceEnvironmentsDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'tableName': 'PatientDeviceEnvironments'
        }
    }

    render() {
        return (
            <DataForm tableName={this.state.tableName} onSubmit={functions.onSubmit.bind(this)}>
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Patient ID"
                    type="number"
                    required
                    onChange={functions.onChange.bind(this, 'patient_id')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="CuraCast Location"
                    maxLength={32}
                    onChange={functions.onChange.bind(this, 'curacast_location')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="CuraCast Location Other"
                    maxLength={128}
                    onChange={functions.onChange.bind(this, 'curacast_location_other')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Mobile Phone Brand And Model"
                    maxLength={128}
                    onChange={functions.onChange.bind(this, 'mobile_phone_brand_and_model')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Mobile Phone Carrier"
                    maxLength={128}
                    onChange={functions.onChange.bind(this, 'mobile_phone_carrier')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Mobile Phone Carrier Account"
                    maxLength={128}
                    onChange={functions.onChange.bind(this, 'mobile_phone_carrier_account')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Electricity Provider"
                    maxLength={64}
                    onChange={functions.onChange.bind(this, 'electricity_provider')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Electricity Account"
                    maxLength={128}
                    onChange={functions.onChange.bind(this, 'electricity_account')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Internet Provider"
                    maxLength={64}
                    onChange={functions.onChange.bind(this, 'internet_provider')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Internet Account"
                    maxLength={128}
                    onChange={functions.onChange.bind(this, 'internet_account')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Children Under 18"
                    maxLength={2}
                    type="number"
                    onChange={functions.onChange.bind(this, 'children_under_18')}
                    
                />
                <YesNoSelect
                    id="pet-select"
                    label="Do you have pets?"
                    onChange={functions.onChange.bind(this, 'has_pets')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Individuals In Household"
                    maxLength={2}
                    type="number"
                    onChange={functions.onChange.bind(this, 'individuals_count')}
                    
                />
            </DataForm>
        );
    }
}