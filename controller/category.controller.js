const Categories = require('../model/category.model');
const Product = require('../model/product.model');

/**
 * Récupère les categories
 */
exports.getAll = (req, res, next) => {

};


/**
 * Récupère une categorie par son id
 * @param {string} req.params.id id du categorie à récupérer
 */
exports.get = (req, res, next) => {

};

/**
 * Crée une nouvelle categorie
 * @param {string} req.body informations de la categorie à créer
 */
exports.create = (req, res) => {
    let category = new Categories();
    category.name = req.body.name;
    category.description = req.body.description;
    category.save();
    res.status(200).json({ category });
};

/**
 * Supprime une categorie par son id
 * @param {string} req.params.id id de la categorie à supprimer
 */
exports.delete = async (req, res, next) => {
    let category = await Categories.findOne({ _id: req.params.id });
    if (category) {
        category.delete();
        Product.deleteOne({ category_id: req.params._id });
        res.status(200).json({ message: "Category deleted" });
    } else {
        res.status(404).json({ message: "Category not found" });
    } 
};