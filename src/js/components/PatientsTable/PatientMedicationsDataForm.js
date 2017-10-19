import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import TimePicker from 'react-md/lib/Pickers/TimePickerContainer';
import DataForm from '../DataForm';
var functions = require('../../DataFormFunctions').default;

export default class PatientMedicationsDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'tableName': 'PatientMedications'
        }
    }

    render() {
        return (
            <DataForm tableName={this.state.tableName} onSubmit={functions.onSubmit.bind(this)}>
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Patient Therapy-Related Factors ID"
                    type="number"
                    onChange={functions.onChange.bind(this, 'patient_id')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Scientific Name"
                    maxLength={128}
                    onChange={functions.onChange.bind(this, 'medication_scientific_name')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Generic Name"
                    maxLength={128}
                    onChange={functions.onChange.bind(this, 'medication_generic_name')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Dosage"
                    maxLength={10}
                    type="number"
                    onChange={functions.onChange.bind(this, 'medication_dosage')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Dosage Units"
                    maxLength={32}
                    onChange={functions.onChange.bind(this, 'medication_dosage_units')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Route"
                    maxLength={2}
                    onChange={functions.onChange.bind(this, 'medication_route')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Frequency"
                    maxLength={3}
                    onChange={functions.onChange.bind(this, 'medication_freuqnecy')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Duration"
                    type="number"
                    onChange={functions.onChange.bind(this, 'medication_duration')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Duration Units"
                    maxLength={32}
                    onChange={functions.onChange.bind(this, 'medication_duration_units')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Previous Treatments"
                    maxLength={128}
                    onChange={functions.onChange.bind(this, 'medication_previous_treatments')}
                    
                />
                <TimePicker
                    id="appointment-time-auto"
                    label="Preferred Dosage Time 1"
                    className="md-cell"
                    onChange={functions.onChange.bind(this, 'preferred_dose_time_1')}
                    
                />
                <TimePicker
                    id="appointment-time-auto"
                    label="Preferred Dosage Time 2"
                    className="md-cell"
                    onChange={functions.onChange.bind(this, 'preferred_dose_time_2')}
                    
                />
                <TimePicker
                    id="appointment-time-auto"
                    label="Preferred Dosage Time 3"
                    className="md-cell"
                    onChange={functions.onChange.bind(this, 'preferred_dose_time_3')}
                    
                />
            </DataForm>
        );
    }
}