const fs = require('fs')
const AWS = require('aws-sdk')

const rekognition = new AWS.Rekognition(
  {
    region: 'us-east-1'
  }
);
var params = {
  CollectionId: "album3",
  MaxResults: 100
};
rekognition.listFaces(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else {
  for(let i = 0; i < data.Faces.length; i++)
  {
    console.log(data.Faces[i].FaceId);
    console.log(data.Faces[i].ExternalImageId);
    
  }
   console.log(data.Faces.length)
  }        // successful response
});