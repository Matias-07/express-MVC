let listControllers = {
        'list': function(req,res){
           let users = ['Dario' , 'Javier', 'Matias','Agustin','silvana','gabriel',]
            res.render('userList', {'users': users})
        }
}


module.exports = listControllers