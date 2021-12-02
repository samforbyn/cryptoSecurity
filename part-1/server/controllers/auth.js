const users = []
const bcrypt = require("bcryptjs")

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        const existingUser = bcrypt.compareSync(password, users[i].pwHash)
        if (users[i].username === username) {
          if(existingUser){
            let userReturn = {...users[i]}
            delete userReturn.pwHash
           res.status(200).send(users[i])
           console.log("YES")
           return
          }
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        console.log('Registering User')
        console.log(req.body)

        const {username, email, firstName, lastName, password} = req.body
        let salt = bcrypt.genSaltSync(5)
        let pwHash = bcrypt.hashSync(password, salt)

        let userObj = {
          username,
          email,
          firstName,
          lastName,
          pwHash,
        }

        // console.log(pwHash, password)
        users.push(userObj)
        console.log(req.body, "--- userObj")
        delete req.body.password 
        res.status(200).send(req.body)
        console.log(userObj, "UPDATED")
    }
}