import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import YesNoSelect from './YesNoSelect';
import DataForm from './DataForm';

export default class EmployersDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <DataForm tableName="Employers" onSubmit={this.props.onSubmit}>
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Employer Name"
                    maxLength={128}
                    name='employer_name'
                    required
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Employer Description"
                    maxLength={512}
                    name='employer_description'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Employer Street Address"
                    maxLength={128}
                    name='employer_street_address'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Employer Street Address 2"
                    maxLength={128}
                    name='employer_street_address_2'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Employer City"
                    maxLength={128}
                    name='employer_city'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Employer State/Province"
                    maxLength={2}
                    name='employer_state_province'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Employer County"
                    maxLength={128}
                    name='employer_county'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Employer Country"
                    maxLength={3}
                    name='employer_country'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Employer Zip Code"
                    maxLength={16}
                    name='employer_zip'
                    onChange={this.props.onChange}
                />
            </DataForm>
        );
    }
}