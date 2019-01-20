// initialize the github object from github class
const gitHub = new GitHub;

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
                    // show alert
                    console.log('wrong name')
                    }else{
                    // show the profile in the console
                    console.log(data)}
                    })
    }else{
        // clear the profiles
    }
}
