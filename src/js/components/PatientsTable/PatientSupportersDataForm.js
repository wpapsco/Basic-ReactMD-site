import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import DataForm from '../DataForm';

export default class PatientSupportersDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            time_format: 1
        }
    }

    render() {
        return (
            <DataForm tableName="PatientSupporters" onSubmit={this.props.onSubmit}>
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Patient ID"
                    type="number"
                    required
                    name='patient_id'
                    onChange={this.props.onChange}
                />
                <SelectField
                    id="supporter-select"
                    label="Supporter Type"
                    className="md-cell"
                    menuItems={["Spouse", "Descendants", "Dependents", "Parents", "Siblings", "Friends", "Coworkers", "Roommates", "Other"]}
                    required
                    name='supporter_type'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Other Description"
                    maxLength={128}
                    name='other_description'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Supporter Name"
                    maxLength={128}
                    required
                    name='supporter_name'
                    onChange={this.props.onChange}
                />
            </DataForm>
        );
    }
}