import React from "react";
import ReactDOM from "react-dom";
import webfontloader from "webfontloader";

import Paper from 'react-md/lib/Papers';
import Toolbar from 'react-md/lib/Toolbars';

import TitleMenu from './components/TitleMenu'
import DataForm from './components/DataForm'

import PersonDataForm from './components/PersonDataForm'
import UserDataForm from './components/UserDataForm'
import UserTypeDataForm from './components/UserTypeDataForm'
import EmployersDataForm from './components/EmployersDataForm'
import CohortsDataForm from './components/CohortsDataForm'
import CohortsPatientsDataForm from './components/CohortsPatientsDataForm'
import {
    PatientDataForm,
    PatientDemographicFactorsDataForm,
    PatientSportsDataForm,
    PatientSupportersDataForm,
    PatientDrugUseDataForm,
    PatientPsychoSocialFactorsDataForm,
    PatientSocioEconomicFactorsDataForm,
    PatientTherapyRelatedFactorsDataForm,
    PatientMedicationsDataForm
} from './components/PatientsTable';
import {
    DeviceFirmwareDataForm,
    DeviceLifecycleHistoryDataForm,
    DeviceLifecycleStatesDataForm,
    DevicesDataForm,
    DevicesToPatientsDataForm
} from './components/DevicesTable';
import {
    ManifestsDataForm,
    PackagesDataForm,
    MedicationTracksDataForm,
    WellsDataForm,
    RegimensDataForm
} from './components/RegimensTable';
import {
    AddressesDataForm,
    AddressTypeDataForm,
    PhonesDataForm,
    PhoneTypeDataForm,
    EmailsDataForm,
    EmailTypeDataForm
} from './components/AddressesTable';

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

    handleChange = (value, e, extra) => {
        console.log(value);
        console.log(e.target.name);
        console.log(extra);
    }

    onSubmit = (e) => {
        console.log(e.target.name);
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
            (<CohortsPatientsDataForm onChange={this.handleChange.bind(this)} />),
            (<DevicesDataForm onChange={this.handleChange.bind(this)} />),
            (<DeviceFirmwareDataForm onChange={this.handleChange.bind(this)} />),
            (<DevicesToPatientsDataForm onChange={this.handleChange.bind(this)} />),
            (<DeviceLifecycleStatesDataForm onChange={this.handleChange.bind(this)} />),
            (<DeviceLifecycleHistoryDataForm onChange={this.handleChange.bind(this)} />),
            (<ManifestsDataForm onChange={this.handleChange.bind(this)} />),
            (<PackagesDataForm onChange={this.handleChange.bind(this)} />),
            (<MedicationTracksDataForm onChange={this.handleChange.bind(this)} />),
            (<WellsDataForm onChange={this.handleChange.bind(this)} />),
            (<RegimensDataForm onChange={this.handleChange.bind(this)} />),
            (<AddressTypeDataForm onChange={this.handleChange.bind(this)} />),
            (<EmailTypeDataForm onChange={this.handleChange.bind(this)} />),
            (<PhoneTypeDataForm onChange={this.handleChange.bind(this)} />),
            (<AddressesDataForm onChange={this.handleChange.bind(this)} />),
            (<EmailsDataForm onChange={this.handleChange.bind(this)} />),
            (<PhonesDataForm onChange={this.handleChange.bind(this)} onSubmit={this.onSubmit.bind(this)} />)
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