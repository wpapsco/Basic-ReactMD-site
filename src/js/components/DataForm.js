import React from "react";
import Button from 'react-md/lib/Buttons/Button';

export default class DataForm extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    componentWillMount() {
        console.log(this.props.onSubmit)
        if (!this.props.onSubmit) {
            this.setState({
                onSubmit: this.handleSubmit.bind(this)
            });
        } else {
            this.setState({
                onSubmit: this.props.onSubmit
            });
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert("Data submitted from DataForm.js!");

        var obj = {}; 
        for (var param in this.state) {
            obj[param] = this.state[param];
        }
        obj.page = this.props.tableName;
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://www.localhost:3000/save", true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify(obj));
    }

    handleChange = (name, value) => {
        console.log('using this one!!');
        console.log(name, value);
    }

    render() {
        return (
            <form className="md-grid text-fields__application" onSubmit={this.state.onSubmit}>
                <h1 className="md-cell md-cell--12">{this.props.tableName} Table Data Entry Form</h1>
                <br />
                {this.props.children}
                <Button flat
                    id={this.props.tableName}
                    name={this.props.tableName}
                    className="md-cell md-cell--12 md-cell--bottom md-cell--right"
                    onClick={this.state.onSubmit} >
                    Submit
                </Button>
            </form>
        )
    }
}