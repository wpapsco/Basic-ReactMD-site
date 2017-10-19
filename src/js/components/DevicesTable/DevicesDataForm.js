import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import YesNoSelect from '../YesNoSelect';
import DataForm from '../DataForm';
var functions = require('../../DataFormFunctions').default;

export default class DevicesDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'tableName': 'Devices'
        }
    }
    
    render() {
        return (
            <DataForm tableName={this.state.tableName} onSubmit={functions.onSubmit.bind(this)}>
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Device Serial"
                    onChange={functions.onChange.bind(this, "device_serial")}
                    maxLength={10}
                    required
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Cell Modem IMEI"
                    onChange={functions.onChange.bind(this, "cell_modem_imei")}
                    type="number"
                    required
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="SIM Card ICCID"
                    onChange={functions.onChange.bind(this, "sim_card_iccid")}
                    type="number"
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Model Number"
                    onChange={functions.onChange.bind(this, "model_number")}
                    maxLength={10}
                    required
                    
                />
            </DataForm>
        );
    }
}