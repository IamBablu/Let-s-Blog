const conf = {
    AppWriteUrl : String(import.meta.env.VITE_APPWITE_URL),
    ProjectID: String(import.meta.env.VITE_PROJECT_ID),
    DataBaseID : String(import.meta.env.VITE_DATABASE_ID),
    CollectionID : String(import.meta.env.VITE_COLLECTION_ID),
    BucketID : String(import.meta.env.VITE_BUCKET_ID)
}

export default conf