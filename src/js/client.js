import React from "react";
import ReactDOM from "react-dom";
import webfontloader from "webfontloader";
import Paper from 'react-md/lib/Papers';
import Toolbar from 'react-md/lib/Toolbars';
import PersonDataForm from './components/PersonDataForm'
import UserDataForm from './components/UserDataForm'
import UserTypeDataForm from './components/UserTypeDataForm'
import PatientDataForm from './components/PatientDataForm'
import PatientDemographicFactorsDataForm from './components/PatientDemographicFactorsDataForm'
import PatientSportsDataForm from './components/PatientSportsDataForm'
import PatientSupportersDataForm from './components/PatientSupportersDataForm'
import PatientDrugUseDataForm from './components/PatientDrugUseDataForm'
import PatientPsychoSocialFactorsDataForm from './components/PatientPsychoSocialFactorsDataForm'
import PatientSocioEconomicFactorsDataForm from './components/PatientSocioEconomicFactorsDataForm'
import PatientTherapyRelatedFactorsDataForm from './components/PatientTherapyRelatedFactorsDataForm'
import PatientMedicationsDataForm from './components/PatientMedicationsDataForm'
import EmployersDataForm from './components/EmployersDataForm'
import CohortsDataForm from './components/CohortsDataForm'
import CohortsPatientsDataForm from './components/CohortsPatientsDataForm'
import TitleMenu from './components/TitleMenu'
import DataForm from './components/DataForm'

webfontloader.load({
    google: {
        families: ['Roboto:300,400,500,700', 'Material Icons']
    },
})

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: "Person",
            formIndex: 0
        }
    }

    onFormUpdate = (name, value) => {
        console.log(value);
        this.setState({
            'form': name,
            'formIndex': value
        });
    }

    handleChange = (value, e) => {
        console.log(e.target.name);
        console.log(value);
    }

    render() {
        var forms = [
            (<PersonDataForm />),
            (<UserDataForm />),
            (<UserTypeDataForm />),
            (<PatientDataForm />),
            (<PatientDemographicFactorsDataForm />),
            (<PatientSportsDataForm />),
            (<PatientSupportersDataForm />),
            (<PatientDrugUseDataForm />),
            (<PatientSocioEconomicFactorsDataForm />),
            (<PatientPsychoSocialFactorsDataForm />),
            (<PatientTherapyRelatedFactorsDataForm />),
            (<PatientMedicationsDataForm />),
            (<EmployersDataForm />),
            (<CohortsDataForm onChange={this.handleChange.bind(this)} />),
            (<CohortsPatientsDataForm onChange={this.handleChange.bind(this)} />)
        ]

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
                    {forms[this.state.formIndex]}
                </Paper>
            </div>
        );
    }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout />, app);