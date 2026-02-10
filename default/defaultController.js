
export default async function getHomePage(req, res){
    res.render('homepage',{user: req.user, files: null})
} 