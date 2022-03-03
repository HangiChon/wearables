require("dotenv").config();
const { MONGO_URI } = process.env;
const MongoClient = require("mongodb/lib/mongo_client");
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// client connect
const activateConn = async (client, dbName, colName) => {
  await client.connect();
  console.log("connected");
  const db = client.db(dbName);
  const col = await db.collection(colName);
  return col;
};

// client disconnect
const deactivateConn = async (client) => {
  await client.close();
  console.log("disconnected");
};

// response format
const response = (res, code, msg, result) => {
  return res.status(code).json({ status: code, data: result, message: msg });
};

/*
 *************************
 *   GET ALL PRODUCTS    *
 *************************
 */
const getAllProducts = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    const conn = await activateConn(client, "EP_database", "items");
    
    const limit = parseInt(req.query.limit)
    const offset = parseInt(req.query.page) * limit

    await conn.find()
    .skip(offset)
    .limit(limit)
    .toArray((err, result) => {
      if (err) {
        response(res, 404, "Data Not Found");
      } else {
        response(res, 200, "Successfully retrieved all items", result);
      }
      deactivateConn(client);
    });
  } catch (error) {
    response(res, 500, "Server Error");
  }
};

/*
 *************************
 *   GET ALL BRANDS      *
 *************************
 */
const getAllBrands = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    const conn = await activateConn(client, "EP_database", "companies");
    await conn.find().toArray((err, result) => {
      if (err) {
        response(res, 404, "Data Not Found");
      } else {
        response(res, 200, "Successfully retrieved all companies", result);
      }
      deactivateConn(client);
    });
  } catch (error) {
    response(res, 500, "Server Error");
  }
};

/*
 *************************
 *   GET SINGLE PRODUCT  *
 *************************
 */
const getSingleProduct = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const _id = JSON.parse(req.params.productId);

  try {
    const conn = await activateConn(client, "EP_database", "items");
    await conn.findOne({ _id }, (err, result) => {
      if (err) {
        response(res, 404, "Item Not Found");
      } else {
        response(res, 200, "Successfully retrieved the item", result);
      }
      deactivateConn(client);
    });
  } catch (error) {
    response(res, 500, "Server Error");
  }
};

/*
 *************************
 *   GET SINGLE BRAND    *
 *************************
 */
const getSingleBrand = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const { brandName } = req.params;

  try {
    const limit = parseInt(req.query.limit)
    const offset = parseInt(req.query.page) * limit

    const conn = await activateConn(client, "EP_database", "companies");

    // grab company id based on req.params.brandName
    const { _id } = await conn.findOne(
      { name: brandName },
      { projection: { _id: 1 } }
    );

    // using company id, return all items from that company
    const result = await client
      .db("EP_database")
      .collection("items")
      .find({ companyId: _id })
      .skip(offset)
      .limit(limit)
      .toArray();

    result.length
      ? response(res, 200, "Successfully retrieved the item", result)
      : response(res, 404, "Item Not Found");

    deactivateConn(client);
  } catch (error) {
    response(res, 500, "Server Error");
  }
};

/*
 *************************
 *   GET ALL CATEGORIES  *
 *************************
 */
const getAllCategories = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    const conn = await activateConn(client, "EP_database", "items");
    const categories = await conn.distinct("category");

    categories.length
      ? response(res, 200, "Successfully retrieved categories", categories)
      : response(res, 404, "Categories Not Found");

    deactivateConn(client);
  } catch (error) {
    response(res, 500, "Server Error");
  }
};

/*
 *************************
 *   GET SINGLE CATEGORY *
 *************************
 */
const getSingleCategory = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const { categoryName } = req.params;

  try {
    const limit = parseInt(req.query.limit)
    const offset = parseInt(req.query.page) * limit

    const conn = await activateConn(client, "EP_database", "items");
    const itemsPerCat = await conn.find({ category: categoryName })
    .skip(offset)
    .limit(limit)
    .toArray()

    itemsPerCat.length
      ? response(res, 200, "Successfully retrieved categories", itemsPerCat)
      : response(res, 404, "Categories Not Found");

    deactivateConn(client);
  } catch (error) {
    response(res, 500, "Server Error");
  }
};

/*
 *************************
 *   POST ORDER          *
 *************************
 */
const createOrder = async (req, res) => {
  //For now, no connection to DB is needed
  //Will simply return value "success"
  //Data validation to be handled by FE
  response(res, 200, "Order created!", req.body);
};

/*
 *************************
 *   PATCH UPDATE STOCK  *
 *************************
 */
//URL params: productId
//req.body must contain: quantity to remove
const updateStock = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const _id = JSON.parse(req.params.productId);

  const values = {
    $inc: {
      numInStock: -req.body.quantity,
    },
  };

  try {
    const conn = await activateConn(client, "EP_database", "items");

    const update = await conn.updateOne({ _id }, values);

    update
      ? response(res, 200, "Item quantity updated", req.body)
      : response(res, 404, "Item not found", req.body);
  } catch (error) {
    response(res, 500, "Server Error");
  }
  deactivateConn(client);
};

module.exports = {
  getAllProducts,
  getAllBrands,
  getSingleProduct,
  getSingleBrand,
  getAllCategories,
  getSingleCategory,
  createOrder,
  updateStock,
};
