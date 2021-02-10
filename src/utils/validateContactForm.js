module.exports.validateContactForm = ({
  yourName,
  email,
  subject,
  message,
}) => {
  const errors = {}
  // check if the firstname and lastname are empty
  if (yourName.trim() === "") {
    errors.yourName = "First name field cannot be left empty"
  }
  if (subject.trim() === "") {
    errors.subject = "Last name field cannot be left empty"
  }
  if (message.trim() === "") {
    errors.message = "Last name field cannot be left empty"
  }

  //check if the email is empty and then checked if the format matches that of an email
  if (email.trim === "") {
    errors.email = "Email field cannot be left empty"
  } else {
    const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/
    if (!email.match(regEx)) {
      errors.email = "Email must be a valid email address"
    }
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  }
}
