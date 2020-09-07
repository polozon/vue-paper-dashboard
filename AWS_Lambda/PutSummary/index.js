'use strict'
const AWS = require('aws-sdk');

AWS.config.update({ region: "eu-central-1"});

exports.handler = async (event, context) => {
    //const ddb = new AWS.DynamoDB( {apiVersion: "2012-10-08"});
    const documentClient = new AWS.DynamoDB.DocumentClient({ region: "eu-central-1"});
    
    let responseBody = "";
    let statusCode = 0;

    const { table, unit, runs, books, runtime, errors } = JSON.parse(event.body);

    const params = {
        TableName: "PlintDashDB",
        Item: {
            table: table,
            unit: unit,
            runs: runs,
            books: books,
            runtime: runtime,
            errors: errors
        }
    }

    try {
        const data = await documentClient.put(params).promise();
        responseBody = JSON.stringify(data);
        statusCode = 201;
    } catch (err) {
        responseBody = "Unable to put data";
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

