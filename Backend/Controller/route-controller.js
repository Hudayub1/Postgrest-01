const db = require('../DB/queries');


getUsernames = async (req, res) => {
    const searchTerm = req.query.search;
    console.log('Search term:', searchTerm)

    const usernames = searchTerm 
        ? await db.searchUsername()
        : await db.getAllUsernames();
    console.log('Usernames:', usernames);
    res.send({
        usernames: usernames.map(user => user.username),
        searchTerm,
        count: usernames.length
    });
    
}

createUsernameGet = async (req,res) => {
    res.render('form')
}
createUsernamePost = async (req,res) => {
    const {username} = req.body;
    await db.insertUsername(username);
    res.redirect('/')
}

deleteUsernameGet = async (req,res) => {
    res.render('usernames')
}
deleteUsernamePost = async (req,res) => {
    await db.deleteAllUsername()
    res.redirect('/')
}



module.exports = {
    getUsernames,
    createUsernameGet,
    createUsernamePost,
    deleteUsernameGet,
    deleteUsernamePost
};


