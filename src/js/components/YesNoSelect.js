import React from "react";
import ReactDOM from "react-dom";
import { SelectField, Checkbox } from 'react-md';

export default class YesNoSelect extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange(e) {
        this.props.onChange(e, { target: { name: this.props.name } });
    }

    render() {
        return (
            // <SelectField
            //     id={this.props.name}
            //     label={this.props.label}
            //     className="md-cell"
            //     menuItems={['Yes', 'No']}
            //     name={this.props.name}
            //     onChange={this.handleChange.bind(this)}
            // />
            <Checkbox
                {...this.props}
                className="md-cell md-cell--bottom"
                onChange={this.handleChange.bind(this)}
            />
        );
    }
}