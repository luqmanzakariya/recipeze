const baseUrl = `http://localhost:3000`

$(document).ready(function () {
  isLogin()
  renderButton()
  $('#form-nutrition').submit(function(event){
    console.log('masuk')
    event.preventDefault()
    let input={
      food: $('#input-food').val(),
      nutrition: $('#input-nutrition').val()
    }
    getNutrition(input)
  })
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


//============= Get Nutrition =============
function getNutrition(input){
  console.log('masuk', input)
  axios({
    url: `${baseUrl}/nutrition/?food=${input.food}&nutrition=${input.nutrition}`,
    method: 'get',
    dataType: 'json',
  })
    .then(({data})=>{
      if (data.answer){
        Swal.fire({
          title: '<strong>Nutrition <u>Info</u></strong>',
          html:
          `<img src="${data.image}" alt="Image Food"><br>` +
            `${data.answer}`,
          showCloseButton: true,
          showCancelButton: false,
          focusConfirm: false,
        })
      }
      else {
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Info Not Found!',
        })
      }
    })
    .catch((err)=>{
      console.log(err)
    })
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
  $('.signInBox').hide()
  // $('#buttonSignIn').hide()
  $('#buttonSignOut').show()
}

function noToken() {
  $('.signInBox').show()
  // $('#buttonSignIn').show()
  $('#buttonSignOut').hide()
}

//============= Google Signin =============
function onSignIn(googleUser) {
  console.log('masuk google nih')
  const idToken = googleUser.getAuthResponse().id_token
  axios({
    url: `${baseUrl}/users/loginGoogle`,
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