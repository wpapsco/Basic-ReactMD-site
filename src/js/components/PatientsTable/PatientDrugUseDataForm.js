import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import YesNoSelect from '../YesNoSelect';
import DataForm from '../DataForm';

export default class PatientDrugUseDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <DataForm tableName="PatientDrugUse" onSubmit={this.props.onSubmit}>
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
                    label="Drug Name"
                    maxLength={128}
                    required
                    name='drug_name'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Drug Use Count Per Frequency"
                    defaultValue="0"
                    type="number"
                    required
                    name='drug_count'
                    onChange={this.props.onChange}
                />
                <SelectField
                    id="age-select"
                    label="Drug Use Frequency"
                    className="md-cell"
                    defaultValue="PerMonth"
                    menuItems={['PerDay', 'PerHour', 'PerWeek', 'PerMonth', 'PerQuarter', 'PerYear']}
                    required
                    name='drug_frequency'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="How Long Since This Was Taken"
                    defaultValue="0"
                    type="number"
                    required
                    name='since_length'
                    onChange={this.props.onChange}
                />
                <SelectField
                    id="age-select"
                    label="Since Unit"
                    className="md-cell"
                    defaultValue="Years"
                    menuItems={['Hours', 'Days', 'Weeks', 'Months', 'Quarters', 'Years']}
                    required
                    name='since_unit'
                    onChange={this.props.onChange}
                />
            </DataForm>
        );
    }
}