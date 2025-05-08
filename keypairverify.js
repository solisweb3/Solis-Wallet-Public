import { Keypair, PublicKey } from "@solana/web3.js";

function validateSolanaKeypair(secretKey, expectedPublicKey) {
    try {
        // Create keypair from secret key
        const keypair = Keypair.fromSecretKey(
            Uint8Array.from(secretKey)
        );
        
        // Create PublicKey object from expected address
        const publicKey = new PublicKey(expectedPublicKey);
        
        // Compare the generated public key with expected public key
        const isValid = keypair.publicKey.toBase58() === publicKey.toBase58();
        
        return isValid;
    } catch (error) {
        console.error("Validation error:", error);
        return false;
    }
}

// Example usage:
const secretKey = [174, 47, 154, /* ... rest of the array ... */ 238, 135];
const expectedAddress = "24PNhTaNtomHhoy3fTRaMhAFCRj4uHqhZEEoWrKDbR5p";

const isValid = validateSolanaKeypair(secretKey, expectedAddress);
console.log("Keys match:", isValid); 
