import SFTPClient from 'ssh2-sftp-client';

export const handler = async() => {
    try {
		// Get SFTP information from environment variables.
		const sftpHost = process.env.SFTPHost;         // Example: my.domain.com
		const sftpUsername = process.env.SFTPUsername; // Example: username
		const sftpPassword = process.env.SFTPPassword; // Example: T0P5EcReT

        // Create new SFTP client.
        const sftpClient = new SFTPClient();
    	
    	// Connect to the SFTP server.
    	return sftpClient.connect({
    	    host: sftpHost,
    	    username: sftpUsername,
    	    password: sftpPassword,
    	})
    	.then(async() => {
			// Define source and target location.
			const sourceFile = '/path/to/file/on/remote/server/example.xml.gz';
			const targetFile = '/tmp/example.xml.gz';

			// Download the file via SFTP into the temporary AWS Lambda storage.
    	    await sftpClient.fastGet(sourceFile, targetFile);
    	    
    	    // Return success response.
    	    let response = {
                statusCode: 200,
            };
            
            return response;
    	})
    	.catch((error) => {
    	    throw new Error(error);
    	});
    } catch(error) {
        // Return error response.
        let response = {
            statusCode: 500,
        };
        
        return response;
    }
};
