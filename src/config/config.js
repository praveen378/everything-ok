if (!import.meta.env.VITE_APPWRITE_URL) {
    throw new Error("VITE_APPWRITE_URL is not defined in environment variables.");
}

const config = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    paymentQrCoode: String(import.meta.env.VITE_PAYMENT_QR_CODE),
};

export default config;
