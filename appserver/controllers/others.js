module.exports.about = (req, res) => {
    res.render('about', { title: 'about' });
};
module.exports.contact = (req, res) => {
    res.render('contact-us', { title: 'contact' });
};