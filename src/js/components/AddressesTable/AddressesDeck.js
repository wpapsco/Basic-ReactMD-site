import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import TimePicker from 'react-md/lib/Pickers/TimePickerContainer';
import YesNoSelect from '../YesNoSelect';
import DataForm from '../DataForm';
import { Paper, Snackbar } from 'react-md';
import { AddressesDataForm } from '../AddressesTable';
var functions = require('../../DataFormFunctions').default;
var APIWrapper = require('../../APIWrapper');

export default class AddressesDeck extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            addresses: 1,
            primaryAddress: 0,
            data: {},
            loading: true,
            toasts: []
        };
    }

    onAddClicked = () => {
        this.setState({
            addresses: this.state.addresses + 1,
            primaryAddress: this.state.addresses
        });
    }

    onChange = (index, name, value) => {
        console.log(this.state);
        if (name == 'primary_address') {
            this.setState({
                primaryAddress: index
            });
        }
        this.setState(prevState => ({
            "data": {
                ...prevState.data,
                [index]: {
                    ...prevState.data[index],
                    [name]: value
                }
            }
        }));
        console.log({ name, value, index });
    }

    componentWillMount() {
        APIWrapper.getResource("AddressTypes", (data) => {
            this.setState({ address_types: APIWrapper.asLabelValueObject(data, "addressTypeDescription", "addressTypeId") });
        });

        APIWrapper.getResource("Countries", (data) => {
            console.log(data);
            this.setState({ countries: APIWrapper.asLabelValueObject(data, "countryEnglishShortName", "iso3166numeric") });
        });

        APIWrapper.getResource("States", (data) => {
            this.setState({ states: APIWrapper.asLabelValueObject(data, "stateName", "alpha2Code") });
        });

        APIWrapper.getResource("Counties", (data) => {
            this.setState({counties:"not yet fixed"});
        });
    }

    onSubmit() {
        var required = ["address_line_1", "city", "country", "zip_code"];
        var requirements_filled = true;
        var toSend = []
        console.log(data);
        for (var i in this.state.addresses) {
            var data = this.state.data[i];
            for (var j in required) {
                if (!data[required[j]]) {
                    requirements_filled = false;
                }
            }
            toSend = toSend.concat({
                "personId": this.state.data[0].person_id,
                "addressTypeId": data.address_type_select,
                "streetAddress": data.address_line_1,
                "streetAddress2": data.address_line_2,
                "city": data.city,
                "stateProvince": data.state,
                "county": "067", //TODO
                "country": data.country,
                "postalCode": data.zip_code,
                "primaryContactAddress": this.state.primaryAddress == i
            });
        }
        if (requirements_filled && this.state.data[0].person_id) {
            for (i in toSend) {
                APIWrapper.postResource('Addresses', toSend[i]);
            }
        } else {
            this.setState({
                toasts: this.state.toasts.concat({ text: 'hey there buddy better fill those requirements' })
            });
        }
        functions.onSubmit.bind(this).call();
    }

    onDismiss() {
        const [, ...toasts] = this.state.toasts;
        this.setState({ toasts });
    }

    render() {
        if (this.state.address_types && this.state.countries && this.state.states && this.state.counties) {
            return (
                <div>
                    {[...new Array(this.state.addresses)].map((_, i) => (
                        <Paper className="md-text-container" key={i}>
                            <AddressesDataForm
                                onChange={this.onChange.bind(this, i)}
                                onSubmit={this.onSubmit.bind(this)}
                                key={i}
                                index={i}
                                onAddClicked={this.onAddClicked.bind(this)}
                                noButton={i != this.state.addresses - 1}
                                noAddButton={i != this.state.addresses - 1 || this.state.addresses == 3}
                                noTitle={i != 0}
                                countries={this.state.countries}
                                states={this.state.states}
                                address_types={this.state.address_types}
                                isPrimary={this.state.primaryAddress == i} />
                        </Paper>
                    ))}
                    <Snackbar
                        id="curadite-snackbar"
                        toasts={this.state.toasts}
                        autohide={true}
                        onDismiss={this.onDismiss.bind(this)}
                    />
                </div>
            );
        } else {
            return (<div />);
        }
    }
}