
const Products = require('../../../model/productSchema')

const createProductsController = (req, res)=>{
    const {name, description, variant} = req.body;

    const product = new Products({
        name: name,
        description: description,
        variant: variant
    })
    product.save()

    res.send({success: "data send database"})
    console.log(product);

}

module.exports = createProductsController