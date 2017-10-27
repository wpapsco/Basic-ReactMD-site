import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import TimePicker from 'react-md/lib/Pickers/TimePickerContainer';
import YesNoSelect from '../YesNoSelect';
import DataForm from '../DataForm';
var functions = require('../../DataFormFunctions').default;

export default class PhonesDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'tableName': 'Phones',
            isMobile: true,
            phone_display: '',
            phone_number: 0
        }
    }

    onChange(name, value) {
        if (name == 'phones_type_select') {
            this.setState({
                isMobile: value == 'Mobile'
            })
        }
        if (name != 'phone_number') {
            this.props.onChange(name, value, this.props.index);
        } else {
            var phone_number = value.replace(/[^0-9.]/g, "");
            if (phone_number.length > 10) {
                phone_number = phone_number.slice(0, 10);
            }
            var phone_display = '('+ phone_number.slice(0, 3) +') '+phone_number.slice(3, 6)+'-'+phone_number.slice(6);
            this.setState({
                phone_number,
                phone_display
            });
            this.props.onChange(name, phone_number, this.props.index);
        }
    }

    render() {
        //md-cell md-cell--2-desktop-offset md-cell--2
        var phoneInfo = [
            (<h4 className="md-cell md-cell--2-desktop-offset md-cell--10">Mobile Phone</h4>),
            (<TextField 
                label="Manufacturer" 
                onChange={this.onChange.bind(this, "mobile_manufacturer")} 
                className="md-cell md-cell--2-desktop-offset md-cell--10" />),
            (<TextField 
                label="Model" 
                onChange={this.onChange.bind(this, "mobile_model")} 
                className="md-cell md-cell--2-desktop-offset md-cell--10" />),
            (<h4 className="md-cell md-cell--2-desktop-offset md-cell--10">Carrier</h4>),
            (<TextField 
                label="Carrier" 
                onChange={this.onChange.bind(this, "mobile_carrier")} 
                className="md-cell md-cell--2-desktop-offset md-cell--10" />),
            (<TextField 
                label="Carrier Type" 
                onChange={this.onChange.bind(this, "mobile_carrier_type")} 
                className="md-cell md-cell--2-desktop-offset md-cell--10" />),
        ];

        return (
            <DataForm
                {...this.props}
                tableName={this.state.tableName}
                onSubmit={functions.onSubmit.bind(this)}>
                <SelectField
                    id="phones_type_select"
                    menuItems={['Mobile', 'Home', 'Work', 'Main', 'Home Fax', 'Work Fax', 'Pager', 'Other']}
                    defaultValue="Mobile"
                    className='md-cell md-cell--2 md-cell--bottom'
                    onChange={this.onChange.bind(this, "phones_type_select")}
                />
                <TextField
                    id="phone_number"
                    className="md-cell md-cell--10"
                    label="Phone Number"
                    value={this.state.phone_display}
                    onChange={this.onChange.bind(this, "phone_number")}
                />
                {this.state.isMobile ? phoneInfo : null}
                {this.props.noAddButton ?
                    null :
                    <div className="md-cell">
                        <Button
                            style={{ display: "inline-block" }}
                            floating mini secondary
                            onClick={this.props.onAddClicked}>
                            add circle
                        </Button>
                        <p style={{ display: "inline-block", margin: "10px" }}>Add phone</p>
                    </div>}
                {this.props.noButton ? null : <h6 className="md-cell md-cell--12">* Required Fields</h6>}
                {/* <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Person ID"
                    onChange={functions.onChange.bind(this, "person_id")}
                    type="number"
                    required
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Phone"
                    onChange={functions.onChange.bind(this, "phone_number")}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Phone Type ID"
                    onChange={functions.onChange.bind(this, "phone_type_id")}
                    type="number"
                    required
                    
                />
                <YesNoSelect
                    id="contact-select"
                    label="Primary Contact Phone"
                    onChange={functions.onChange.bind(this, "primary_contact_phone")}
                    
                /> */}
            </DataForm>
        );
    }
}