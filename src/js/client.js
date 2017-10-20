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
            form: "Addresses",
            formIndex: 28,
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
        // this.setState(prevState => ({
        //     "data": {
        //         ...prevState.data,
        //         [this.state.form]: {
        //             ...prevState.data[this.state.form],
        //             [name]:value
        //         }
        //     }
        // }));

    onSubmit = (e) => {
        alert(JSON.stringify(e));
    }

    render() {
        var forms = [
            (<PersonDataForm onSubmit={this.onSubmit.bind(this)} />),
            (<UserDataForm onSubmit={this.onSubmit.bind(this)} />),
            (<UserTypeDataForm onSubmit={this.onSubmit.bind(this)} />),
            (<PatientDataForm onSubmit={this.onSubmit.bind(this)} />),
            (<PatientDemographicFactorsDataForm onSubmit={this.onSubmit.bind(this)} />),
            (<PatientSportsDataForm onSubmit={this.onSubmit.bind(this)} />),
            (<PatientSupportersDataForm onSubmit={this.onSubmit.bind(this)} />),
            (<PatientDrugUseDataForm onSubmit={this.onSubmit.bind(this)} />),
            (<PatientSocioEconomicFactorsDataForm onSubmit={this.onSubmit.bind(this)} />),
            (<PatientPsychoSocialFactorsDataForm onSubmit={this.onSubmit.bind(this)} />),
            (<PatientTherapyRelatedFactorsDataForm onSubmit={this.onSubmit.bind(this)} />),
            (<PatientMedicationsDataForm onSubmit={this.onSubmit.bind(this)} />),
            (<EmployersDataForm onSubmit={this.onSubmit.bind(this)} />),
            (<CohortsDataForm onSubmit={this.onSubmit.bind(this)} />),
            (<CohortsPatientsDataForm onSubmit={this.onSubmit.bind(this)} />),
            (<DevicesDataForm onSubmit={this.onSubmit.bind(this)} />),
            (<DeviceFirmwareDataForm onSubmit={this.onSubmit.bind(this)} />),
            (<DevicesToPatientsDataForm onSubmit={this.onSubmit.bind(this)} />),
            (<DeviceLifecycleStatesDataForm onSubmit={this.onSubmit.bind(this)} />),
            (<DeviceLifecycleHistoryDataForm onSubmit={this.onSubmit.bind(this)} />),
            (<ManifestsDataForm onSubmit={this.onSubmit.bind(this)} />),
            (<PackagesDataForm onSubmit={this.onSubmit.bind(this)} />),
            (<MedicationTracksDataForm onSubmit={this.onSubmit.bind(this)} />),
            (<WellsDataForm onSubmit={this.onSubmit.bind(this)} />),
            (<RegimensDataForm onSubmit={this.onSubmit.bind(this)} />),
            (<AddressTypeDataForm onSubmit={this.onSubmit.bind(this)} />),
            (<EmailTypeDataForm onSubmit={this.onSubmit.bind(this)} />),
            (<PhoneTypeDataForm onSubmit={this.onSubmit.bind(this)} />),
            (<AddressesDataForm onSubmit={this.onSubmit.bind(this)} />),
            (<EmailsDataForm onSubmit={this.onSubmit.bind(this)} />),
            (<PhonesDataForm onSubmit={this.onSubmit.bind(this)} />) //hooray for multiple cursors! Or not hooray depending on who you ask...
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