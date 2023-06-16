import FS from 'fs';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';

export const handler = async() => {
    try {
		// Get S3 information from environment variables.
		const bucketRegion = process.env.BucketRegion; // Example: cn-northwest-1
		const bucketName = process.env.BucketName;     // Example: my-assets

		// Create S3 Client.
		const s3Client = new S3Client({
			region: bucketRegion,
		});

		// Create S3 GetObject Command.
		const s3Command = new GetObjectCommand({
			Bucket: bucketName,
			Key: 'prefix/path/example.xml.gz', // Key of the object which is a combination of prefix + object name.
		});

		// Send the Command via the S3 Client.
		const s3Response = await s3Client.send(s3Command);
		
		// Extract repsonse.
		const { Body } = s3Response;
		
		// Load the file in the temporary AWS Lambda storage.
		await new Promise((resolve, reject) => {
            Body.pipe(FS.createWriteStream('/tmp/example.xml.gz'))
            .on('error', err => reject(err))
            .on('close', () => resolve());
        });

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
