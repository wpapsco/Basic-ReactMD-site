import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import DataForm from '../DataForm';

export default class PatientSportsDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    render() {
        return (
            <DataForm tableName="PatientSports" onSubmit={this.props.onSubmit}>
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
                    id="age-select"
                    label="Age group"
                    defaultValue='Adult'
                    className="md-cell"
                    menuItems={["Adult", "Teenager", "Child"]}
                    name='age_group'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Sport Description"
                    maxLength={128}
                    name='sport_description'
                    onChange={this.props.onChange}
                />
            </DataForm>
        );
    }
}