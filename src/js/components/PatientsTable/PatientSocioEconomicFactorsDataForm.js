import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import YesNoSelect from '../YesNoSelect';
import DataForm from '../DataForm';

export default class PatientSocioEconomicFactorsDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <DataForm tableName="SocioEconomicFactors" onSubmit={this.props.onSubmit}>
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Patient ID"
                    type="number"
                    required
                    name='patient_id'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Relationship Status"
                    maxLength={64}
                    name='relationship_status'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Relationship Status Other"
                    maxLength={128}
                    name='relationship_other'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Employment Status"
                    maxLength={64}
                    name='employment_status'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Job Description"
                    maxLength={512}
                    name='job_description'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Job Enjoyment"
                    maxLength={2}
                    type="number"
                    name='job_enjoyment'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Job Ease Of Time Off"
                    maxLength={2}
                    type="number"
                    name='job_ease_of_time_off'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Job Income Adequacy"
                    maxLength={2}
                    type="number"
                    name='job_income_adequacy'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Average Household Income"
                    type="number"
                    name='household_income'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Education Completed"
                    maxLength={64}
                    name='education_completed'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Grade Scored"
                    maxLength={1}
                    name='grade_score'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Homework Difficulty"
                    maxLength={2}
                    type="number"
                    name='homework_difficulty'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Test Difficulty"
                    maxLength={2}
                    type="number"
                    name='test_difficulty'
                    onChange={this.props.onChange}
                />
                <YesNoSelect
                    id="religion-select"
                    label="Are you religious?"
                    name='is_religious'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Religion Title"
                    maxLength={128}
                    name='religion'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Religious Services Attended Per Month"
                    type="number"
                    name='services_per_month'
                    onChange={this.props.onChange}
                />
                <YesNoSelect
                    id="religion-select"
                    label="Are you spiritual?"
                    name='is_spiritual'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="How often are you spiritual?"
                    type="number"
                    name='spiritual_per_month'
                    onChange={this.props.onChange}
                />
                <YesNoSelect
                    id="religion-select"
                    label="Do you have physical difficulties?"
                    name='physical_difficulty'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Physical Difficulty Description"
                    maxLength={256}
                    name='physical_difficulty_description'
                    onChange={this.props.onChange}
                />
                <YesNoSelect
                    id="religion-select"
                    label="Do you exercise?"
                    name='does_exercise'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Favorite Exercise"
                    maxLength={128}
                    name='favorite_exercise'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Excercise Days Per Week"
                    maxLength={2}
                    type="number"
                    name='exercise_days_per_week'
                    onChange={this.props.onChange}
                />
                <YesNoSelect
                    id="religion-select"
                    label="Did you do sports as a kid?"
                    className="md-cell"
                    name='kid_does_exercise'
                    onChange={this.props.onChange}
                />
                <YesNoSelect
                    id="religion-select"
                    label="Are you spiritual?"
                    name='is_spiritual'
                    onChange={this.props.onChange}
                />
                <YesNoSelect
                    id="religion-select"
                    label="Did you do sports as a teenager?"
                    name='teenager_does_exercise'
                    onChange={this.props.onChange}
                />
                <YesNoSelect
                    id="religion-select"
                    label="Do you do sports as a adult?"
                    name='adult_does_exercise'
                    onChange={this.props.onChange}
                />
                <YesNoSelect
                    id="religion-select"
                    label="Do you smoke?"
                    name='is_smoker'
                    onChange={this.props.onChange}
                />
                <YesNoSelect
                    id="religion-select"
                    label="Did you ever smoke?"
                    name='was_smoker'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Smoking Frequency"
                    maxLength={128}
                    name='smoking_frequency'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="How long ago did you smoke?"
                    maxLength={128}
                    name='smoking_how_long_ago'
                    onChange={this.props.onChange}
                />
                <YesNoSelect
                    id="religion-select"
                    label="Do you drink alcohol?"
                    name='is_drinker'
                    onChange={this.props.onChange}
                />
                <YesNoSelect
                    id="religion-select"
                    label="Did you ever drink alcohol?"
                    name='was_drinker'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Drinking Frequency"
                    maxLength={128}
                    name='drinking_frequency'
                    onChange={this.props.onChange}
                />
                <YesNoSelect
                    id="religion-select"
                    label="Do you use drugs?"
                    name='is_drugger'
                    onChange={this.props.onChange}
                />
                <YesNoSelect
                    id="religion-select"
                    label="Have you ever used drugs?"
                    name='was_drugger'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Drug use Frequency"
                    maxLength={128}
                    name='drug_frequency'
                    onChange={this.props.onChange}
                />
            </DataForm>
        );
    }
}