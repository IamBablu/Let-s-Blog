import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;
    constructor() {
        this.client.setEndpoint(conf.AppWriteUrl)
        .setProject(conf.ProjectID)

        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)     
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.DataBaseID,
                conf.CollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            throw error;
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            await this.databases.updateDocument(
                conf.DataBaseID,
                conf.CollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            return error;
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.DataBaseID,
                conf.CollectionID,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error)
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.DataBaseID,
                conf.CollectionID,
                slug
            )
            
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error)
            return false
        }
    }

    async listPost(query = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.DataBaseID,
                conf.CollectionID,
                query
            )
        } catch (error) {
            console.log("Appwrite service :: listPost :: error", error)
            return false
        }
    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.BucketID,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error)
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.BucketID,
                fileId
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error)
            return false
        }
    }
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.BucketID,
            fileId
        )
    }
}

const service = new Service()

export default service