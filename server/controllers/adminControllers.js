const connection = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();


class adminController {

  //1.Crear administrador
  //localhost:4000/admin/createAdmin

  createAdmin = (req, res) => {
    console.log("esto es el reeeeqqqqqqqq", req.body);

    const { name, lastname, address, phone, email, password } = req.body;
       
     let saltRounds = 8;
     bcrypt.genSalt(saltRounds, function (err, saltRounds) {
      bcrypt.hash(password, saltRounds, function (err, hash) {
     
     let sql = `INSERT INTO adminuser (name, lastname, phone, address, email, password) VALUES ( '${name}','${lastname}','${phone}','${address}','${email}','${hash}' )`;

         connection.query(sql, (error, result) => {
           console.log(error);
           error
             ? res.status(400).json({ error })
             : res.status(200).json(result);
         });
       });
     });
  };


  //-------------------------------------------------  
  //2.- Login
  //localhost:4000/users/login
  login = (req, res) => {
    console.log(req.body);
    // let { email, password } = req.body;
    // let sql = `SELECT * FROM user WHERE email = '${email}'`;

    // connection.query(sql, (error, result) => {
    // //en caso de error en la consulta
    //  if (error) return res.status(400).json(error);

    // //en caso de no encontrar un user con dicho user_name o mail.
    //    if (!result || !result.length) {
    //        res.status(401).json("Usuario no registrado");
    //    } else {
    //  //en caso de que el mail o user_name SEA correcto
    //  //aqui lo estamos haciendo con el mail
    //       const [user] = result;
    //       const hash = user.password;

    //    //capturo el user_id
    //      const user_id = user.user_id;

    //    //compramos contraseñas
    //    bcrypt.compare(password, hash, (error, response) => {
    //        if (error) throw error;
    //        //si las contraseñas coinciden
    //        if (response === true) {
    //          const token = jwt.sign(
    //            {
    //              user: {
    //                email: user.email,
    //                name: user.name,
    //                id: user_id,
    //                type: user.type,
    //              },
    //            },
    //            process.env.SECRET,
    //            { expiresIn: "10d" }
    //          );
    //          res.status(200).json({ token });
    //          //si las contraseñas coinciden
    //        } else {
    //          res.status(401).json("Usuario y contraseña incorrectos");
    //        }
    //      });
    //    }
    //  });
  };
  
  

}
module.exports = new adminController();
