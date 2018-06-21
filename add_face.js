const AWS = require('aws-sdk')
const rekognition = new AWS.Rekognition(
  {
    region: 'us-east-1'
    // CollectionArn: 'aws:rekognition:us-east-2:363027706062:collection/album2'
  }
);
for (let i = 1; i <= 1; i++) {
  let path = 'sang4'/* `tg${i}` */
  var face = {
    "CollectionId": "album3",
    "Image": {
      "S3Object": {
        "Bucket": "gacongnghiep",
        "Name": `${path}.jpg`
      }
    },
    "ExternalImageId": `${path}.jpeg`,
    "DetectionAttributes": [
      "ALL"
    ]
  }
  rekognition.indexFaces(face, (err, data) => {
    if (err) console.log(err, err.stack); // an error occurred
    else console.log(data.FaceRecords);
  })

}
  /* 
  aws rekognition index-faces
  --image '{"S3Object":{"Bucket":"gacongnghiep","Name
  :"test1.jpeg"}}'
  --collection-id "myphotos2"
  --detection-attributes "ALL"
  --external-image-id "example-image.jpeg"
  --region us-east-1 */