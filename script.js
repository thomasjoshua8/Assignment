function checkPassword(form) {
  password1 = form.password1.value;
  password2 = form.password2.value;

  if (password1 == ''){
    alert ("Please enter Password");
    return false;
  }

  else if (password2 == ''){
    alert ("Please enter confirm password");
    return false;
  }   
  else if (password1 != password2) {
    alert ("\nPassword did not match: Please try again...")
    return false;
  }
}

function testing(){
  console.log("it is working!!\n\ntesting");
}

testing();