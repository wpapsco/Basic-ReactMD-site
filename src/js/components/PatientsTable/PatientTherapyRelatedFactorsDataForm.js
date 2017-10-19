import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import DataForm from '../DataForm';
var functions = require('../../DataFormFunctions').default;

export default class PatientTherapyRelatedFactorsDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'tableName': 'PatientTherapyRelatedFactors'
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
                    label="Side Effects Frequency"
                    type="number"
                    maxLength={2}
                    onChange={functions.onChange.bind(this, 'side_effects_freq')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Side Effect Previous Frequency"
                    type="number"
                    maxLength={2}
                    onChange={functions.onChange.bind(this, 'side_effect_prev_freq')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Nedication Bad Taste"
                    type="number"
                    maxLength={2}
                    onChange={functions.onChange.bind(this, 'medication_bad_taste')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication GI Upset"
                    type="number"
                    maxLength={2}
                    onChange={functions.onChange.bind(this, 'medication_gi_upset')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Acne"
                    type="number"
                    maxLength={2}
                    onChange={functions.onChange.bind(this, 'medication_acne')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Changes Skin Color"
                    type="number"
                    maxLength={2}
                    onChange={functions.onChange.bind(this, 'medication_change_skin_color')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Sleep Excessive"
                    type="number"
                    maxLength={2}
                    onChange={functions.onChange.bind(this, 'medication_sleep_excessive')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Nightmares"
                    type="number"
                    maxLength={2}
                    onChange={functions.onChange.bind(this, 'medication_nightmares')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Grip Weak"
                    type="number"
                    maxLength={2}
                    onChange={functions.onChange.bind(this, 'medication_grip_weak')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Headaches"
                    type="number"
                    maxLength={2}
                    onChange={functions.onChange.bind(this, 'medication_headaches')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication 3AM"
                    type="number"
                    maxLength={2}
                    onChange={functions.onChange.bind(this, 'medication_3am')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Cold"
                    type="number"
                    maxLength={2}
                    onChange={functions.onChange.bind(this, 'medication_cold')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Guest Bath"
                    type="number"
                    maxLength={2}
                    onChange={functions.onChange.bind(this, 'medication_guest_bath')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication 50 Miles"
                    type="number"
                    maxLength={2}
                    onChange={functions.onChange.bind(this, 'medication_50_miles')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Improves Symptoms"
                    type="number"
                    maxLength={2}
                    onChange={functions.onChange.bind(this, 'medication_improves_symptoms')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Makes No Difference"
                    type="number"
                    maxLength={2}
                    onChange={functions.onChange.bind(this, 'medication_makes_no_difference')}
                    
                />
            </DataForm>
        );
    }
}