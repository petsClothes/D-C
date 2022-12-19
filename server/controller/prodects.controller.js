const Product = require("../model/products.model");

const GetAllProducts = async (req, res) => {
  const allProducts = await Product.find({});
  try {
    res.status(200).json(allProducts);
  } catch (err) {
    res.json(err);
  }
};
const getOneProduct = async (req, res) => {
  try {
    await Product.find({ name: req.params.name }).then((result) => {
      res.status(200).json(result)
    });
  } catch (error) {
    res.status(404).json(error)
  }
};
const addProduct = async (req, res) => {
  const newProduct = new Product({
    type:req.body.type,
    productname: req.body.productname,
    categorie: req.body.categorie,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
    desciption: req.body.desciption,
  });
  try {
    await newProduct.save().then((result) => {
      res.status(201).json({ message: "added success" });
    });
  } catch (error) {
    res.status(404).json(error);
  }
};
const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  try {
    res.status(201).json({ message: " success to delete product " });
  } catch (error) {
    res.status(404).json(error);
  }
};

const updateProdect = async (req, res) => {
  await Product.findByIdAndUpdate(req.params.id, req.body);
  try {
    res.status(201).json({ message: "update prodect success" });
  } catch (error) {
    res.status(404).json(error);
  }
};
const FiltercategoProduct = async (req, res) => {
  try {
    Product.find({ categorie: req.params.categorie })
    .then((result) => {
      res.status(201).json(result)
    });
  } catch (error) {
    res.status(404).json(error);
  }
};
const FiltertypeProduct = async (req, res) => {
  try {
    Product.find({ type: req.params.type })
    .then((result) => {
      res.status(201).json(result)
    });
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = {
  GetAllProducts,
  getOneProduct,
  addProduct,
  deleteProduct,
  updateProdect,
  FiltercategoProduct,
  FiltertypeProduct,
};
