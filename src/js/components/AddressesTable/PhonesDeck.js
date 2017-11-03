import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import TimePicker from 'react-md/lib/Pickers/TimePickerContainer';
import YesNoSelect from '../YesNoSelect';
import DataForm from '../DataForm';
import { Paper } from 'react-md';
import { PhonesDataForm } from '../AddressesTable';
var APIWrapper = require('../../APIWrapper');
var functions = require('../../DataFormFunctions').default;

export default class PhonesDeck extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            phones: 1,
            data: {}
        }
    }

    onAddClicked = () => {
        this.setState({
            phones: this.state.phones + 1,
        });
    }

    onChange(name, value, index) {
        this.setState(prevState => ({
            "data": {
                ...prevState.data,
                [index]: {
                    ...prevState.data[index],
                    [name]: value
                }
            }
        }));
    }

    componentWillMount() {
        var that = this;
        APIWrapper.getResource("PhoneTypes", function (data) {
            var phone_types = [];
            for (var i = 0; i < data.length; i++) {
                phone_types = phone_types.concat({ label: data[i].phoneTypeDescription, value: data[i].phoneTypeId });
            }
            console.log(phone_types);
            that.setState({ phone_types });
        });
    }

    onSubmit() {
        console.log('phonesdeckonsubmit');
        for (var i = 0; i < this.state.phones; i++) {
            var data = this.state.data[i];
            var toSend = {
                "personId": this.state.data[0].person_id,
                "phone": "+1" + data.phone_number,
                "phoneTypeId": data.phones_type_select,
                "primaryContactPhone": false //add this
            };
            console.log(toSend);
            APIWrapper.postResource('Phones', toSend);
        }

        //functions.onChange.bind(this).call();
    }

    render() {
        return (
            <div>
                {[...new Array(this.state.phones)].map((_, i) => (
                    <Paper className="md-text-container" >
                        <PhonesDataForm
                            onSubmit={this.onSubmit.bind(this)}
                            onChange={this.onChange.bind(this)}
                            onAddClicked={this.onAddClicked.bind(this)}
                            noButton={i != this.state.phones - 1}
                            noAddButton={i != this.state.phones - 1 || this.state.phones == 3}
                            noTitle={i != 0}
                            key={i}
                            phone_types={this.state.phone_types}
                            index={i} />
                    </Paper>
                ))}
            </div>
        );
    }
}