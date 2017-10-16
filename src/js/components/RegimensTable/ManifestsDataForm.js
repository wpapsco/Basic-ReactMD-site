import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import TimePicker from 'react-md/lib/Pickers/TimePickerContainer';
import YesNoSelect from '../YesNoSelect';
import DataForm from '../DataForm';

export default class ManifestsDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <DataForm tableName="Manifests">
                <TimePicker
                    id="appointment-time-auto"
                    className="md-cell"
                    label="Manifest Creation Time"
                    name="manifest_creation_time"
                    onChange={this.props.onChange}
                />
                <DatePicker
                    id="appointment-date-auto"
                    label="Manifest Creation Date"
                    name="manifest_creation_date"
                    className="md-cell"
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Created By User ID"
                    name="created_by_user_id"
                    type="number"
                    onChange={this.props.onChange}
                />
                <TimePicker
                    id="appointment-time-auto"
                    className="md-cell"
                    label="Manifest Changed Time"
                    name="manifest_changed_time"
                    onChange={this.props.onChange}
                />
                <DatePicker
                    id="appointment-date-auto"
                    label="Manifest Changed Date"
                    name="manifest_changed_date"
                    className="md-cell"
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Changed By User ID"
                    name="changed_by_user_id"
                    type="number"
                    onChange={this.props.onChange}
                />
                <TimePicker
                    id="appointment-time-auto"
                    className="md-cell"
                    label="Manifest Zero Time"
                    name="manifest_zero_time"
                    onChange={this.props.onChange}
                />
                <DatePicker
                    id="appointment-date-auto"
                    label="Manifest Zero Date"
                    name="manifest_zero_date"
                    className="md-cell"
                    onChange={this.props.onChange}
                />
            </DataForm>
        );
    }
}