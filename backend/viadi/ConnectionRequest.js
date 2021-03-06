var Client = require('node-rest-client').Client;
var Promise = require('promise');



var request = {};


request.perform = function (from, to) {
    var client = new Client();

    var args = {
        parameters: { from: from, to: to },
        //parameters: { from: encodeURIComponent(from), to: encodeURIComponent(to) },
        headers: {
            'API-Key': 'V0011960D51C-899C-4381-B6BB-FBA0CE202FC5',
            'Accept-Language': "de"
        }
    };


    console.log("From: " + args.parameters.from + " To: " + args.parameters.to);
    var p = new Promise(function (resolve, reject) {
        client.get('http://free.viapi.ch/v1/connection', args, function (data, response) {
            // parsed response body as js object
            console.log(data);
            //var transformed = transformResponseData(data);
            if (data.statusCode) {
                reject(data);
            } else {
                resolve(data);
            }
            // raw response
            //console.log(response);
        });

    });

    return p;

};



module.exports = request;