import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import TimePicker from 'react-md/lib/Pickers/TimePickerContainer';
import YesNoSelect from '../YesNoSelect';
import DataForm from '../DataForm';
import { FontIcon, SVGIcon, SelectionControl } from 'react-md';
var functions = require('../../DataFormFunctions').default;

export default class AddressesDataForm extends React.Component {

    constructor(props) {
        super(props);
        if (this.props.onChange) {
            functions.onChange = this.props.onChange;
        }
        if(this.props.onSubmit) {
            functions.onSubmit = this.props.onSubmit;
        }
        this.state = {
            'tableName': 'Addresses',
            states: [
                'Gotta',
                'Hook',
                'Into',
                'State',
                'Api',
                'Still'
            ],
            county_disabled: true,
            counties: {
                'Gotta': ['a', 'b', 'c'],
                'Hook': ['d', 'e', 'f'],
                'Into': ['e', 't', 'c'],
                'State': ['e', 't', 'c'],
                'Api': ['e', 't', 'c'],
                'Still': ['e', 't', 'c']
            },
            use_counties: [],
            countries: [
                'United States of America',
                'Elsewhere'
            ],
            index: this.props.index
        }
    }

    onChange = (name, value) => {
        if (name == 'state') {
            if (value.length > 0) {
                this.setState({
                    county_disabled: false,
                    use_counties: this.state.counties[value]
                });
            } else {
                this.setState({
                    county_disabled: true
                });
            }
        }
        functions.onChange.bind(this, name, value).call();
    }

    render() {
        return (
            <DataForm tableName={this.state.tableName} onSubmit={functions.onSubmit.bind(this)} {...this.props}>
                <SelectField
                    menuItems={['Home', 'Work', 'Other']}
                    defaultValue="Home"
                    className='md-cell md-cell--2 md-cell--middle'
                    onChange={functions.onChange.bind(this, "address_type_select")}
                />
                <TextField
                    label="Street Address Line 1"
                    maxLength={128}
                    className='md-cell md-cell--10'
                    onChange={functions.onChange.bind(this, "address_line_1")}
                />
                <TextField
                    label="Street Address Line 2"
                    maxLength={128}
                    className='md-cell md-cell--2-desktop-offset md-cell--10'
                    onChange={functions.onChange.bind(this, "address_line_2")}
                />
                <TextField
                    label="City"
                    maxLength={64}
                    className='md-cell md-cell--2-desktop-offset md-cell--5'
                    onChange={functions.onChange.bind(this, "city")}
                />
                <SelectField
                    label="State"
                    maxLength={64}
                    className='md-cell md-cell--2'
                    menuItems={this.state.states}
                    onChange={this.onChange.bind(this, "state")}
                />
                <TextField
                    label="ZIP code"
                    className='md-cell md-cell--3'
                    onChange={functions.onChange.bind(this, "zip_code")}
                    required
                />
                <SelectField
                    label="Country"
                    className='md-cell md-cell--2-desktop-offset md-cell--10'
                    menuItems={this.state.countries}
                    onChange={functions.onChange.bind(this, "country")}
                />
                <h6 className="md-cell md-cell--2-desktop-offset md-cell--10">Location Information</h6>
                <SelectField
                    label="County"
                    className='md-cell md-cell--2-desktop-offset md-cell--10'
                    menuItems={this.state.use_counties}
                    onChange={this.onChange.bind(this, "county")}
                    helpText={this.state.county_disabled ? 'Select a state' : ''}
                    disabled={this.state.county_disabled}
                />
                <SelectionControl
                    id="switch-primary-address"
                    className='md-cell md-cell--12 md-cell--2-desktop-offset'
                    type="switch"
                    label="Primary address"
                    onChange={functions.onChange.bind(this, "primary_address")}
                    defaultChecked
                />
                {this.props.noAddButton ?
                    null :
                    <div className="md-cell">
                        <Button
                            style={{ display: "inline-block" }}
                            floating mini secondary
                            onClick={this.props.onAddClicked}>
                            add circle
                        </Button>
                        <p style={{ display: "inline-block", margin: "10px" }}>Add address</p>
                    </div>}
                <h6 className="md-cell md-cell--12">* Required Fields</h6>
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
                    label="Address Type ID"
                    onChange={functions.onChange.bind(this, "address_type_id")}
                    type="number"
                    required

                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Street Address"
                    onChange={functions.onChange.bind(this, "street_address")}
                    maxLength={128}

                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Street Address 2"
                    onChange={functions.onChange.bind(this, "street_address 2")}
                    maxLength={128}

                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="City"
                    onChange={functions.onChange.bind(this, "city")}
                    maxLength={64}

                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="State/Province"
                    onChange={functions.onChange.bind(this, "state_province")}
                    maxLength={64}

                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="County"
                    onChange={functions.onChange.bind(this, "county")}
                    maxLength={3}

                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Country"
                    onChange={functions.onChange.bind(this, "country")}
                    maxLength={2}

                />
                <YesNoSelect
                    id="contact-select"
                    label="Primary Contact Address"
                    onChange={functions.onChange.bind(this, "primary_contact_address")}

                /> */}
            </DataForm>
        );
    }
}