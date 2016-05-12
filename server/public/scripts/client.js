var nodeteers ;

$(document).ready(function() {


  getData();

  $('.container').on('click', '.like', function(){
    addLikes($(this).parent().parent().find('.name').text(), $(this).parent().find('.like-count'));


    //update like function

  });




  function getData() {
    $.ajax({
      type: 'GET',
      url: '/bios',
      success: function(data) {
        nodeteers = data.howmees;

        PostPersons();
      }
    });
  }
  function addLikes(name, target){
    $.ajax({
      type: 'POST',
      url: 'likes/' + name,
      success: function(response){
        console.log(response);
        target.text('+' + response);
      }
    })
  }


  function PostPersons(){
    for( var i = 0; i < nodeteers.length; i++){
      $('.container').append('<div class="user-container" ><h2 class="name">' + nodeteers[i].name + '</h2><div class="img-container"><img src="' + nodeteers[i].url + '"/></div><div class="button-container"><button class="like">Like</button><p class="like-count"></p></div><p class=bio>' + nodeteers[i].bio + '</p><div class="url-container"><a href="' + nodeteers[i].url + '">' + nodeteers[i].url + '</a></div>')
    }

  }

});




// function postData() {
//   event.preventDefault();
//
//   $.ajax({
//     type: 'POST',
//     url: '/data',
//     data: values,
//     success: function(response) {
//       console.log(response);
//     }
//   })
// }
