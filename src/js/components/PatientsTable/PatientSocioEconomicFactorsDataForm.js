import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import YesNoSelect from '../YesNoSelect';
import DataForm from '../DataForm';
var functions = require('../../DataFormFunctions').default;

export default class PatientSocioEconomicFactorsDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'tableName': 'PatientSocioEconomicFactors'
        }
    }

    render() {
        return (
            <DataForm tableName={this.state.tableName} onSubmit={functions.onSubmit.bind(this)}>
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Patient ID"
                    type="number"
                    required
                    onChange={functions.onChange.bind(this, 'patient_id')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Relationship Status"
                    maxLength={64}
                    onChange={functions.onChange.bind(this, 'relationship_status')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Relationship Status Other"
                    maxLength={128}
                    onChange={functions.onChange.bind(this, 'relationship_other')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Employment Status"
                    maxLength={64}
                    onChange={functions.onChange.bind(this, 'employment_status')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Job Description"
                    maxLength={512}
                    onChange={functions.onChange.bind(this, 'job_description')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Job Enjoyment"
                    maxLength={2}
                    type="number"
                    onChange={functions.onChange.bind(this, 'job_enjoyment')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Job Ease Of Time Off"
                    maxLength={2}
                    type="number"
                    onChange={functions.onChange.bind(this, 'job_ease_of_time_off')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Job Income Adequacy"
                    maxLength={2}
                    type="number"
                    onChange={functions.onChange.bind(this, 'job_income_adequacy')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Average Household Income"
                    type="number"
                    onChange={functions.onChange.bind(this, 'household_income')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Education Completed"
                    maxLength={64}
                    onChange={functions.onChange.bind(this, 'education_completed')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Grade Scored"
                    maxLength={1}
                    onChange={functions.onChange.bind(this, 'grade_score')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Homework Difficulty"
                    maxLength={2}
                    type="number"
                    onChange={functions.onChange.bind(this, 'homework_difficulty')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Test Difficulty"
                    maxLength={2}
                    type="number"
                    onChange={functions.onChange.bind(this, 'test_difficulty')}
                    
                />
                <YesNoSelect
                    id="religion-select"
                    label="Are you religious?"
                    onChange={functions.onChange.bind(this, 'is_religious')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Religion Title"
                    maxLength={128}
                    onChange={functions.onChange.bind(this, 'religion')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Religious Services Attended Per Month"
                    type="number"
                    onChange={functions.onChange.bind(this, 'services_per_month')}
                    
                />
                <YesNoSelect
                    id="spiritual-select"
                    label="Are you spiritual?"
                    onChange={functions.onChange.bind(this, 'is_spiritual')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="How often are you spiritual?"
                    type="number"
                    onChange={functions.onChange.bind(this, 'spiritual_per_month')}
                    
                />
                <YesNoSelect
                    id="difficulties-select"
                    label="Do you have physical difficulties?"
                    onChange={functions.onChange.bind(this, 'physical_difficulty')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Physical Difficulty Description"
                    maxLength={256}
                    onChange={functions.onChange.bind(this, 'physical_difficulty_description')}
                    
                />
                <YesNoSelect
                    id="exercise-select"
                    label="Do you exercise?"
                    onChange={functions.onChange.bind(this, 'does_exercise')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Favorite Exercise"
                    maxLength={128}
                    onChange={functions.onChange.bind(this, 'favorite_exercise')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Excercise Days Per Week"
                    maxLength={2}
                    type="number"
                    onChange={functions.onChange.bind(this, 'exercise_days_per_week')}
                    
                />
                <YesNoSelect
                    id="sports-select"
                    label="Did you do sports as a kid?"
                    className="md-cell"
                    onChange={functions.onChange.bind(this, 'kid_does_exercise')}
                    
                />
                <YesNoSelect
                    id="teenage-sports-select"
                    label="Did you do sports as a teenager?"
                    onChange={functions.onChange.bind(this, 'teenager_does_exercise')}
                    
                />
                <YesNoSelect
                    id="adult-sports-select"
                    label="Do you do sports as a adult?"
                    onChange={functions.onChange.bind(this, 'adult_does_exercise')}
                    
                />
                <YesNoSelect
                    id="smoke-select"
                    label="Do you smoke?"
                    onChange={functions.onChange.bind(this, 'is_smoker')}
                    
                />
                <YesNoSelect
                    id="past-smoke-select"
                    label="Did you ever smoke?"
                    onChange={functions.onChange.bind(this, 'was_smoker')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Smoking Frequency"
                    maxLength={128}
                    onChange={functions.onChange.bind(this, 'smoking_frequency')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="How long ago did you smoke?"
                    maxLength={128}
                    onChange={functions.onChange.bind(this, 'smoking_how_long_ago')}
                    
                />
                <YesNoSelect
                    id="alcohol-select"
                    label="Do you drink alcohol?"
                    onChange={functions.onChange.bind(this, 'is_drinker')}
                    
                />
                <YesNoSelect
                    id="past-alcohol-select"
                    label="Did you ever drink alcohol?"
                    onChange={functions.onChange.bind(this, 'was_drinker')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Drinking Frequency"
                    maxLength={128}
                    onChange={functions.onChange.bind(this, 'drinking_frequency')}
                    
                />
                <YesNoSelect
                    id="drugs-select"
                    label="Do you use drugs?"
                    onChange={functions.onChange.bind(this, 'is_drugger')}
                    
                />
                <YesNoSelect
                    id="past-drugs-select"
                    label="Have you ever used drugs?"
                    onChange={functions.onChange.bind(this, 'was_drugger')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Drug use Frequency"
                    maxLength={128}
                    onChange={functions.onChange.bind(this, 'drug_frequency')}
                    
                />
            </DataForm>
        );
    }
}