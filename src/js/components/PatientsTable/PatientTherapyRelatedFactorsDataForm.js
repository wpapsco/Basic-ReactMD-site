import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import DataForm from '../DataForm';

export default class PatientTherapyRelatedFactorsDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <DataForm tableName="TherapyRelatedFactors" onSubmit={this.props.onSubmit}>
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
                    label="Side Effects Frequency"
                    type="number"
                    maxLength={2}
                    name='side_effects_freq'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Side Effect Previous Frequency"
                    type="number"
                    maxLength={2}
                    name='side_effect_prev_freq'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Nedication Bad Taste"
                    type="number"
                    maxLength={2}
                    name='medication_bad_taste'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication GI Upset"
                    type="number"
                    maxLength={2}
                    name='medication_gi_upset'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Acne"
                    type="number"
                    maxLength={2}
                    name='medication_acne'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Changes Skin Color"
                    type="number"
                    maxLength={2}
                    name='medication_change_skin_color'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Sleep Excessive"
                    type="number"
                    maxLength={2}
                    name='medication_sleep_excessive'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Nightmares"
                    type="number"
                    maxLength={2}
                    name='medication_nightmares'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Grip Weak"
                    type="number"
                    maxLength={2}
                    name='medication_grip_weak'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Headaches"
                    type="number"
                    maxLength={2}
                    name='medication_headaches'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication 3AM"
                    type="number"
                    maxLength={2}
                    name='medication_3am'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Cold"
                    type="number"
                    maxLength={2}
                    name='medication_cold'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Guest Bath"
                    type="number"
                    maxLength={2}
                    name='medication_guest_bath'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication 50 Miles"
                    type="number"
                    maxLength={2}
                    name='medication_50_miles'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Improves Symptoms"
                    type="number"
                    maxLength={2}
                    name='medication_improves_symptoms'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Makes No Difference"
                    type="number"
                    maxLength={2}
                    name='medication_makes_no_difference'
                    onChange={this.props.onChange}
                />
            </DataForm>
        );
    }
}