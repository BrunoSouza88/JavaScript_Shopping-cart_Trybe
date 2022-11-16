export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (QUERY) => {
  if (!QUERY) throw new Error('Termo de busca não informado');

  const UrlQuery = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`);
  const result = await UrlQuery.json();
  return result.results;
};
