import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import TimePicker from 'react-md/lib/Pickers/TimePickerContainer';
import YesNoSelect from '../YesNoSelect';
import DataForm from '../DataForm';

export default class RegimensDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <DataForm tableName="Regimens">
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Well ID"
                    name="well_id"
                    type="number"
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Drug's Scientific Name"
                    name="drug_scientific_name"
                    maxLength={128}
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Drug's Generic Name"
                    name="drug_generic_name"
                    maxLength={128}
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Dosage"
                    name="regimen_dosage"
                    maxLength={10}
                    type="number"
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Route"
                    name="regimen_route"
                    maxLength={2}
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Frequency"
                    name="regimen_frequency"
                    maxLength={3}
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication NDC"
                    name="regimen_medication_ndc"
                    maxLength={13}
                    onChange={this.props.onChange}
                />
            </DataForm>
        );
    }
}