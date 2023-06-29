import FS from 'fs';
import gzip from 'node-gzip';

export const handler = async() => {
    try {
		// Load data of a GZIP compressed file from the temporary AWS Lambda storage to the memory.
		let compressedData = FS.readFileSync('/tmp/example.xml.gz');

		// Decompress the data.
		const { ungzip } = gzip;
		let decompressedData = (await ungzip(compressedData)).toString();

		// Write the decompressed data back to the temporary AWS Lambda storage.
		FS.writeFileSync('/tmp/example.xml', decompressedData);

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
