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

