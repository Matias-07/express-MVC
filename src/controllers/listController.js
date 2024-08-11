let fs = require('fs')

let listControllers = {
        'list': function (req, res) {
                let archivoJSON = fs.readFileSync('usuarios.json', { encoding: 'utf-8' });

                let users = JSON.parse(archivoJSON);

                res.render('userList', { 'users': users })
        },
        'search': function (req, res) {

                let usersSearch = req.query.search;
              
                let archivoJSON = fs.readFileSync('usuarios.json', { encoding: 'utf-8' });

                let users = JSON.parse(archivoJSON);

                let usersResults = [];

                for (let i = 0; i < users.length; i++) {
                        if (users[i].name.includes(usersSearch)) {
                                usersResults.push(users[i]);
                        }
                }

                res.render('userResults', { usersResults: usersResults })

        },
        'create': function (req, res) {

                let user = {
                        nombre: req.body.nombre,
                        Hobbie_1: req.body.Hobbie_1,
                        Hobbie_2: req.body.Hobbie_2,
                        Edad: req.body.edad,
                        mail: req.body.email,
                }

                let archivoUsuarios = fs.readFileSync('usuarios.json', { encoding: 'utf-8' });
                let usuarios;
                if (archivoUsuarios === '') {
                        usuarios = [];
                } else {
                        usuarios = JSON.parse(archivoUsuarios)
                }

                usuarios.push(user);

                usuariosJSON = JSON.stringify(usuarios)

                fs.writeFileSync('usuarios.json', usuariosJSON)

                res.redirect('/list');
        },
        'edit': function (req, res) {
                let idUser = req.params.idUser;
                
                let archivoJSON = fs.readFileSync('usuarios.json', { encoding: 'utf-8' });

                let users = JSON.parse(archivoJSON);

                let userToEdit = users[idUser]

                res.render('userEdit', { userToEdit: userToEdit });
        }
};

module.exports = listControllers 