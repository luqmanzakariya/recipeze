const baseUrl = `http://localhost:3000`

$(document).ready(function () {
  isLogin()
  $('#submitData').submit(function (event) {
    event.preventDefault()
    let data = {
      gender: $('#gender').val(),
      height: $('#height').val(),
      weight: $('#weight').val(),
      age: $('#age').val(),
    }
    getBmi(data)
  })

  $('#form-nutrition').submit(function (event) {
    event.preventDefault()
    console.log('masuk')
    let input = {
      food: $('#input-food').val(),
      nutrition: $('#input-nutrition').val()
    }
    getNutrition(input)
  })
})

function getBmi(data) {
  axios({
    url: `${baseUrl}/getBmi`,
    method: 'post',
    data: data
  })
    .then(({ data }) => {
      console.log(data)
      $('#bmr').empty()
      $('#bmi').empty()
      $('#bmr').append(`<input class="formBox form-control col-sm-8" type="text" name="height" autocomplete="off"
    placeholder="${data.bmr}">`)
      $('#bmi').append(`<input class="formBox form-control col-sm-8" type="text" name="height" autocomplete="off"
    placeholder="${data.result.toFixed(1)}">`)
    })
    .catch(err => {
      console.log(err)
    })
}



// function onSuccess(googleUser) {
//   console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
// }

// function onFailure(error) {
//   console.log(error);
// }

// function renderButton() {
//   gapi.signin2.render('my-signin2', {
//     'scope': 'profile email',
//     'width': 230,
//     'height': 40,
//     'longtitle': true,
//     'theme': 'light',
//     'onsuccess': onSuccess,
//     'onfailure': onFailure
//   });
// }


//============= Get Nutrition =============
function getNutrition(input) {
  console.log('masuk', input)
  axios({
    url: `${baseUrl}/nutrition/?food=${input.food}&nutrition=${input.nutrition}`,
    method: 'get',
    dataType: 'json',
  })
    .then(({ data }) => {
      if (data.answer) {
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
    .catch((err) => {
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
  $('.beforeLogin').hide()
  $('#buttonSignOut').show()
  $('.afterLogin').show()
}

function noToken() {
  $('.signInBox').show()
  $('.beforeLogin').show()
  $('#buttonSignOut').hide()
  $('.afterLogin').hide()
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