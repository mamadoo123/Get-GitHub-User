class GitHub{
    constructor(){
        this.client_id = 'd9308aacf8b204d361fd';
        this.client_secret = '84969aeef73956f4ec9e8716d1840532802bb81b';
        this.number_of_repos = 5;
        this.repos_sort = 'created: asc';//query string to format or sort the url
    }
// Create The GET Request Function
    async getUser(username){
        const gitProfileResponse = await fetch(`https://api.github.com/users/${username}
        ?client_id=${this.client_id}&client_secret=${this.client_secret}/`);
        const profile = await gitProfileResponse.json();
        const gitUserRepos = await fetch(`https://api.github.com/users/${username}/repos?per_page=${this.number_of_repos}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repos = await gitUserRepos.json();
        return {profile, repos}
    }
}
