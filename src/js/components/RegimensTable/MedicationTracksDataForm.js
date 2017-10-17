import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import TimePicker from 'react-md/lib/Pickers/TimePickerContainer';
import YesNoSelect from '../YesNoSelect';
import DataForm from '../DataForm';

export default class MedicationTracksDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <DataForm tableName="MedicationTracks" onSubmit={this.props.onSubmit}>
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Manifest ID"
                    name="manifest_id"
                    type="number"
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Track Ruleset ID"
                    name="manifest_id"
                    type="number"
                    onChange={this.props.onChange}
                />
                <TimePicker
                    id="appointment-time-auto"
                    className="md-cell"
                    label="Medication Track Zero Time"
                    name="medication_track_zero_time"
                    onChange={this.props.onChange}
                />
                <DatePicker
                    id="appointment-date-auto"
                    label="Medication Track Zero Date"
                    name="medication_track_zero_date"
                    className="md-cell"
                    onChange={this.props.onChange}
                />
            </DataForm>
        );
    }
}