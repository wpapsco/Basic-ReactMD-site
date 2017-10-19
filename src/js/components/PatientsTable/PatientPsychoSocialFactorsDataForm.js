import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import YesNoSelect from '../YesNoSelect';
import DataForm from '../DataForm';
var functions = require('../../DataFormFunctions').default;

export default class PatientPsychoSocialFactorsDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'tableName': 'PatientPsychoSocialFactors'
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
                    label="Meal Frequency"
                    type="number"
                    maxLength={2}
                    onChange={functions.onChange.bind(this, 'meal_frequency')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Shared Meal Frequency"
                    type="number"
                    maxLength={2}
                    onChange={functions.onChange.bind(this, 'shared_meal_frequency')}
                    
                />
                <YesNoSelect
                    id="auto-select"
                    label="Do you have your own car?"
                    onChange={functions.onChange.bind(this, 'transportation_auto')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Public Transportation Frequency"
                    type="number"
                    maxLength={2}
                    onChange={functions.onChange.bind(this, 'public_transportation_frequency')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Transportation Difficulty"
                    type="number"
                    maxLength={2}
                    onChange={functions.onChange.bind(this, 'transportation_difficulty')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Hours At Home Per Day"
                    type="number"
                    maxLength={2}
                    onChange={functions.onChange.bind(this, 'hours_at_home_day')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Nights At Home Per Week"
                    type="number"
                    maxLength={2}
                    onChange={functions.onChange.bind(this, 'nights_home_week')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Productivity"
                    type="number"
                    maxLength={2}
                    onChange={functions.onChange.bind(this, 'productivity')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Nights Spent With Family Per Week"
                    type="number"
                    maxLength={2}
                    onChange={functions.onChange.bind(this, 'family_nights_week')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Favorite Activity 1"
                    maxLength={128}
                    onChange={functions.onChange.bind(this, 'favorite_activity_1')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Favorite Activity 2"
                    maxLength={128}
                    onChange={functions.onChange.bind(this, 'favorite_activity_2')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Favorite Activity 3"
                    maxLength={128}
                    onChange={functions.onChange.bind(this, 'favorite_activity_3')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Responsibility Family Vs Friends"
                    maxLength={64}
                    onChange={functions.onChange.bind(this, 'responsibility_family_friends')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Responsibility Work Vs Home"
                    maxLength={64}
                    onChange={functions.onChange.bind(this, 'responsibility_work_home')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Relationship With Doctor"
                    type="number"
                    maxLength={2}
                    onChange={functions.onChange.bind(this, 'relationship_doctor')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Trust With Doctor"
                    type="number"
                    maxLength={2}
                    onChange={functions.onChange.bind(this, 'trust_doctor')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Household Healthcare Expenses Per Month"
                    type="number"
                    onChange={functions.onChange.bind(this, 'household_monthly_expenses')}
                    
                />
                <YesNoSelect
                    id="auto-select"
                    label="Do your expenses improve your health?"
                    onChange={functions.onChange.bind(this, 'expenses_improve_health')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Time To Clinic"
                    type="number"
                    maxLength={10}
                    onChange={functions.onChange.bind(this, 'time_to_clinic')}
                    
                />
                <SelectField
                    id="clinic-unit-select"
                    label="Time To Clinic Unit"
                    className="md-cell"
                    defaultValue="Hours"
                    menuItems={['Seconds', 'Minutes', 'Hours', 'Days', 'Weeks', 'Months']}
                    onChange={functions.onChange.bind(this, 'time_to_clinic_unit')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Distance To Clinic"
                    type="number"
                    maxLength={10}
                    onChange={functions.onChange.bind(this, 'distance_to_clinic')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Distance To Clinic Units"
                    maxLength={32}
                    onChange={functions.onChange.bind(this, 'distance_to_clinic_units')}
                    
                />
                <YesNoSelect
                    id="clinic-ease-select"
                    label="Is the clinic easy to use?"
                    onChange={functions.onChange.bind(this, 'clinic_ease_of_use')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Clinic Wait Time"
                    type="number"
                    maxLength={10}
                    onChange={functions.onChange.bind(this, 'clinic_wait_time')}
                    
                />
                <SelectField
                    id="clinic-wait-unit-select"
                    label="Clinic Wait Time Unit"
                    className="md-cell"
                    defaultValue="Hours"
                    menuItems={['Seconds', 'Minutes', 'Hours', 'Days', 'Weeks', 'Months']}
                    onChange={functions.onChange.bind(this, 'clinic_wait_time_unit')}
                    
                />
                <YesNoSelect
                    id="proximity-select"
                    label="Does your health care need to be proximitous?"
                    onChange={functions.onChange.bind(this, 'need_proximity')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Time To Pharmacy"
                    type="number"
                    maxLength={10}
                    onChange={functions.onChange.bind(this, 'time_to_pharmacy')}
                    
                />
                <SelectField
                    id="clinic-wait-unit-select"
                    label="Time To Pharmact Unit"
                    className="md-cell"
                    defaultValue="Hours"
                    menuItems={['Seconds', 'Minutes', 'Hours', 'Days', 'Weeks', 'Months']}
                    onChange={functions.onChange.bind(this, 'time_to_pharmacy_unit')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Distance To Pharmacy"
                    type="number"
                    maxLength={10}
                    onChange={functions.onChange.bind(this, 'distance_to_pharmacy')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Distance To Clinic Units"
                    maxLength={32}
                    onChange={functions.onChange.bind(this, 'distance_to_pharmacy_units')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Pharmacy Wait Time"
                    type="number"
                    maxLength={10}
                    onChange={functions.onChange.bind(this, 'pharmacy_wait_time')}
                    
                />
                <SelectField
                    id="clinic-wait-unit-select"
                    label="Pharmacy Wait Time Unit"
                    className="md-cell"
                    defaultValue="Hours"
                    menuItems={['Seconds', 'Minutes', 'Hours', 'Days', 'Weeks', 'Months']}
                    onChange={functions.onChange.bind(this, 'pharmacy_wait_time_unit')}
                    
                />
            </DataForm>
        );
    }
}