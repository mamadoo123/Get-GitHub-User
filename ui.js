class UI {
    constructor(){
        this.profile = document.getElementById('profile');
        this.searchContainer = document.querySelector('.searchContainer');
        this.search = document.querySelector('.search')
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

    clearAllProfiles(){
        this.profile.innerHTML = '';
    }

    showAlert(message){
        // clear any remaining alert
        this.clearAlert();
        //create a div with text message
        const div = document.createElement('div');
        div.className='alert alert-danger';
        div.appendChild(document.createTextNode(message));
        // append the newly created div to the search container and before the search box
        this.searchContainer.insertBefore(div, this.search);
        // let the alert disappear afetr 3 sec
        setTimeout(()=>{div.remove()}, 3000)
    }

            // clearAlert function check if an alert exists and remove it
    clearAlert(){
        if(this.searchContainer.firstElementChild.className ==="alert alert-danger"){
            this.searchContainer.firstElementChild.remove();
        }
    }
}