export const fetchProduct = async (productID) => {
  if (!productID) throw new Error('ID não informado');

  const urlProductID = await fetch(`https://api.mercadolibre.com/items/${productID}`);
  const resultID = urlProductID.json();
  return resultID;
};

export const fetchProductsList = async (QUERY) => {
  if (!QUERY) throw new Error('Termo de busca não informado');

  const urlQuery = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`);
  const result = await urlQuery.json();
  return result.results;
};
