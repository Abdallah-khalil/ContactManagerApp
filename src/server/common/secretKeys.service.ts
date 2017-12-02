import { Component } from '@nestjs/common';

@Component()
export class SecretKeysComponent {

    private databaseConToken: string;
    private contactToken: string;
    private userToken: string;

    private googleClientID: string;
    private googleClientSecret: string;

    private facebookClientId: string;
    private facebookClientSecret: string;


    private githubClientId: string;
    private githubClientSecret: string;

    constructor() {
        this.databaseConToken = 'DBToken';
        this.contactToken = 'ContactToken';
        this.userToken = 'UserToken';
        this.googleClientID = '749598100296-43vrlaeuikdbgo43r4piadf6cujfso5v.apps.googleusercontent.com';
        this.googleClientSecret = 'NyrfQE8zpd8P6FEkNVL4pozQ';

        this.facebookClientId = '1507034959384135';
        this.facebookClientSecret = 'dda5ad2c46dd3987b58a9835036534b9';

        this.githubClientId = '1030e8bc8e69f5383d95';
        this.githubClientSecret = 'bd90d912a9cdc8b45db77e9df7c69aa470202224';

    }

    getGoogleKeys(): any {
        return {
            clientID: this.googleClientID,
            clientSecret: this.googleClientSecret
        };
    }

    getFacebookKeys(): any {
        return {
            clientID: this.facebookClientId,
            clientSecret: this.facebookClientSecret
        };
    }

    getGithubKeys(): any {
        return {
            clientID: this.githubClientId,
            clientSecret: this.githubClientSecret
        };
    }

    getDBToken(): string {
        return this.databaseConToken;
    }

    getProvToken(): any {
        return {
            contact: this.contactToken,
            user: this.userToken
        };
    }
}
