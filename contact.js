
console.log('test')
$(document).ready(function () {
  $('.submit').click(function (event) {
    event.preventDefault()
    console.log('click')

    var name = $('.name').val()
    var email = $('.email').val()
    var subject = $('.subject').val()
    var message = $('.email').val()
    var statusElm = $('status')
    statusElm.empty()

    if(email.length > 5 && email.includes('@') && email.includes('.')){
      statusElm.append('<div>Email is valid</div>')
    }else {
      statusElm.append('<div>Email is invalid</div>')
    }
  })
})