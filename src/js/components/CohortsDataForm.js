import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import YesNoSelect from './YesNoSelect';
import DataForm from './DataForm';

export default class CohortsDataForm extends React.Component {

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
        obj.page = "Cohorts";
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
            <DataForm tableName="Cohorts">
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Cohort Description"
                    name="cohort_description"
                    maxLength={512}
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Cohort Clinic"
                    maxLength={128}
                    onChange={this.handleChange.bind(this, 'cohort_clinic')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Cohort Payer"
                    maxLength={128}
                    onChange={this.handleChange.bind(this, 'cohort_payer')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Cohort Provider"
                    maxLength={128}
                    onChange={this.handleChange.bind(this, 'cohort_provider')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Cohort Case Manager"
                    maxLength={128}
                    onChange={this.handleChange.bind(this, 'cohort_case_manager')}
                />
            </DataForm>
        );
    }
}