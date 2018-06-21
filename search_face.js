const AWS = require('aws-sdk')
const rekognition = new AWS.Rekognition(
  {
    region: 'us-east-1'
  }
);

var params = {
  CollectionId: "album3",
  FaceId: "320e4056-26fb-4589-a98a-a903be69e5ab",
  FaceMatchThreshold: 80,
  MaxFaces: 10
};
rekognition.searchFaces(params, function (err, data) {
  if (err) {
    console.log(err, err.stack); // an error occurred
  }
  else {
    for (let i = 0; i < data.FaceMatches.length; i++) {
      var faces = {
        FaceId: data.FaceMatches[i].Face.FaceId,
        ExternalImageId: data.FaceMatches[i].Face.ExternalImageId,
        Similarity: data.FaceMatches[i].Similarity
      }
      console.log(faces);

    }
  }
});