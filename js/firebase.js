const firebaseConfig = {
    apiKey: "AIzaSyBwl6tmey14VGV-MfOcelElrisBXkai6Qk",
    authDomain: "inspiringx-academia-e16f5.firebaseapp.com",
    databaseURL: "https://inspiringx-academia-e16f5-default-rtdb.firebaseio.com",
    projectId: "inspiringx-academia-e16f5",
    storageBucket: "inspiringx-academia-e16f5.appspot.com",
    messagingSenderId: "383309897950",
    appId: "1:383309897950:web:9f7d18a6f99e4e2377e24f"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);


// reference database
const userDB = firebase.database().ref('users')

document.getElementById('registration-form').addEventListener('submit', submitForm);


function submitForm(e) {
    e.preventDefault()

    // get values
    var username = getElementByVal('username');
    var email = getElementByVal('email');
    var phone = getElementByVal('phone');

    saveUser(username, email, phone)

    // show alert


    // reset the form
    document.getElementById('registration-form').reset();
}


const saveUser = (username, email, phone) => {
    var newUser = userDB.push();
    newUser.set({
        username: username,
        email: email,
        phone: phone,
    })
}

const getElementByVal = (id) => {
    return document.getElementById(id).value;
}