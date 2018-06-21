const fs = require('fs')
const AWS = require('aws-sdk')

AWS.config.update({ region: 'us-east-2' });

for (let i = 1; i <= 10; i++) {
  let path = `tg${i}`
	fs.readFile(`./photo/${path}.jpg`, (err, data) => {
		const objParam = {
			Bucket: 'gacongnghiep',
			Key: `${path}.jpeg`,
			Body: data
		}
		uploadPromise = new AWS.S3().putObject(objParam).promise();
	})
}
/* This operation compares the largest face detected in the source image with each face detected in the target image. */

