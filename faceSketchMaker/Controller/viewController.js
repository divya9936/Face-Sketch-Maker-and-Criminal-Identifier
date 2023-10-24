
const getLandingpage = (req,res) => {
    res.render("landingpage.ejs");
}
const getStartPage =(req,res)=>{
    res.render("startPage.ejs");
}
const getDocumentsPage=(req,res)=>{
    res.render("documentsPage.ejs")
}
const getSignIn=(req,res)=>{
    res.render("signIn.ejs")
}
const getSignUp=(req,res)=>{
    res.render("signUp.ejs")
}
module.exports.getLandingpage = getLandingpage;
module.exports.getStartPage = getStartPage;
module.exports.getDocumentsPage = getDocumentsPage;
module.exports.getSignIn = getSignIn;
module.exports.getSignUp = getSignUp;
