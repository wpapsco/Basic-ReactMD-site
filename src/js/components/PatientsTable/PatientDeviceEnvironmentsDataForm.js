import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import YesNoSelect from '../YesNoSelect';
import DataForm from '../DataForm';

export default class PatientDeviceEnvoronmentsDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <DataForm tableName="PatientDeviceEnvironments" onSubmit={this.props.onSubmit}>
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
                    label="CuraCast Location"
                    maxLength={32}
                    name='curacast_location'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="CuraCast Location Other"
                    maxLength={128}
                    name='curacast_location_other'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Mobile Phone Brand And Model"
                    maxLength={128}
                    name='mobile_phone_brand_and_model'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Mobile Phone Carrier"
                    maxLength={128}
                    name='mobile_phone_carrier'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Mobile Phone Carrier Account"
                    maxLength={128}
                    name='mobile_phone_carrier_account'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Electricity Provider"
                    maxLength={64}
                    name='electricity_provider'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Electricity Account"
                    maxLength={128}
                    name='electricity_account'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Internet Provider"
                    maxLength={64}
                    name='internet_provider'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Internet Account"
                    maxLength={128}
                    name='internet_account'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Children Under 18"
                    maxLength={2}
                    type="number"
                    name='children_under_18'
                    onChange={this.props.onChange}
                />
                <YesNoSelect
                    id="pet-select"
                    label="Do you have pets?"
                    name='has_pets'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Individuals In Household"
                    maxLength={2}
                    type="number"
                    name='individuals_count'
                    onChange={this.props.onChange}
                />
            </DataForm>
        );
    }
}