var express = require('express');
var router = express.Router();
var mssql = require('mssql/msnodesqlv8');

router.post('/', function (req, res) {
    console.log("posted to!");
    console.log(req.body);
    var request = req.sql_pool.request();
    for (var param in req.body) {
        if (param == "gender") {
            if (req.body.gender == "Male") {
                request.input("gender", "M");
            } else if (req.body.gender == "Female") {
                request.input("gender", "F");
            } else {
                request.input("gender", "T");
            }
        } else if (param == "care_buddy_emergency_same") {
            var b = req.body.care_buddy_emergency_same == 'Yes';
            request.input("care_buddy_emergency_same", b);
        } else {
            request.input(param, req.body[param]);
        }
    }
    switch (req.body.page) {
        case "Persons":
            request.query( `INSERT INTO Persons VALUES (@first_name, @middle_name, @last_name, @nick_name, @ssn, 
                @gender, @birthdate)`);
            break;
        case "Users":
            request.query(`INSERT INTO Users VALUES (@user_type_id, @pseudonym, @person_id, NULL, @time_zone, 
                @date_format, @time_format)`);
            break;
        case "UserType":
            request.query("INSERT INTO UserTypes VALUES (@user_type_id, @user_type, @user_type_description)");
            break;
        case "Patient":
            request.query(`INSERT INTO Patients VALUES (@person_id, @forum_pseudonym, @primary_physician, 
                @emergency_contact_id, @care_buddy_emergency_same, @care_buddy_id)`);
            break;
        case "PatientDemographicFactors":
            request.query(`INSERT INTO PatientDemographicFactors VALUES (@patient_id, @employer_name, 
                @supervisor_name, @occupation, @race, @race_other, @ethnicity, @ethnicity_other, 
                @mobile_device_brand, @mobile_device_model, @mobile_phone_style, @mobile_device_carrier, 
                @curacast_device_placement, @curacast_device_placement_other, @treatment_travel, @travel_plans)`);
            break;
    }
});

module.exports = router;
