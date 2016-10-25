// JavaScript authentication file
$(function() {

    // Initialize Firebase
    var config = {
    apiKey: "AIzaSyDYwi83ExR5iWNFkG84tN2FQYYMowtN-bY",
    authDomain: "slick-info343.firebaseapp.com",
    databaseURL: "https://slick-info343.firebaseio.com",
    storageBucket: "slick-info343.appspot.com",
    messagingSenderId: "733827679664"
  };
  firebase.initializeApp(config);

    // Sign Up: Function to create account on firebase, then redirect to index.html
    var signUp = function() {
        // Get email, password, and display name
        var email = $('#email').val();
        var password = $('#password').val();
        var dn = $('#display_name').val();

        // Create user, then set the user's display name
        var auth = firebase.auth();
        auth.createUserWithEmailAndPassword(email, password).then(function(user){
          // Set display name
          user.updateProfile({
            displayName: dn
          }).then(function() {
            window.location = 'index.html';
          }).catch(function() {
            alert(error.message); //
          })
        });

    };

    // SignIn: Function to authenticate on Firebase, then redirect to index.html
    var signIn = function() {
        // Get email and password


        // Authenticate using email and password, then redirect

    };

    // Sign out: Function to log a user out of firebase
    var signOut = function() {
        // Sign out, then redirect



    };

    // Assign event lister to form submission
    $('form').on('submit', function(event) {
        event.preventDefault();
        var formId = $(this).attr('id');
        if (formId == 'sign-up') { // because authenticate.js file s loaded by all 3 *.html files
            signUp();
        } else if (formId == 'sign-in') {
            signIn();
        }
    });


    // Assign click event to logout button



    // Authentication Change: see if a user is already signed in, and redirect

            // Rediriect to index.html if there is a user and the pathname isn't '/'

            // Redirect to sign-in if there is NOT a user and the pathname IS '/'

});
