# AWS Lambda Snippets
A collection of AWS Lambda snippets based on Node.js.

## Introduction
This repository contains a collection of useful AWS Lambda snippets based on Node.js which can be used for different purposes.

### download-file-from-s3
Downloads a file from an S3 Bucket and stores it in the temporary AWS Lambda storage.

- [Source](https://github.com/Asgaros/aws-lambda-snippets/tree/main/download-file-from-s3)

### download-file-via-sftp
Downloads a file from a remote server via SFTP and stores it into the temporary AWS Lambda storage.

- [Source](https://github.com/Asgaros/aws-lambda-snippets/tree/main/download-file-via-sftp)
- Dependencies:
  - [ssh2-sftp-client](https://www.npmjs.com/package/ssh2-sftp-client)

### upload-file-to-s3
Uploads a file from the temporary AWS Lambda storage to an S3 Bucket. In this example an XML file is used which got compressed with gzip.

- [Source](https://github.com/Asgaros/aws-lambda-snippets/tree/main/upload-file-to-s3)
