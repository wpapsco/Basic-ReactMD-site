import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import YesNoSelect from './YesNoSelect';
import DataForm from './DataForm';

export default class DevicesDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    render() {
        return (
            <DataForm tableName="Devices">
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Device Serial"
                    name="device_serial"
                    maxLength={10}
                    required
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Cell Modem IMEI"
                    name="cell_modem_imei"
                    type="number"
                    required
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="SIM Card ICCID"
                    name="sim_card_iccid"
                    type="number"
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Model Number"
                    name="model_number"
                    maxLength={10}
                    required
                    onChange={this.props.onChange}
                />
            </DataForm>
        );
    }
}