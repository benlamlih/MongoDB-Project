const Orders = require('../model/order.model');
const Items = require('../model/item.model');


/**
 * Récupère la liste des commandes d'un utilisateur par son id
 * @param {string} req.params.id id de l'utilisateur
 */
exports.getByUserId = (req, res) => {

};

/**
 * Crée une nouvelle commande
 * @param {string} req.body informations de la commande à créer
 */
exports.create = (req, res) => {
    let order = new Orders();
    let itemList = [];
    order.basket = req.body.basket.forEach(element => {
        let item = new Items();
        item.id = element.id;
        item.quantity = element.quantity;
        itemList.push(item);
    });
    order.basket = itemList;
    order.user_id = req.body.userId;
    order.save();
    res.status(200).json({ order });
};