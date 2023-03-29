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
    e.preventDefault();
    // take back to top of the section
    location.href = '#reg';

    // get values
    var username = getElementByVal('username');
    var email = getElementByVal('email');
    var phone = getElementByVal('phone');

    // validate inputs
    if (!isValidUsername(username)) {
        displayAlert('Please enter a valid username (minimum 3 letters, letters only)', 'danger');
        return;
    }

    if (!isValidEmail(email)) {
        displayAlert('Please enter a valid email address', 'danger');
        return;
    }

    if (!isValidPhone(phone)) {
        displayAlert('Please enter a valid phone number', 'danger');
        return;
    }

    // save user data to database
    saveUser(username, email, phone);

    // show success message
    displayAlert('User Registered Successfully', 'success');

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

// validation functions
const isValidUsername = (username) => {
    return /^[A-Za-z]{3,}$/.test(username);
}

const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const isValidPhone = (phone) => {
    // return /^\d{10}$/.test(phone);

     // allow numbers with or without dashes or spaces, and with or without country code
     return /^(\+?\d{1,3}[- ]?)?\d{3}[- ]?\d{3}[- ]?\d{4}$/.test(phone);
}

// ----------- FUNCTION TO DISPLAY ALERT -----------------
const alert = document.querySelector('.alert')
displayAlert = (text, action) =>{
    alert.textContent = text
    alert.classList.add(`alert-${action}`)

    setTimeout(function() {
        alert.textContent = ''
        alert.classList.remove(`alert-${action}`)
    }, 2000)
}