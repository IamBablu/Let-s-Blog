import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.AppWriteUrl)
      .setProject(conf.ProjectID);
    this.account = new Account(this.client);
  }

  async SignUp({ email, password, name }) {
    try {
      const user = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (user) {
        // Call login method
        return this.login(email, password);
      } else {
        return user;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      console.log(this.account)
      return await this.account.get();
      
    } catch (error) {
      console.log("Appwrite : Auth : getCurrentUser: error ", error)
    }
    return null;
  }

  async logout() {
    try {
        return await this.account.deleteSessions()
    } catch (error) {
        throw error;
    }
  }
}

const authService = new AuthService();

export default authService;
