import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import TimePicker from 'react-md/lib/Pickers/TimePickerContainer';
import YesNoSelect from '../YesNoSelect';
import DataForm from '../DataForm';

export default class WellsDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <DataForm tableName="Wells">
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Track ID"
                    name="medication_track_id"
                    type="number"
                    maxLength={2}
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Well Row Number"
                    name="well_row_number"
                    type="number"
                    maxLength={2}
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Well Column Number"
                    name="well_column_number"
                    type="number"
                    maxLength={2}
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Well Number"
                    name="well_number"
                    type="number"
                    maxLength={2}
                    onChange={this.props.onChange}
                />
            </DataForm>
        );
    }
}