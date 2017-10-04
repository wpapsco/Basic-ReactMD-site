import React from "react";
import ReactDOM from "react-dom";
import webfontloader from "webfontloader";
import Paper from 'react-md/lib/Papers';
import Toolbar from 'react-md/lib/Toolbars';
import PersonDataForm from './components/PersonDataForm'
import UserDataForm from './components/UserDataForm'
import UserTypeDataForm from './components/UserTypeDataForm'
import TitleMenu from './components/TitleMenu'

webfontloader.load({
    google: {
        families: ['Roboto:300,400,500,700', 'Material Icons']
    },
})

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: "Person"
        }
    }

    onFormUpdate = (name, value) => {
        this.setState({
            'form' : name
        });
    }

    render() {
        var form = (<div />);
        switch (this.state.form) {
            case "Person":
                form = (<PersonDataForm />);
                break;
            case "User":
                form = (<UserDataForm />);
                break;
            case "UserType":
                form = (<UserTypeDataForm />);
                break;
        }

        return (
            <div id="layout">
                <Toolbar
                    themed
                    titleMenu={
                        <TitleMenu
                            id="title_menu"
                            onChange={this.onFormUpdate.bind(this)} />}
                >
                </Toolbar>
                <Paper id="main">
                    {form}
                </Paper>
            </div>
        );
    }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout />, app);