/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/
const transactions = [{
  id: 1,
  timestamp: 1656076800000,
  price: 10,
  category: 'Food',
  itemName: 'Pizza',
}, {
  id: 2,
  timestamp: 1656076800000,
  price: 100,
  category: 'Games',
  itemName: 'GOW',
}
, {
  id: 3,
  timestamp: 1656076800000,
  price: 20,
  category: 'Food',
  itemName: 'ButterNan',
},
{
  id: 4,
  timestamp: 1656076800000,
  price: 56,
  category: 'Games',
  itemName: 'Elden Ring',
}]
function calculateTotalSpentByCategory(transactions) {
  const output = [];
  const categories = [];

  transactions.forEach(item => {
    if (!categories.includes(item.category)) {
      categories.push(item.category);
      output.push({ category: item.category, totalSpent: item.price });
    } else {
      output[categories.indexOf(item.category)].totalSpent += item.price;
    }
  });

  return output;
}
console.log(calculateTotalSpentByCategory(transactions));
module.exports = calculateTotalSpentByCategory;

