import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';

export const handler = async() => {
    try {
		// Get S3 information from environment variables.
		const bucketRegion = process.env.BucketRegion; // Example: cn-northwest-1
		const bucketName = process.env.BucketName;     // Example: my-assets

		// Number of objects loaded during each iteration.
		const maxKeys = 10;

		// Optional prefix to limit the returned objects.
		const prefix = 'special-prefix/';

		// Create S3 Client.
		const s3Client = new S3Client({
			region: bucketRegion,
		});

		// Array which will hold the list of all objects.
		let listOfObjects = [];
		
		// Create S3 ListObjectsV2Command Command.
		let listObjects = new ListObjectsV2Command({
			Bucket: bucketName,
			MaxKeys: maxKeys,
			Prefix: prefix,
		});
		
		// Load all objects in iterations.
		let isTruncated = true;
		
		while (isTruncated) {
			const { Contents, IsTruncated, NextContinuationToken } = await s3Client.send(listObjects);
			
			for (let objectCounter in Contents) {
				// Extract key of object.
				let objectItem = Contents[objectCounter];
				let objectKey = objectItem.Key;
				
				// Add object key to list.
				listOfObjects.push(objectKey);
			}
			
			isTruncated = IsTruncated;
			listObjects.input.ContinuationToken = NextContinuationToken;
		}

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
