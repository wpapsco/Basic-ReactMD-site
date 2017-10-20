import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import TimePicker from 'react-md/lib/Pickers/TimePickerContainer';
import YesNoSelect from '../YesNoSelect';
import DataForm from '../DataForm';
import { Paper } from 'react-md';
import { AddressesDataForm } from '../AddressesTable';
var functions = require('../../DataFormFunctions').default;

export default class AddressesDeck extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            addresses: 1,
            data: {}
        };
    }

    onAddClicked = () => {
        this.setState({
            addresses: this.state.addresses + 1
        })
    }

    onChange = (index, name, value) => {
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

    render() {
        return (
            <div>
                {[...new Array(this.state.addresses)].map((_, i) => (
                    <Paper id="main">
                        <AddressesDataForm
                            onChange={this.onChange.bind(this, i)}
                            onSubmit={functions.onSubmit.bind(this)}
                            index={i}
                            onAddClicked={this.onAddClicked.bind(this)}
                            noButton={i != this.state.addresses - 1}
                            noAddButton={i != this.state.addresses - 1 || this.state.addresses==3} />
                    </Paper>
                ))}
            </div>
        );
    }
}