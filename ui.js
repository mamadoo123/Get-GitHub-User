class UI {
    constructor(){
        this.profile = document.getElementById('profile');
    }

    showProfile(userProfile){
        this.profile.innerHTML = `
        <div class = "card card-body mb-3"> 
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${userProfile.avatar_url}">
                    <a href="${userProfile.html_url}" target="_blank" 
                    class="btn btn-primary btn-block mb-4">
                    View Profile
                    </a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">Public Repos: ${userProfile.public_repos} </span>
                    <span class="badge badge-secondary">Public Gists: ${userProfile.public_gists} </span>
                    <span class="badge badge-success">Followers: ${userProfile.followers} </span>
                    <span class="badge badge-info">Following: ${userProfile.following} </span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${userProfile.company}</li>
                        <li class="list-group-item">Blog: ${userProfile.blog}</li>
                        <li class="list-group-item">Location: ${userProfile.location}</li>
                        <li class="list-group-item">Membership: since ${userProfile.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        `
    }
}