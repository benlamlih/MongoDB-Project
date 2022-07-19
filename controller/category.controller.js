const Category = require('../model/category.model');

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
    let category = new Category();
    category.name = req.body.name;
    category.description = req.body.description;
    category.save();
    res.status(200).json({ category });
};

/**
 * Supprime une categorie par son id
 * @param {string} req.params.id id de la categorie à supprimer
 */
exports.delete = (req, res, next) => {

};