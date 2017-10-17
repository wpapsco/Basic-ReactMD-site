import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import DataForm from './DataForm';

export default class UserDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <DataForm tableName="User" onSubmit={this.props.onSubmit}>
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="User Type ID"
                    maxLength={2}
                    required
                    name='user_type_id'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Fourm Pseudonym"
                    maxLength={64}
                    required
                    name='pseudonym'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Attached Person ID"
                    type="number"
                    required
                    name='person_id'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Time Zone"
                    maxLength={2}
                    required
                    name='time_zone'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Date Format"
                    maxLength={1}
                    name='date_format'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Time Format"
                    type="number"
                    maxLength={1}
                    name='time_format'
                    onChange={this.props.onChange}
                />
            </DataForm>
        );
    }
}