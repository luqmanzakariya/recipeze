const baseUrl = `http://localhost:3000`

$(document).ready(function () {
  isLogin()
  renderButton()
})

function onSuccess(googleUser) {
  console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
}

function onFailure(error) {
  console.log(error);
}

function renderButton() {
  gapi.signin2.render('my-signin2', {
    'scope': 'profile email',
    'width': 230,
    'height': 40,
    'longtitle': true,
    'theme': 'light',
    'onsuccess': onSuccess,
    'onfailure': onFailure
  });
}
//============= Hide and Show =============
function isLogin() {
  if (localStorage.getItem('token')) {
    hasToken()
  }
  else {
    noToken()
  }
}

function hasToken() {
  $('.mainWeb').show()
  // $('#buttonSignIn').hide()
  // $('#buttonSignOut').show()
}

function noToken() {
  $('.mainWeb').hide()
  // $('#buttonSignIn').show()
  // $('#buttonSignOut').hide()
}

//============= Google Signin =============
function onSignIn(googleUser) {
  const idToken = googleUser.getAuthResponse().id_token
  axios({
    url: `${baseUrl}/loginGoogle`,
    method: 'post',
    dataType: 'json',
    data: { idToken }
  })
    .then(({ data }) => {
      localStorage.setItem('token', data.token)
      localStorage.setItem('_id', data._id)
      localStorage.setItem('name', data.name)
      localStorage.setItem('email', data.email)
      hasToken()
    })
    .catch((err) => {
      console.log(err)
    })
}

function signOut() {
  localStorage.clear()
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
  noToken()
}