import React from "react";
import ReactDOM from "react-dom";
import SelectField from 'react-md/lib/SelectFields';

export default class YesNoSelect extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange(e) {
        this.props.onChange(e=='Yes');
    }

    render() {
        return (
            <SelectField
                id={this.props.id}
                label={this.props.label}
                className="md-cell"
                menuItems={['Yes', 'No']}
                onChange={this.handleChange.bind(this)}
            />
        );
    }
}