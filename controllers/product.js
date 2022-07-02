const Product = require("../models/product") 

exports.createProduct = (req, res) => {
    const prod = new Product(req.body);


    prod.save((err, prod) => {
        if (err) {
            return res.json({err: "errororor"})
        }
        res.send(prod)
    })
}



exports.getProducts = (req, res) => {
    Product.find().exec((err, data) => {
        if (err) {
            return res.status(400).json(err);
        }
        res.send(data);
    })
}

