import React from "react";
import YesNoSelect from '../YesNoSelect';
import DataForm from '../DataForm';
import { FontIcon, SVGIcon, SelectionControl, Button, DatePicker, SelectField, TimePicker, TextField, Autocomplete } from 'react-md';
var functions = require('../../DataFormFunctions').default;

export default class AddressesDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'tableName': 'Addresses',
            states: [
                'Gotta',
                'Hook',
                'Into',
                'State',
                'Api',
                'OR'
            ],
            county_disabled: true,
            counties: {
                'Gotta': ['a', 'b', 'c'],
                'Hook': ['d', 'e', 'f'],
                'Into': ['e', 't', 'c'],
                'State': ['e', 't', 'c'],
                'Api': ['e', 't', 'c'],
                'OR': ['Multnomah', 'Washington', 'etc.']
            },
            use_counties: [],
            countries: [
                'United States of America',
                'Elsewhere'
            ],
            index: this.props.index,
            zip_icon: (<FontIcon />),
            suggested_zip: '',
            valid_zip: true,
            address_line_2: '',
        }
        console.log(this.props.index);
        this.onChange('address_type_select', 2);
        this.onChange('country', 'US');
    }

    validateZip = (value, callback) => {
        var xml = `<ZipCodeLookupRequest USERID="298CURAD1630">` +
            `<Address ID="1">` +
            `<Address1>` + this.state.address_line_2.replace(/#/g, '') + `</Address1>` +
            `<Address2>` + this.state.address_line_1 + `</Address2>` +
            `<City>` + this.state.city + `</City>` +
            `<State>` + this.state.state + `</State>` +
            `</Address>` +
            `</ZipCodeLookupRequest>`;
        var url = 'http://production.shippingapis.com/ShippingAPI.dll?API=ZipCodeLookup&XML=' + xml;
        var that = this;
        fetch(url)
            .then((data) => data.text())
            .then((data) => (new window.DOMParser()).parseFromString(data, "text/xml"))
            .then((data) => {
                var zip1 = data.getElementsByTagName('Zip5')[0].textContent;
                var zip2 = data.getElementsByTagName('Zip4')[0].textContent;
                var fullzip = zip1 + '-' + zip2;
                that.setState({
                    suggested_zip: fullzip
                });
                console.log(fullzip);
                callback(zip1 == this.state.zip_code || this.state.zip_code == fullzip);
            })
            .catch((error) => {
                callback(false);
            });
        callback(false);
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
        this.setState({
            [name]: value
        });
        if (this.state.address_line_1 &&
            this.state.city &&
            this.state.state &&
            this.state.zip_code &&
            (this.state.zip_code.length >= 5 || (name == 'zip_code' && value.length >= 5))) {
            //validate
            var that = this;
            this.validateZip(name == 'zip_code' ? value : this.state.zip_code, function (isValid) {
                if (isValid && (name == 'zip_code' ? value : that.state.zip_code) == that.state.zip_code) {
                    that.setState({
                        zip_icon: (<FontIcon>check_circle</FontIcon>),
                        valid_zip: true
                    });
                } else {
                    that.setState({
                        zip_icon: (<FontIcon>cancel</FontIcon>),
                        valid_zip: false
                    });
                }
            });
        } else {
            this.setState({
                zip_icon: (<FontIcon />)
            });
        }
        this.props.onChange(name, value, this.props.index);
    }

    render() {
        //var zipIcon = this.state.zip_valid ? (<FontIcon>check_circle</FontIcon>) : (<FontIcon>cancel</FontIcon>);
        return (
            <DataForm
                tableName={this.state.tableName}
                onSubmit={this.props.onSubmit ? this.props.onSubmit.bind(this) : functions.onSubmit.bind(this)}
                {...this.props}>
                <SelectField
                    id="address_type_select"
                    menuItems={this.props.address_types}
                    defaultValue={this.props.address_types[0].value}
                    className='md-cell md-cell--2 md-cell--middle'
                    onChange={this.onChange.bind(this, "address_type_select")}
                />
                <TextField
                    id="street_address_line_1"
                    label="Street Address Line 1"
                    maxLength={128}
                    className='md-cell md-cell--10'
                    onChange={this.onChange.bind(this, "address_line_1")}
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
                <TextField
                    id="street_address_line_2"
                    label="Street Address Line 2"
                    maxLength={128}
                    className={'md-cell md-cell--10' + (!this.props.noTitle ? '' : ' md-cell--2-desktop-offset')}
                    onChange={this.onChange.bind(this, "address_line_2")}
                />
                <TextField
                    id="city"
                    label="City"
                    maxLength={64}
                    className='md-cell md-cell--2-desktop-offset md-cell--5'
                    onChange={this.onChange.bind(this, "city")}
                />
                <SelectField
                    id="state"
                    label="State"
                    maxLength={64}
                    className='md-cell md-cell--2'
                    menuItems={this.props.states}
                    onChange={this.onChange.bind(this, "state")}
                />
                <Autocomplete
                    id="zip_code"
                    label="ZIP code"
                    className='md-cell md-cell--3'
                    onChange={this.onChange.bind(this, "zip_code")}
                    onAutocomplete={this.onChange.bind(this, "zip_code")}
                    rightIcon={this.state.zip_icon}
                    data={[this.state.suggested_zip]}
                    helpText={this.state.suggested_zip}
                    error={!this.state.valid_zip}
                    inline
                    required
                />
                <SelectField
                    id="country"
                    label="Country"
                    className='md-cell md-cell--2-desktop-offset md-cell--10'
                    menuItems={this.props.countries}
                    defaultValue={this.props.countries[239].value}
                    onChange={this.onChange.bind(this, "country")}
                />
                <h6 className="md-cell md-cell--2-desktop-offset md-cell--10">Location Information</h6>
                <SelectField
                    id="county"
                    label="County"
                    className='md-cell md-cell--2-desktop-offset md-cell--10'
                    menuItems={this.state.use_counties}
                    onChange={this.onChange.bind(this, "county")}
                    helpText={this.state.county_disabled ? 'Select a state' : ''}
                    disabled={this.state.county_disabled}
                />
                <SelectionControl
                    name={"switch_primary_address" + this.props.index}
                    id={"switch-primary-address" + this.props.index}
                    className='md-cell md-cell--12 md-cell--2-desktop-offset'
                    type="switch"
                    label="Primary address"
                    onChange={this.onChange.bind(this, "primary_address")}
                    checked={this.props.isPrimary}
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
                {this.props.noButton ? null : <h6 className="md-cell md-cell--12">* Required Fields</h6>}
                {/* <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Person ID"
                    onChange={this.onChange.bind(this, "person_id")}
                    type="number"
                    required

                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Address Type ID"
                    onChange={this.onChange.bind(this, "address_type_id")}
                    type="number"
                    required

                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Street Address"
                    onChange={this.onChange.bind(this, "street_address")}
                    maxLength={128}

                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Street Address 2"
                    onChange={this.onChange.bind(this, "street_address 2")}
                    maxLength={128}

                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="City"
                    onChange={this.onChange.bind(this, "city")}
                    maxLength={64}

                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="State/Province"
                    onChange={this.onChange.bind(this, "state_province")}
                    maxLength={64}

                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="County"
                    onChange={this.onChange.bind(this, "county")}
                    maxLength={3}

                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Country"
                    onChange={this.onChange.bind(this, "country")}
                    maxLength={2}

                />
                <YesNoSelect
                    id="contact-select"
                    label="Primary Contact Address"
                    onChange={this.onChange.bind(this, "primary_contact_address")}

                /> */}
            </DataForm>
        );
    }
}