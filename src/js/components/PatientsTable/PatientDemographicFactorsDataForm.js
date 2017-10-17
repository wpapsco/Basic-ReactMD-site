import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import YesNoSelect from '../YesNoSelect';
import DataForm from '../DataForm';

export default class PatientDemographicFactorsDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <DataForm tableName="PatientDemographicFactors" onSubmit={this.props.onSubmit}>
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Patient ID"
                    type="number"
                    required
                    name='patient_id'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Employer Name"
                    maxLength={128}
                    name='employer_name'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Supervisor Name"
                    maxLength={128}
                    name='supervisor_name'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Occupation"
                    maxLength={128}
                    name='occupation'
                    onChange={this.props.onChange}
                />
                <TextField //Should probably be a selectfield
                    id="floating-center-title"
                    className="md-cell"
                    label="Race"
                    maxLength={64}
                    name='race'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Race Other"
                    maxLength={128}
                    name='race_other'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title" //Should also be a select field prolly
                    className="md-cell"
                    label="Ethnicity"
                    maxLength={64}
                    name='ethnicity'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Ethnicity Other"
                    maxLength={128}
                    name='ethnicity_other'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Mobile Device Brand"
                    maxLength={64}
                    name='mobile_device_brand'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Mobile Device Model"
                    maxLength={64}
                    name='mobile_device_model'
                    onChange={this.props.onChange}
                />
                <SelectField
                    id="select-field-1"
                    label="Mobile Phone Style"
                    className="md-cell"
                    menuItems={['Touchscreen style', 'Flip style']}
                    name='mobile_phone_style'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Mobile Device Carrier"
                    maxLength={64}
                    name='mobile_device_carrier'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title" //again maybe needs a selectfield
                    className="md-cell"
                    label="Curacast Device Placement"
                    maxLength={64}
                    name='curacast_device_placement'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Curacast Device Placement Other"
                    maxLength={128}
                    name='curacast_device_placement_other'
                    onChange={this.props.onChange}
                />
                <YesNoSelect
                    id="select-field-2"
                    label="Travelling During Treatment?"
                    name='treatment_travel'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Travel Plans"
                    maxLength={512}
                    name='travel_plans'
                    onChange={this.props.onChange}
                />
            </DataForm>
        );
    }
}