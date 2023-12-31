import FS from 'fs';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

export const handler = async() => {
    try {
		// Get S3 information from environment variables.
		const bucketRegion = process.env.BucketRegion; // Example: cn-northwest-1
		const bucketName = process.env.BucketName;     // Example: my-assets

		// Create S3 Client.
		const s3Client = new S3Client({
			region: bucketRegion,
		});
		
		// Create S3 PutObject Command.
		let s3Command = new PutObjectCommand({
			Bucket: bucketName,
			Body: FS.createReadStream('/tmp/example.xml.gz'), // Path to file in temporary AWS Lambda storage.
			ContentType: 'application/xml',                   // Content type of file. Here it is a compressed XML file.
			ContentEncoding: 'gzip',                          // Content encoding of file. Here the file is compressed with gzip.
			Key: 'prefix/path/example.xml.gz',                // Key of the object which is a combination of prefix + object name.
		});

		// Send the Command via the S3 Client to upload the file to S3.
		await s3Client.send(s3Command);

		// Return success response.
		let response = {
			statusCode: 200,
		};
		
		return response;
    } catch(error) {
		console.log(error);
		
        // Return error response.
        let response = {
            statusCode: 500,
        };
        
        return response;
    }
};
