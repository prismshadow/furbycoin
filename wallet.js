
async function connectToPhantom() {
    if ('solana' in window) {
        const provider = window.solana;
        if (provider.isPhantom) {
            try {
                const response = await provider.connect();
                console.log('Connected with public key:', response.publicKey.toString());
                // Add any additional logic you need after a successful connection
            } catch (error) {
                console.error('Connection error:', error);
                // Handle errors or rejections here
            }
        } else {
            console.log('Phantom wallet not found');
            // Inform the user that the Phantom wallet is not found
        }
    } else {
        alert('Phantom wallet is not installed. Please install it to connect.');
        // Prompt the user to install Phantom if it's not found
    }
}

