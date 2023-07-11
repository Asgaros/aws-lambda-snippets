# AWS Lambda Snippets
A collection of AWS Lambda snippets based on Node.js.

## Introduction
This repository contains a collection of useful AWS Lambda snippets based on Node.js which can be used for different purposes.

### decompress-gzip-file
Decompresses a file compressed with GZIP in the temporary AWS Lambda storage.

- [Source](https://github.com/Asgaros/aws-lambda-snippets/blob/main/decompress-gzip-file/index.mjs)
- Dependencies:
  - [node-gzip](https://www.npmjs.com/package/node-gzip)

### download-file-from-s3
Downloads a file from an S3 Bucket and stores it in the temporary AWS Lambda storage.

- [Source](https://github.com/Asgaros/aws-lambda-snippets/blob/main/download-file-from-s3/index.mjs)

### download-file-via-sftp
Downloads a file from a remote server via SFTP and stores it in the temporary AWS Lambda storage.

- [Source](https://github.com/Asgaros/aws-lambda-snippets/blob/main/download-file-via-sftp/index.mjs)
- Dependencies:
  - [ssh2-sftp-client](https://www.npmjs.com/package/ssh2-sftp-client)

### list-objects-in-s3
Lists all objects within an S3 Bucket. The function supports an optional prefix and loads the list of objects in iterations to avoid timeouts. The number of objects which are loaded during each iteration can be defined via the ```MaxKeys``` parameter.

- [Source](https://github.com/Asgaros/aws-lambda-snippets/blob/main/list-objects-in-s3/index.mjs)

### upload-file-to-s3
Uploads a file from the temporary AWS Lambda storage to an S3 Bucket. In this example an XML file is used which got compressed with gzip.

- [Source](https://github.com/Asgaros/aws-lambda-snippets/blob/main/upload-file-to-s3/index.mjs)
