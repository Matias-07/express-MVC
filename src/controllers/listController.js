let fs = require('fs')

let listControllers = {
        'list': function (req, res) {
                let users = [{ id: 1, name: 'Dario' },
                { id: 2, name: 'Javier' },
                { id: 3, name: 'Matias' },
                { id: 4, name: 'Agustin' },
                { id: 5, name: 'silvana' },
                { id: 6, name: 'gabriel' }
                ]
                res.render('userList', { 'users': users })
        },
        'search': function (req, res) {
                let usersSearch = req.query.search;

                let users = [{ id: 1, name: 'Dario' },
                { id: 2, name: 'Javier' },
                { id: 3, name: 'Matias' },
                { id: 4, name: 'Agustin' },
                { id: 5, name: 'silvana' },
                { id: 6, name: 'gabriel' }
                ];

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
                
                let UserJSON = JSON.stringify(user); 

                fs.writeFileSync('usuarios.json', UserJSON )

                res.redirect('/list');
        },
        'edit': function(req,res) {
               let idUser = req.params.idUser; 

               let users = [{ id: 1, name: 'Dario' },
                { id: 2, name: 'Javier' },
                { id: 3, name: 'Matias' },
                { id: 4, name: 'Agustin' },
                { id: 5, name: 'silvana' },
                { id: 6, name: 'gabriel' }
                ];

                let userToEdit = users[idUser]

                res.render('userEdit', {userToEdit: userToEdit}); 
        } 
}; 



module.exports = listControllers 