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
            formIndex: 0,
            data: {}
        }
    }

    onFormUpdate = (name, value) => {
        console.log(value);
        this.setState({
            'form': name,
            'formIndex': value,
            'data': {}
        });
    }

    handleChange = (value, e, extra) => {
        console.log(value);
        console.log(e.target.name);
        var name = e.target.name;
        console.log(extra);
        this.setState(prevState => ({
            "data": {
                ...prevState.data,
                [this.state.form]: {
                    ...prevState.data[this.state.form],
                    [name]:value
                }
            }
        }));
    }

    onSubmit = (e) => {
        alert(JSON.stringify(this.state.data[this.state.form]));
    }

    render() {
        var forms = [
            (<PersonDataForm />),
            (<UserDataForm onChange={this.handleChange.bind(this)} onSubmit={this.onSubmit.bind(this)} />),
            (<UserTypeDataForm onChange={this.handleChange.bind(this)} onSubmit={this.onSubmit.bind(this)} />),
            (<PatientDataForm onChange={this.handleChange.bind(this)} onSubmit={this.onSubmit.bind(this)} />),
            (<PatientDemographicFactorsDataForm onChange={this.handleChange.bind(this)} onSubmit={this.onSubmit.bind(this)} />),
            (<PatientSportsDataForm onChange={this.handleChange.bind(this)} onSubmit={this.onSubmit.bind(this)} />),
            (<PatientSupportersDataForm onChange={this.handleChange.bind(this)} onSubmit={this.onSubmit.bind(this)} />),
            (<PatientDrugUseDataForm onChange={this.handleChange.bind(this)} onSubmit={this.onSubmit.bind(this)} />),
            (<PatientSocioEconomicFactorsDataForm onChange={this.handleChange.bind(this)} onSubmit={this.onSubmit.bind(this)} />),
            (<PatientPsychoSocialFactorsDataForm onChange={this.handleChange.bind(this)} onSubmit={this.onSubmit.bind(this)} />),
            (<PatientTherapyRelatedFactorsDataForm onChange={this.handleChange.bind(this)} onSubmit={this.onSubmit.bind(this)} />),
            (<PatientMedicationsDataForm onChange={this.handleChange.bind(this)} onSubmit={this.onSubmit.bind(this)} />),
            (<EmployersDataForm onChange={this.handleChange.bind(this)} onSubmit={this.onSubmit.bind(this)} />),
            (<CohortsDataForm onChange={this.handleChange.bind(this)} onSubmit={this.onSubmit.bind(this)} />),
            (<CohortsPatientsDataForm onChange={this.handleChange.bind(this)} onSubmit={this.onSubmit.bind(this)} />),
            (<DevicesDataForm onChange={this.handleChange.bind(this)} onSubmit={this.onSubmit.bind(this)} />),
            (<DeviceFirmwareDataForm onChange={this.handleChange.bind(this)} onSubmit={this.onSubmit.bind(this)} />),
            (<DevicesToPatientsDataForm onChange={this.handleChange.bind(this)} onSubmit={this.onSubmit.bind(this)} />),
            (<DeviceLifecycleStatesDataForm onChange={this.handleChange.bind(this)} onSubmit={this.onSubmit.bind(this)} />),
            (<DeviceLifecycleHistoryDataForm onChange={this.handleChange.bind(this)} onSubmit={this.onSubmit.bind(this)} />),
            (<ManifestsDataForm onChange={this.handleChange.bind(this)} onSubmit={this.onSubmit.bind(this)} />),
            (<PackagesDataForm onChange={this.handleChange.bind(this)} onSubmit={this.onSubmit.bind(this)} />),
            (<MedicationTracksDataForm onChange={this.handleChange.bind(this)} onSubmit={this.onSubmit.bind(this)} />),
            (<WellsDataForm onChange={this.handleChange.bind(this)} onSubmit={this.onSubmit.bind(this)} />),
            (<RegimensDataForm onChange={this.handleChange.bind(this)} onSubmit={this.onSubmit.bind(this)} />),
            (<AddressTypeDataForm onChange={this.handleChange.bind(this)} onSubmit={this.onSubmit.bind(this)} />),
            (<EmailTypeDataForm onChange={this.handleChange.bind(this)} onSubmit={this.onSubmit.bind(this)} />),
            (<PhoneTypeDataForm onChange={this.handleChange.bind(this)} onSubmit={this.onSubmit.bind(this)} />),
            (<AddressesDataForm onChange={this.handleChange.bind(this)} onSubmit={this.onSubmit.bind(this)} />),
            (<EmailsDataForm onChange={this.handleChange.bind(this)} onSubmit={this.onSubmit.bind(this)} />),
            (<PhonesDataForm onChange={this.handleChange.bind(this)} onSubmit={this.onSubmit.bind(this)} />) //hooray for multiple cursors! Or not hooray depending on who you ask...
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