const Product = require('../model/product.model');


/**
 * Récupère tous les produits 
 */
exports.getAll = async (req, res) => {
    let product = await Product.find();
    if (product){
        res.status(200).json({product});
    } else {
        res.status(404).json({message: "No products found"});
    }
};

/**
 * Récupère un produit par son id
 * @param {string} req.params.id id du produit à récupérer
 */
exports.get = async (req, res) => {
    let product = await Product.findOne({_id: req.params.id});
    if (product){
        res.status(200).json({product});
    }else{
        res.status(404).json({message: "Product not found"});
    }
};

/**
 * Récupère tous les produits dans la category donnée
 * @param {string} req.params.categoryId id de la categorie
 */
exports.getProductByCategoryId = async (req, res) => {
    let product = await Product.find({categoryId: req.params.categoryId});
    if (product){
        res.status(200).json({product});
    }else{
        res.status(404).json({message: "Product not found within this category"});
    }
}

exports.getProductByPriceRange = async (req, res) => {
    let minPrice = req.params.minPrice;
    let maxPrice = req.params.maxPrice;
    let product = await Product.find({$and:[
            {
                price:{$gt: minPrice}
            },
            {
                price:{$lt: maxPrice}
            }
        ]})
    if (product){
        res.status(200).json({product});
    }else{
        res.status(404).json({message: "Product not found within this price range"});
    }
}

/**
 * Crée un nouveau produit
 * @param {string} req.body informations du produit à créer
 */
exports.create = (req, res) => {
    let product = new Product();
    product.name = req.body.name;
    product.description = req.body.description;
    product.price = req.body.price;
    product.stock = req.body.stock;
    product.categoryId = req.body.categoryId;
    product.save();
    res.status(200).json({product});
};

/**
 * Modifie un produit par son id
 * @param {string} req.params.id id du produit à modifier
 * @param {string} req.body informations du produit à modifier
 */
exports.update = async(req, res, next) => {
    let product = await Product.findOne({_id: req.params.id});
    if (product){
        product.name = req.body.name;
        product.description = req.body.description;
        product.price = req.body.price;
        product.stock = req.body.stock;
        product.categoryId = req.body.categoryId;
        product.save();
        res.status(200).json({message: "Product updated"});
    }else{
        res.status(404).json({message: "Cannot update, product not found"});
    }
};

/**
 * Supprime un produit par son id
 * @param {string} req.params.id id du produit à supprimer
 */
exports.delete = async (req, res, next) => {

    let product = await Product.findOne({ _id: req.params.id });
    if (product) {
        product.delete();
        res.status(200).json({ message: "Product deleted" });
    } else {
        res.status(404).json({ message: "Product not found" });
    }
};