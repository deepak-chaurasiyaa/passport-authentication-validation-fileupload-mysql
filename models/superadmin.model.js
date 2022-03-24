const pool = require('../configuration/database')
module.exports = {
  getUserByUserEmail: (email, callBack) => {
    pool.query(
      `select * from superadmin where email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    ); 
  },
}