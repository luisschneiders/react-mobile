// const functions = require('firebase-functions');
// const {Storage} = require('@google-cloud/storage');
// const storage = new Storage();

// const os = require('os');
// const path = require('path');

// const spawn = require('child-process-promise').spawn;

// exports.renameResizedFile = functions.storage.object().onFinalize(event => {
//     const object = event;
//     const bucket = object.bucket;
//     const metadata = object.metadata;
//     const filePath = object.name;

//     const destBucket = storage.bucket(bucket);
//     const tmpFilePath = path.join(os.tmpdir(), path.basename(filePath));

//     return destBucket.file(filePath).download({
//         destination: tmpFilePath
//       }).then(() => {
//           return spawn('convert', [tmpFilePath, '', '200x200', tmpFilePath]);
//       }).then(() => {
//           return destBucket.upload(tmpFilePath, {
//               destination: 'resized-' + path.basename(filePath),
//               metadata: metadata
//           })
//       });
// });