export const deserializeData = (data) => {
  let results = [];
  for (let key in data) {
    results.push({
      id: key,
      title: data[key].title,
      price: data[key].price,
      description: data[key].description,
      quantity: data[key].quantity,
    });
  }
  return results;
};
