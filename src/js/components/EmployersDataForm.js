import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import YesNoSelect from './YesNoSelect';

export default class EmployersDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert("Data submitted!");

        var obj = {}
        for (var param in this.state) {
            obj[param] = this.state[param];
        }
        obj.page = "Employers";
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://www.localhost:3000/save", true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify(obj));
    }

    handleChange = (name, value) => {
        this.setState({
            [name]: value
        });
        console.log(value);
    }

    render() {
        return (
            <form className="md-grid text-fields__application" onSubmit={this.handleSubmit.bind(this)}>
                <h1 className="md-cell md-cell--12">Employers Table Data Entry Form</h1>
                <br />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Employer Name"
                    maxLength={128}
                    required
                    onChange={this.handleChange.bind(this, 'employer_name')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Employer Description"
                    maxLength={512}
                    onChange={this.handleChange.bind(this, 'employer_description')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Employer Street Address"
                    maxLength={128}
                    onChange={this.handleChange.bind(this, 'employer_street_address')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Employer Street Address 2"
                    maxLength={128}
                    onChange={this.handleChange.bind(this, 'employer_street_address_2')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Employer City"
                    maxLength={128}
                    onChange={this.handleChange.bind(this, 'employer_city')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Employer State/Province"
                    maxLength={2}
                    onChange={this.handleChange.bind(this, 'employer_state_province')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Employer County"
                    maxLength={128}
                    onChange={this.handleChange.bind(this, 'employer_county')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Employer Country"
                    maxLength={3}
                    onChange={this.handleChange.bind(this, 'employer_country')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Employer Zip Code"
                    maxLength={16}
                    onChange={this.handleChange.bind(this, 'employer_zip')}
                />
                <Button flat
                    id=""
                    className="md-cell md-cell--12 md-cell--bottom md-cell--right"
                    onClick={this.handleSubmit.bind(this)} >
                    Submit
                </Button>
            </form>
        );
    }
}