import React from "react";
import TextField from 'react-md/lib/TextFields';

export default class DataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            full_name: ''
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        alert(this.state.full_name);
    }

    handleChange = (name, value) => {
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form className="md-grid text-fields__application" onSubmit={this.handleSubmit}>
                <h1>Test form</h1>
                <TextField
                    id="floating-center-title"
                    label="Full Name"
                    value={this.state.value}
                    onChange={this.handleChange.bind(this, 'full_name')}
                />
            </form>
        );
    }
}