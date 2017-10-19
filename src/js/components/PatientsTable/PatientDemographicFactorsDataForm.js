import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import YesNoSelect from '../YesNoSelect';
import DataForm from '../DataForm';
var functions = require('../../DataFormFunctions').default;

export default class PatientDemographicFactorsDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'tableName': 'PatientDemographicFactors'
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
                    label="Employer Name"
                    maxLength={128}
                    onChange={functions.onChange.bind(this, 'employer_name')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Supervisor Name"
                    maxLength={128}
                    onChange={functions.onChange.bind(this, 'supervisor_name')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Occupation"
                    maxLength={128}
                    onChange={functions.onChange.bind(this, 'occupation')}
                    
                />
                <TextField //Should probably be a selectfield
                    id="floating-center-title"
                    className="md-cell"
                    label="Race"
                    maxLength={64}
                    onChange={functions.onChange.bind(this, 'race')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Race Other"
                    maxLength={128}
                    onChange={functions.onChange.bind(this, 'race_other')}
                    
                />
                <TextField
                    id="floating-center-title" //Should also be a select field prolly
                    className="md-cell"
                    label="Ethnicity"
                    maxLength={64}
                    onChange={functions.onChange.bind(this, 'ethnicity')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Ethnicity Other"
                    maxLength={128}
                    onChange={functions.onChange.bind(this, 'ethnicity_other')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Mobile Device Brand"
                    maxLength={64}
                    onChange={functions.onChange.bind(this, 'mobile_device_brand')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Mobile Device Model"
                    maxLength={64}
                    onChange={functions.onChange.bind(this, 'mobile_device_model')}
                    
                />
                <SelectField
                    id="select-field-1"
                    label="Mobile Phone Style"
                    className="md-cell"
                    menuItems={['Touchscreen style', 'Flip style']}
                    onChange={functions.onChange.bind(this, 'mobile_phone_style')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Mobile Device Carrier"
                    maxLength={64}
                    onChange={functions.onChange.bind(this, 'mobile_device_carrier')}
                    
                />
                <TextField
                    id="floating-center-title" //again maybe needs a selectfield
                    className="md-cell"
                    label="Curacast Device Placement"
                    maxLength={64}
                    onChange={functions.onChange.bind(this, 'curacast_device_placement')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Curacast Device Placement Other"
                    maxLength={128}
                    onChange={functions.onChange.bind(this, 'curacast_device_placement_other')}
                    
                />
                <YesNoSelect
                    id="treatment_travel"
                    label="Travelling During Treatment?"
                    onChange={functions.onChange.bind(this, 'treatment_travel')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Travel Plans"
                    maxLength={512}
                    onChange={functions.onChange.bind(this, 'travel_plans')}
                    
                />
            </DataForm>
        );
    }
}