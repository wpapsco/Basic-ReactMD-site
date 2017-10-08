import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import YesNoSelect from './YesNoSelect';

export default class PatientSocioEconomicFactorsDataForm extends React.Component {

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
        obj.page = "PatientSocioEconomicFactors";
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
                <h1 className="md-cell md-cell--12">Patient Socio-Economic Factors Table Data Entry Form</h1>
                <br />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Patient ID"
                    type="number"
                    required
                    onChange={this.handleChange.bind(this, 'patient_id')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Relationship Status"
                    maxLength={64}
                    onChange={this.handleChange.bind(this, 'relationship_status')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Relationship Status Other"
                    maxLength={128}
                    onChange={this.handleChange.bind(this, 'relationship_other')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Employment Status"
                    maxLength={64}
                    onChange={this.handleChange.bind(this, 'employment_status')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Job Description"
                    maxLength={512}
                    onChange={this.handleChange.bind(this, 'job_description')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Job Enjoyment"
                    maxLength={2}
                    type="number"
                    onChange={this.handleChange.bind(this, 'job_enjoyment')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Job Ease Of Time Off"
                    maxLength={2}
                    type="number"
                    onChange={this.handleChange.bind(this, 'job_ease_of_time_off')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Job Income Adequacy"
                    maxLength={2}
                    type="number"
                    onChange={this.handleChange.bind(this, 'job_income_adequacy')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Average Household Income"
                    type="number"
                    onChange={this.handleChange.bind(this, 'household_income')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Education Completed"
                    maxLength={64}
                    onChange={this.handleChange.bind(this, 'education_completed')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Grade Scored"
                    maxLength={1}
                    onChange={this.handleChange.bind(this, 'grade_score')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Homework Difficulty"
                    maxLength={2}
                    type="number"
                    onChange={this.handleChange.bind(this, 'homework_difficulty')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Test Difficulty"
                    maxLength={2}
                    type="number"
                    onChange={this.handleChange.bind(this, 'test_difficulty')}
                />
                <SelectField
                    id="religion-select"
                    label="Are you religious?"
                    className="md-cell"
                    menuItems={['Yes', 'No']}
                    onChange={this.handleChange.bind(this, 'is_religious')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Religion Title"
                    maxLength={128}
                    onChange={this.handleChange.bind(this, 'religion')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Religious Services Attended Per Month"
                    type="number"
                    onChange={this.handleChange.bind(this, 'services_per_month')}
                />
                <YesNoSelect
                    id="religion-select"
                    label="Are you spiritual?"
                    onChange={this.handleChange.bind(this, 'is_spiritual')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="How often are you spiritual?"
                    type="number"
                    onChange={this.handleChange.bind(this, 'spiritual_per_month')}
                />
                <YesNoSelect
                    id="religion-select"
                    label="Do you have physical difficulties?"
                    onChange={this.handleChange.bind(this, 'physical_difficulty')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Physical Difficulty Description"
                    maxLength={256}
                    onChange={this.handleChange.bind(this, 'physical_difficulty_description')}
                />
                <YesNoSelect
                    id="religion-select"
                    label="Do you exercise?"
                    onChange={this.handleChange.bind(this, 'does_exercise')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Favorite Exercise"
                    maxLength={128}
                    onChange={this.handleChange.bind(this, 'favorite_exercise')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Excercise Days Per Week"
                    maxLength={2}
                    type="number"
                    onChange={this.handleChange.bind(this, 'exercise_days_per_week')}
                />
                <SelectField
                    id="religion-select"
                    label="Did you do sports as a kid?"
                    className="md-cell"
                    menuItems={['Yes', 'No']}
                    onChange={this.handleChange.bind(this, 'kid_does_exercise')}
                />
                <YesNoSelect
                    id="religion-select"
                    label="Did you do sports as a teenager?"
                    onChange={this.handleChange.bind(this, 'teenager_does_exercise')}
                />
                <YesNoSelect
                    id="religion-select"
                    label="Do you do sports as a adult?"
                    onChange={this.handleChange.bind(this, 'adult_does_exercise')}
                />
                <YesNoSelect
                    id="religion-select"
                    label="Do you smoke?"
                    onChange={this.handleChange.bind(this, 'is_smoker')}
                />
                <YesNoSelect
                    id="religion-select"
                    label="Did you ever smoke?"
                    onChange={this.handleChange.bind(this, 'was_smoker')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Smoking Frequency"
                    maxLength={128}
                    onChange={this.handleChange.bind(this, 'smoking_frequency')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="How long ago did you smoke?"
                    maxLength={128}
                    onChange={this.handleChange.bind(this, 'smoking_how_long_ago')}
                />
                <YesNoSelect
                    id="religion-select"
                    label="Do you drink alcohol?"
                    onChange={this.handleChange.bind(this, 'is_drinker')}
                />
                <YesNoSelect
                    id="religion-select"
                    label="Did you ever drink alcohol?"
                    onChange={this.handleChange.bind(this, 'was_drinker')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Drinking Frequency"
                    maxLength={128}
                    onChange={this.handleChange.bind(this, 'drinking_frequency')}
                />
                <YesNoSelect
                    id="religion-select"
                    label="Do you use drugs?"
                    onChange={this.handleChange.bind(this, 'is_drugger')}
                />
                <YesNoSelect
                    id="religion-select"
                    label="Have you ever used drugs?"
                    onChange={this.handleChange.bind(this, 'was_drugger')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Drug use Frequency"
                    maxLength={128}
                    onChange={this.handleChange.bind(this, 'drug_frequency')}
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