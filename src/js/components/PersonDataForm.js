import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import DataForm from './DataForm';
var functions = require('../DataFormFunctions').default;

export default class PersonDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            display_ssn: '',
            'tableName': 'Person'
        }
    }

    handleChange = (name, value) => {
        if (name == 'ssn') {
            var ssn = value.replace(/[^0-9.]/g, "");
            if (ssn.length > 9) {
                ssn = ssn.slice(0, 9);
            }
            this.setState({
                "ssn": ssn
            });
            var display_ssn = ssn;
            if (ssn.length > 5) {
                display_ssn = ssn.slice(0, 3) + "-" + ssn.slice(3, 5) + "-" + ssn.slice(5, 9);
            } else if (ssn.length > 3) {
                display_ssn = ssn.slice(0, 3) + "-" + ssn.slice(3);
            }
            this.setState({
                "display_ssn": display_ssn
            });
        }
    }

    render() {
        return (
            <DataForm tableName={this.state.tableName} onSubmit={functions.onSubmit.bind(this)}>
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="First Name"
                    maxLength={64}
                    onChange={functions.onChange.bind(this, 'first_name')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Middle Name"
                    maxLength={64}
                    onChange={functions.onChange.bind(this, 'middle_name')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Last Name"
                    maxLength={64}
                    onChange={functions.onChange.bind(this, 'last_name')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Nickname"
                    maxLength={64}
                    onChange={functions.onChange.bind(this, 'nick_name')}
                    
                />
                <TextField
                    value={this.state.display_ssn}
                    id="floating-center-title"
                    className="md-cell"
                    label="SSN"
                    onChange={this.handleChange.bind(this, 'ssn')}
                />
                <SelectField
                    id="gender-select"
                    label="Gender"
                    placeholder="Gender"
                    className="md-cell"
                    menuItems={["Male", "Female", "Prefer not to answer/Other"]}
                    onChange={functions.onChange.bind(this, 'gender')}
                    
                />
                <DatePicker
                    label="Birthdate"
                    className="md-cell"
                    id='birthdate'
                    onChange={functions.onChange.bind(this, 'birthdate')}
                />
            </DataForm>
        );
    }
}