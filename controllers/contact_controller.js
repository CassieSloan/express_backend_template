const contacts = [];


const index = (req, res) => {
    res.render("contacts/index", {contacts}) //{} similar to instance variables
    // Sending the data contacts to 'contacts/index' similar to the '@'in ruby
};

const newResource = (req, res) => {
    let {name, email} = req.body;
    let contact = {name, email};
    contacts.push(contact);
    res.redirect("/contacts");
};

const create = (req, res) => {
    res.render("contacts/form");
}

module.exports = {
    index, // if key is same as value, can just use the one word rather than index: index,
    newResource,
    create
}

