import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';

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
            <form className="md-grid text-fields__application" onSubmit={this.handleSubmit.bind(this)}>
                <h1>Test form</h1>
                <TextField
                    id="floating-center-title"
                    label="Full Name"
                    value={this.state.value}
                    onChange={this.handleChange.bind(this, 'full_name')}
                />
                <TextField
                    id="floating-center-title"
                    label="Phone Number"
                    value={this.state.value}
                    type="tel"
                    onChange={this.handleChange.bind(this, 'phone_number')}
                />
                <div className="md-cell--right">
                    <Button flat
                        id=""
                        onClick={this.handleSubmit.bind(this)} >
                        Submit
                    </Button>
                </div>
            </form>
        );
    }
}