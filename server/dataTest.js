const fs = require("fs");

const companies = JSON.parse(fs.readFileSync("data/companies.json"));
const items = JSON.parse(fs.readFileSync("data/items.json"));

const updatedArr = [];

// companies
// companies.forEach((item) => {
//   updatedArr.push({
//     name: item.name,
//     url: item.url,
//     country: item.country,
//     _id: item._id,
//   });
// });

// items
items.forEach((item) => {
  updatedArr.push({
    name: item.name,
    price: item.price,
    body_location: item.body_location,
    category: item.category,
    imageSrc: item.imageSrc,
    numInStock: item.numInStock,
    _id: item._id,
    companyId: item.companyId,
  });
});

console.log(updatedArr);

fs.writeFileSync("data/fixedItems.json", JSON.stringify(updatedArr));
