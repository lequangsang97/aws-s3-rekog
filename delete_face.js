const AWS = require('aws-sdk')
const rekognition = new AWS.Rekognition(
  {
    region: 'us-east-1'
  }
);

var params = {
    "CollectionId": "album3",
    "FaceIds": [
        "fc217e02-543a-4de0-a17c-86b133a71710"
    ]
}
rekognition.deleteFaces(params, (err, data) => {
    if(err) {
        console.log(err.data)
    }
    else {
        console.log(data)
    }
})