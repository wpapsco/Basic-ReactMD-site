import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import TimePicker from 'react-md/lib/Pickers/TimePickerContainer';
import DataForm from '../DataForm';

export default class PatientMedicationsDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <DataForm tableName="PatientMedications" onSubmit={this.props.onSubmit}>
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Patient Therapy-Related Factors ID"
                    type="number"
                    name='patient_id'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Scientific Name"
                    maxLength={128}
                    name='medication_scientific_name'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Generic Name"
                    maxLength={128}
                    name='medication_generic_name'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Dosage"
                    maxLength={10}
                    type="number"
                    name='medication_dosage'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Dosage Units"
                    maxLength={32}
                    name='medication_dosage_units'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Route"
                    maxLength={2}
                    name='medication_route'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Frequency"
                    maxLength={3}
                    name='medication_freuqnecy'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Duration"
                    type="number"
                    name='medication_duration'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Duration Units"
                    maxLength={32}
                    name='medication_duration_units'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Previous Treatments"
                    maxLength={128}
                    name='medication_previous_treatments'
                    onChange={this.props.onChange}
                />
                <TimePicker
                    id="appointment-time-auto"
                    label="Preferred Dosage Time 1"
                    className="md-cell"
                    name='preferred_dose_time_1'
                    onChange={this.props.onChange}
                />
                <TimePicker
                    id="appointment-time-auto"
                    label="Preferred Dosage Time 2"
                    className="md-cell"
                    name='preferred_dose_time_2'
                    onChange={this.props.onChange}
                />
                <TimePicker
                    id="appointment-time-auto"
                    label="Preferred Dosage Time 3"
                    className="md-cell"
                    name='preferred_dose_time_3'
                    onChange={this.props.onChange}
                />
            </DataForm>
        );
    }
}