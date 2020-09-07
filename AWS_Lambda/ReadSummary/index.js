'use strict'
const AWS = require('aws-sdk');

AWS.config.update({ region: "eu-central-1"});

exports.handler = async (event, context) => {
    //const ddb = new AWS.DynamoDB( {apiVersion: "2012-10-08"});
    const documentClient = new AWS.DynamoDB.DocumentClient({ region: "eu-central-1"});
    
    let responseBody = "";
    let statusCode = 0;

    const params = {
        TableName: "PlintDashDB",
        Key: {
            table: "summary",
            unit: "plint#1973"
        }
    }

    try {
        const data = await documentClient.get(params).promise();
        //console.log(data);
        responseBody = JSON.stringify(data.Item);
        statusCode = 200;
    } catch (err) {
        //console.log(err);
        responseBody = "Unable to get data";
        statusCode = 403;
    }

    const response = {
        statusCode: statusCode,
        headers: {
            "myHeader": "test"
        },
        body: responseBody
    }
    return response;
}

/* Original code
var resp_data = { runs: 123, books: 1374, runtime: 4757, errors: 40 };
exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: resp_data,
    };
    return response;
};
*/

/*
exports.handler = function (event, context, callback) {
    //const ddb = new AWS.DynamoDB( {apiVersion: "2012-10-08"});
    const documentClient = new AWS.DynamoDB.DocumentClient({ region: "eu-central-1"});
    
    const params = {
        TableName: "PlintDashDB",
        Key: {
            table: "summary",
            unit: "plint#1973"
        }
    }

    documentClient.get(params, (err, data) => {
        if (err) {
            console.log(err);
        }
        console.log(data);
    })
}
*/
