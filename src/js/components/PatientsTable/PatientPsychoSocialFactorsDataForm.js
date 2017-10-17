import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import YesNoSelect from '../YesNoSelect';
import DataForm from '../DataForm';

export default class PatientPsychoSocialFactorsDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <DataForm tableName="PsychoSocialFactors" onSubmit={this.props.onSubmit}>
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
                    label="Meal Frequency"
                    type="number"
                    maxLength={2}
                    name='meal_frequency'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Shared Meal Frequency"
                    type="number"
                    maxLength={2}
                    name='shared_meal_frequency'
                    onChange={this.props.onChange}
                />
                <YesNoSelect
                    id="auto-select"
                    label="Do you have your own car?"
                    name='transportation_auto'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Public Transportation Frequency"
                    type="number"
                    maxLength={2}
                    name='public_transportation_frequency'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Transportation Difficulty"
                    type="number"
                    maxLength={2}
                    name='transportation_difficulty'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Hours At Home Per Day"
                    type="number"
                    maxLength={2}
                    name='hours_at_home_day'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Nights At Home Per Week"
                    type="number"
                    maxLength={2}
                    name='nights_home_week'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Productivity"
                    type="number"
                    maxLength={2}
                    name='productivity'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Nights Spent With Family Per Week"
                    type="number"
                    maxLength={2}
                    name='family_nights_week'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Favorite Activity 1"
                    maxLength={128}
                    name='favorite_activity_1'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Favorite Activity 2"
                    maxLength={128}
                    name='favorite_activity_2'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Favorite Activity 3"
                    maxLength={128}
                    name='favorite_activity_3'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Responsibility Family Vs Friends"
                    maxLength={64}
                    name='responsibility_family_friends'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Responsibility Work Vs Home"
                    maxLength={64}
                    name='responsibility_work_home'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Relationship With Doctor"
                    type="number"
                    maxLength={2}
                    name='relationship_doctor'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Trust With Doctor"
                    type="number"
                    maxLength={2}
                    name='trust_doctor'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Household Healthcare Expenses Per Month"
                    type="number"
                    name='household_monthly_expenses'
                    onChange={this.props.onChange}
                />
                <YesNoSelect
                    id="auto-select"
                    label="Do your expenses improve your health?"
                    name='expenses_improve_health'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Time To Clinic"
                    type="number"
                    maxLength={10}
                    name='time_to_clinic'
                    onChange={this.props.onChange}
                />
                <SelectField
                    id="clinic-unit-select"
                    label="Time To Clinic Unit"
                    className="md-cell"
                    defaultValue="Hours"
                    menuItems={['Seconds', 'Minutes', 'Hours', 'Days', 'Weeks', 'Months']}
                    name='time_to_clinic_unit'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Distance To Clinic"
                    type="number"
                    maxLength={10}
                    name='distance_to_clinic'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Distance To Clinic Units"
                    maxLength={32}
                    name='distance_to_clinic_units'
                    onChange={this.props.onChange}
                />
                <YesNoSelect
                    id="clinic-ease-select"
                    label="Is the clinic easy to use?"
                    name='clinic_ease_of_use'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Clinic Wait Time"
                    type="number"
                    maxLength={10}
                    name='clinic_wait_time'
                    onChange={this.props.onChange}
                />
                <SelectField
                    id="clinic-wait-unit-select"
                    label="Clinic Wait Time Unit"
                    className="md-cell"
                    defaultValue="Hours"
                    menuItems={['Seconds', 'Minutes', 'Hours', 'Days', 'Weeks', 'Months']}
                    name='clinic_wait_time_unit'
                    onChange={this.props.onChange}
                />
                <YesNoSelect
                    id="proximity-select"
                    label="Does your health care need to be proximitous?"
                    name='need_proximity'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Time To Pharmacy"
                    type="number"
                    maxLength={10}
                    name='time_to_pharmacy'
                    onChange={this.props.onChange}
                />
                <SelectField
                    id="clinic-wait-unit-select"
                    label="Time To Pharmact Unit"
                    className="md-cell"
                    defaultValue="Hours"
                    menuItems={['Seconds', 'Minutes', 'Hours', 'Days', 'Weeks', 'Months']}
                    name='time_to_pharmacy_unit'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Distance To Pharmacy"
                    type="number"
                    maxLength={10}
                    name='distance_to_pharmacy'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Distance To Clinic Units"
                    maxLength={32}
                    name='distance_to_pharmacy_units'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Pharmacy Wait Time"
                    type="number"
                    maxLength={10}
                    name='pharmacy_wait_time'
                    onChange={this.props.onChange}
                />
                <SelectField
                    id="clinic-wait-unit-select"
                    label="Pharmacy Wait Time Unit"
                    className="md-cell"
                    defaultValue="Hours"
                    menuItems={['Seconds', 'Minutes', 'Hours', 'Days', 'Weeks', 'Months']}
                    name='pharmacy_wait_time_unit'
                    onChange={this.props.onChange}
                />
            </DataForm>
        );
    }
}