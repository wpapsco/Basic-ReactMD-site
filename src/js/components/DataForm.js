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
                onSubmit: null
            });
        } else {
            this.setState({
                onSubmit: this.props.onSubmit
            });
        }
    }

    render() {
        var classname = !this.props.noGrid ? "md-grid text-fields__application" : "text-fields__application"
        return (
            <form className={classname} onSubmit={this.state.onSubmit}>
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