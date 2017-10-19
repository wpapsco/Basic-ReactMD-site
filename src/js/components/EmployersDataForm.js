import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import YesNoSelect from './YesNoSelect';
import DataForm from './DataForm';
var functions = require('../DataFormFunctions').default;

export default class EmployersDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'tableName': 'Employers'
        }
    }

    render() {
        return (
            <DataForm tableName={this.state.tableName} onSubmit={functions.onSubmit.bind(this)}>
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Employer Name"
                    maxLength={128}
                    required
                    onChange={functions.onChange.bind(this, 'employer_name')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Employer Description"
                    maxLength={512}
                    onChange={functions.onChange.bind(this, 'employer_description')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Employer Street Address"
                    maxLength={128}
                    onChange={functions.onChange.bind(this, 'employer_street_address')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Employer Street Address 2"
                    maxLength={128}
                    onChange={functions.onChange.bind(this, 'employer_street_address_2')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Employer City"
                    maxLength={128}
                    onChange={functions.onChange.bind(this, 'employer_city')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Employer State/Province"
                    maxLength={2}
                    onChange={functions.onChange.bind(this, 'employer_state_province')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Employer County"
                    maxLength={128}
                    onChange={functions.onChange.bind(this, 'employer_county')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Employer Country"
                    maxLength={3}
                    onChange={functions.onChange.bind(this, 'employer_country')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Employer Zip Code"
                    maxLength={16}
                    onChange={functions.onChange.bind(this, 'employer_zip')}
                />
            </DataForm>
        );
    }
}