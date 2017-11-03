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
            is_mobile: true,
            phone_display: '',
            phone_number: 0,
            mobile_carrier_name: '',
            mobile_carrier_type: ''
        }
    }

    onChange(name, value) {
        if (name == 'phones_type_select') {
            this.setState({
                is_mobile: value == 'Mobile' || (value == 4 || value == 5 || value == 6)
            })
        }
        if (name != 'phone_number') {
            this.props.onChange(name, value, this.props.index);
            this.setState({
                [name]: value
            });
        } else {
            var phone_number = value.replace(/[^0-9.]/g, "");
            if (phone_number.length >= 10) {
                phone_number = phone_number.slice(0, 10);
                if (this.state.phone_number.length < 10) {
                    this.getPhoneInfo(phone_number);
                }
            }
            var phone_display = '';
            if (phone_number.length > 6) {
                phone_display = '(' + phone_number.slice(0, 3) + ') ' + phone_number.slice(3, 6) + '-' + phone_number.slice(6);
            } else if (phone_number.length > 3) {
                phone_display = '(' + phone_number.slice(0, 3) + ') ' + phone_number.slice(3);
            } else {
                phone_display = '(' + phone_number.slice(0);
            }
            this.setState({
                phone_number,
                phone_display
            });
            this.props.onChange(name, phone_number, this.props.index);
        }
    }

    getPhoneInfo(number) {
        fetch('https://lookups.twilio.com/v1/PhoneNumbers/' + number + '?Type=carrier', {
            method: "get",
            headers: {
                'Authorization': "Basic QUNmMWU3ZDliNGNiMjkyNTY5MzUzNjllZjg3YmMwZDRiYTo0Y2MyMjJjYzFmNzMxNzMxYjBlMDE0ZjY1ZWZhNmZlZA==",
                'content-type': 'application/x-www-form-urlencoded'
            }
        }).then((response) => {
            return response.json()
        }).then((data) => {
            console.log(data);
            if (data.status == 404) {
                Promise.reject(new Error('Twilio has no such number'));
            }
            this.setState({
                mobile_carrier_name: data.carrier.name,
                mobile_carrier_type: data.carrier.type
            });
            this.props.onChange('mobile_carrier_name', data.carrier.name, this.props.index);
            this.props.onChange('mobile_carrier_type', data.carrier.type, this.props.index);

        }).catch((err) => {
            console.log('Fetch Error :-S', err);
        });
    }

    render() {
        var phoneInfo = [
            (<h3 className="md-cell md-cell--2-desktop-offset md-cell--10">Mobile Phone</h3>),
            (<TextField
                label="Manufacturer"
                id="mobile_manufacturer"
                onChange={this.onChange.bind(this, "mobile_manufacturer")}
                className="md-cell md-cell--2-desktop-offset md-cell--10" />),
            (<TextField
                label="Model"
                id="mobile_model"
                onChange={this.onChange.bind(this, "mobile_model")}
                className="md-cell md-cell--2-desktop-offset md-cell--10" />),
            (<h3 className="md-cell md-cell--2-desktop-offset md-cell--10">Carrier</h3>),
            (<TextField
                label="Carrier"
                id="mobile_carrier_name"
                onChange={this.onChange.bind(this, "mobile_carrier_name")}
                value={this.state.mobile_carrier_name}
                className="md-cell md-cell--2-desktop-offset md-cell--10" />),
            (<TextField
                label="Carrier Type"
                id="mobile_carrier_type"
                onChange={this.onChange.bind(this, "mobile_carrier_type")}
                value={this.state.mobile_carrier_type}
                className="md-cell md-cell--2-desktop-offset md-cell--10" />),
        ];

        if (!this.props.noTitle) {
            phoneInfo[0] = (<h3 className="md-cell md-cell--10 md-cell--bottom">Mobile Phone</h3>)
        }

        return (
            <DataForm
                {...this.props}
                tableName={this.state.tableName}
                onSubmit={functions.onSubmit.bind(this)}>
                <SelectField
                    id="phones_type_select"
                    menuItems={this.props.phone_types ? this.props.phone_types : [{label:'Mobile', value:4}, {label:'Residence', value:1}, {label:'Office', value:7}]}
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
                {this.props.noTitle ? null : (
                    <TextField
                        id="person_id"
                        className="md-cell md-cell--2"
                        label="Person ID"
                        type="number"
                        onChange={this.onChange.bind(this, "person_id")}
                    />
                )}
                {this.state.is_mobile ? phoneInfo : null}
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