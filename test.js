#!/usr/bin/env node

const request = require('request');

const request_count = process.argv[2] || 1;

var url = {url: 'http://nsoor.net/time', time: true}


var results = {
    success: 0,
    failure: 0,
    avg_ttlb: 0,
    version: 'v0'
}

const failure = () => {
    results.failure += 1;
}

const success = (new_ttlb, version) => {
    var counter = results.success + results.failure;
    var new_avg;
    if ( counter == 0 ) {
        new_avg = new_ttlb;
    } else {
        new_avg = ((counter * results.avg_ttlb + new_ttlb) / (counter + 1) );
    }
    results.success += 1;
    results.avg_ttlb = new_avg;
    results.version = version;
}

const interval = setInterval(() => {

    request(url, (err, response, body) => {
        if (err) {
            failure();
        } else {
            if (response.statusCode == 200) {
                success(response.timingPhases.total, JSON.parse(body)['version'] );
            } else {
                failure();
            }
        }
    console.log(results);
    });
}, parseInt(1000 / request_count));
