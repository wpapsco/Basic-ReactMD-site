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
            "data" : {
                ...prevState.data,
                [index] : {
                    ...prevState.data[index],
                    [name]: value
                }
            }
        }));
    }

    render() {
        return (
            <div>
                {[...new Array(this.state.phones)].map((_, i) => (
                    <Paper className="md-text-container" >
                        <PhonesDataForm
                            onSubmit={functions.onSubmit.bind(this)}
                            onChange={this.onChange.bind(this)}
                            onAddClicked={this.onAddClicked.bind(this)}
                            noButton={i != this.state.phones - 1}
                            noAddButton={i != this.state.phones - 1 || this.state.phones == 3}
                            noTitle={i != 0}
                            index={i} />
                    </Paper>
                    ))}
            </div>
        );
    }
}