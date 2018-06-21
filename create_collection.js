const fs = require('fs')
const AWS = require('aws-sdk')
const rekognition = new AWS.Rekognition(
  {
    region: 'us-east-1'
  }
);

/* This operation creates a Rekognition collection for storing image data. */
var params = {
  CollectionId: "album3",
};
rekognition.createCollection(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else console.log(data);           // successful response
});
