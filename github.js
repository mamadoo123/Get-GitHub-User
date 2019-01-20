class GitHub{
    constructor(){
        this.client_id = 'd9cdae56d758a7cad963';
        this.client_secret = '0447679473c9ced4f63279e13b863193bb217d3e';
    }
// Create The GET Request Function
    async getUser(username){
        const gitProfileResponse = await fetch(`https://api.github.com/users/${username}
        ?client_id=${this.client_id}&client_secret=${this.client_secret}/`);
        const profile = await gitProfileResponse.json();
        return {
            profile}

    }
}
