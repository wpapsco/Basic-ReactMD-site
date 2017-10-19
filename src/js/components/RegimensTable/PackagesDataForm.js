import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import TimePicker from 'react-md/lib/Pickers/TimePickerContainer';
import YesNoSelect from '../YesNoSelect';
import DataForm from '../DataForm';
var functions = require('../../DataFormFunctions').default;

export default class PackagesDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'tableName': 'Packages'
        }
    }

    render() {
        return (
            <DataForm tableName={this.state.tableName} onSubmit={functions.onSubmit.bind(this)}>
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Package UUID"
                    onChange={functions.onChange.bind(this, "package_uuid")}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Manifest ID"
                    onChange={functions.onChange.bind(this, "mainfest_id")}
                    type="number"
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Packager ID"
                    onChange={functions.onChange.bind(this, "packager_id")}
                    
                />
            </DataForm>
        );
    }
}