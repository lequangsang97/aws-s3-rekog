const fs = require('fs')
const AWS = require('aws-sdk')
const rekognition = new AWS.Rekognition(
    {
      region: 'us-east-1'
    }
);
var params = {
    SimilarityThreshold: 90,
    SourceImage: {
        S3Object: {
            Bucket: "gacongnghiep",
            Name: "test3.jpeg"
        }
    },
    TargetImage: {
        S3Object: {
            Bucket: "gacongnghiep",
            Name: "test5.png"
        }
    }
};
rekognition.compareFaces(params, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else console.log(data);           // successful response

});