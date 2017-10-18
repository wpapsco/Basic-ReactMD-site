import React from "react";
import ReactDOM from "react-dom";
import SelectField from 'react-md/lib/SelectFields';

export default class YesNoSelect extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange(e) {
        this.props.onChange(e=='Yes', {target:{name:this.props.name}});
    }

    render() {
        return (
            <SelectField
                id={this.props.name}
                label={this.props.label}
                className="md-cell"
                menuItems={['Yes', 'No']}
                name={this.props.name}
                onChange={this.handleChange.bind(this)}
            />
        );
    }
}