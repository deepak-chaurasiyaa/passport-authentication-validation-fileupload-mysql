const {getUserByUserEmail} = require('../models/superadmin.model')
const { sign } = require("jsonwebtoken");
const {compareSync } = require("bcrypt");
module.exports = {
    
    login: (req, res) => {
        const body = req.body;
        getUserByUserEmail(body.email, (err, results) => {
          if (err) {
            console.log(err);
          }
          if (!results) {
            return res.json({
              success: 0,
              data: "Invalid email or password"
            });
          }
          const result = compareSync(body.password, results[0].password);
          
          if (result) {
              {
                  console.log("result 71", result)
              }
            results.password = undefined;
            const jsontoken = sign({id:results[0].id,Name: results[0].firstName + " " + results[0].lastName, isSuperAdmin:true }, process.env.secret_key, {
              expiresIn: "1h"
            });
            return res.json({
              success: 1,
              message: "login successfully",
              token: jsontoken
            });
            } else {
                return res.json({
                success: 0,
                data: "Invalid email or password"
                });
            }
        });
    },
    
}