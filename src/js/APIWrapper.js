function getResource(endpoint, callback) {
    var url = 'http://curadite-dashboard-api.azurewebsites.net/api/' + endpoint + '/';
    console.log(url);
    fetch(url, {
        method: "get"
    }).then((response) => {
        return response.json();
    }).then((json) => {
        callback(json);
    }).catch((error) => {
        console.log(error);
    });
}

function postResource(endpoint, data, callback) {
    if (!callback) {
        callback = function(){console.log('successfully posted')};
    }
    var url = 'http://curadite-dashboard-api.azurewebsites.net/api/' + endpoint + '/';
    console.log(url);
    fetch(url, {
        method: "post",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(data)
    }).then((response) => {
        return response.json();
    }).then((json) => {
        callback(json);
    }).catch((error) => {
        console.log(error);
    });
}

function asLabelValueObject(data, label, value) {
    var objects = [];
    console.log(data);
    for (var i = 0; i < data.length; i++) {
        objects = objects.concat({ label: data[i][label], value: data[i][value] });
    }
    console.log(objects);
    return(objects);
}

module.exports = {
    getResource,
    postResource,
    asLabelValueObject
}