import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import TimePicker from 'react-md/lib/Pickers/TimePickerContainer';
import YesNoSelect from '../YesNoSelect';
import DataForm from '../DataForm';
import { Paper, Snackbar } from 'react-md';
import { PhonesDataForm } from '../AddressesTable';
var APIWrapper = require('../../APIWrapper');
var functions = require('../../DataFormFunctions').default;

export default class PhonesDeck extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            phones: 1,
            data: {},
            loading: true,
            primaryPhone: 0,
            toasts: []
        }
    }

    onAddClicked = () => {
        this.setState({
            phones: this.state.phones + 1,
            primaryPhone: this.state.phones
        });
    }

    onChange(name, value, index) {
        if (name == 'primary_phone') {
            this.setState({
                primaryPhone: index
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
    }

    componentWillMount() {
        var that = this;
        APIWrapper.getResource("PhoneTypes", function (data) {
            var phone_types = APIWrapper.asLabelValueObject(data, 'phoneTypeDescription', 'phoneTypeId');
            that.setState({ phone_types, loading: false });
        });
    }

    onSubmit() {
        console.log('phonesdeckonsubmit');
        var required = ["phone_number", "phones_type_select"];
        var requirements_filled = true;
        var toSend = []
        for (var i in this.state.phones) {
            var data = this.state.data[i];
            for (var j in required) {
                if (!data[required[j]]) {
                    requirements_filled = false;
                }
            }
            var toSend = toSend.concat({
                "personId": this.state.data[0].person_id,
                "phone": "+1" + data.phone_number,
                "phoneTypeId": data.phones_type_select,
                "primaryContactPhone": this.state.primaryPhone == i || this.state.phones == 1
            });
        }
        if (requirements_filled && this.state.data[0].person_id) {
            for (i in toSend) {
                APIWrapper.postResource('Phones', toSend[i]);
            }
        } else {
            this.setState({
                toasts: this.state.toasts.concat({text:'hey there buddy better fill those requirements'})
            });
        }
        functions.onSubmit.bind(this).call();
    }

    onDismiss() {
        const [, ...toasts] = this.state.toasts;
        this.setState({ toasts });
    }

    render() {
        if (!this.state.loading) {
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
                                isPrimary={this.state.primaryPhone == i}
                                index={i} />
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