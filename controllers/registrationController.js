const {emailValidation, passwordValidation} = require('../helpers/validation')

const registrationController = (req, res) => {
  const { name, email, password } = req.body;


  if (!name) {
    res.send("Name Required");
  } else if (!email) {
    res.send("Email Required");
  } else if (!password) res.send("Password Required");
  else{
    if(email){
        // console.log(emailValidation(email));
        if(!emailValidation(email)){
            return res.send('Valid Email Required')
        }
    }
    if(password){
        if(!passwordValidation(password)){
            return res.send('Min 1 uppercase letter. Min 1 lowercase letter. Min 1 special character.Min 1 number.Min 8 characters.Max 30 characters.')
        }
    }
    res.send("Registration Done")
  }
};





module.exports = registrationController;
