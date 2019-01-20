// initialize the github object from github class
const gitHub = new GitHub;
// initialize the ui Object from UI class
const ui = new UI;
// Add Event Listener For The Search Box
document.getElementById('searchUser').addEventListener('keyup', search);

// The Search Function
function search(e){
    //get the user input value
    const inputText = e.target.value;

    if(inputText !== ''){
        // make the GET request using the getUser function which returns a promise 
        gitHub.getUser(inputText)
                .then(data => {
                    if(data.profile.message == "Not Found"){
                    // show alert message
                    ui.showAlert('user is not found, please enter a correct user name');
                    ui.clearAllProfiles();
                    }else{
                    // render the profile in the DOM using the ui.js file
                    ui.showProfile(data.profile);
                    }
                })
    }else{
        // clear the profiles
        ui.clearAllProfiles();
    }
}
