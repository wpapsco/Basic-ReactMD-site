import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'react-md/lib/SelectFields';

const TitleMenu = props => <SelectField {...props} />;

TitleMenu.propTypes = {
    id: PropTypes.string.isRequired,

    // Injected by the Toolbar component
    className: PropTypes.string,
    toolbar: PropTypes.bool,
    position: PropTypes.string,
};

TitleMenu.defaultProps = {
    defaultValue: 'Person',
    menuItems: [
        'Person',
        'User',
        'UserType',
        'Patient',
        'PatientDemographicFactors',
        'PatientSports',
        'PatientSupporters',
        'PatientDrugUse',
        'PatientSocioEconomicFactors',
        'PatientPsychoSocialFactors',
        'PatientTherapyRelatedFactors',
        'PatientMedications', 
        'Employers',
        'Cohorts',
        'CohortsPatients',
        'Devices',
        'DeviceFirmware',
        'DevicesToPatients',
        'DeviceLifecycleStates',
        'DeviceLifecycleHistoryDataForm'
    ],
};
export default TitleMenu;