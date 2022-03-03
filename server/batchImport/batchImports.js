const MongoClient = require("mongodb/lib/mongo_client");
require("dotenv").config({ path: "../../.env" });
const { MONGO_URI } = process.env;
const fixedCompanies = require("../data/fixedCompanies.json");
const fixedItems = require("../data/fixedItems.json");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

console.log(fixedCompanies);
console.log(fixedItems);

const batchImport = async () => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    console.log("connected");
    const db = client.db("EP_database");
    await db.collection("items").insertMany(fixedItems);
    await db.collection("companies").insertMany(fixedCompanies);
    client.close();
    console.log("closed");
  } catch (error) {
    console.log(error);
  }
};

batchImport();
