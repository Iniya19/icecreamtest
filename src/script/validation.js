$("#sendMail").on("click", function() {
  var name = $("#name").val().trim();
  var email = $("#email").val().trim();
  var phone = $("#phone").val().trim();
  var message = $("#commentary").val().trim();
  var pattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if(name === "" && email === "" && phone === ""){
    $("#error").text("Fill out the form.");
    return false;
  }
  else if (name == "") {
      $("#error").text("Please, enter your name.");
      return false;
  }
   else if (name.length <= 3) {
      $("#error").text("Your name is too short. It should consist of at least 4 symbols!");
      return false;
  }
   else if (phone == "") {
      $("#error").text("Please, enter your phone number.");
      return false;
  }
   else if (isNaN(phone) || phone.length <= 8 ) {
    $("#error").text("Wrong number!");
    return false;
    }
   else if (email.length < 6) {
  	$("#error").text("The email address is too small.");
  	return false;
  } 
   else if (pattern.test(email) == false){
    $("#error").text("Email address you entered doesn't exist!");
    return false;
}
  else {
      alert("Your order has been received. We will reach out to you as soon as possible!");
    }

    $("#error").text("");

  //   $.ajax({
  // 	url: 'mail.php',
  // 	type: 'POST',
  // 	cache: false,
  // 	data: { 'name': name, 'email' : email, 'phone' : phone, 'commentary' : message },
  // 	dataType: 'html',
  //   beforeSend: function () {
  //   	$("#sendMail").prop("disabled", true);
  //   },
  //   success: function(data) {
  //   	if(!data)
  //   		alert("Error! Your order hasn't been delivered. Try again!");
  //   	else
  //   		alert("Your order has been delivered!");
  //   		$("#form").trigger("reset");
  //   	$("#sendMail").prop("disabled", false);
  //   }
  // })
    
});