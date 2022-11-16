import './mocks/fetchSimulator';
import { fetchProduct, fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function')
  });

  it('fetch é chamado ao executar fetchProductsList', () => {
    fetchProductsList('computador');
    expect(fetch).toHaveBeenCalled()
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    fetchProductsList('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador')
  });

  it(`Teste se o retorno da função fetchProductsList com o argumento 'computador' é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo.`, () => {
    fetchProductsList('computador');
    expect(fetch).toEqual(computadorSearch)
  });

  it(`Teste se, ao chamar a função fetchProductsList sem argumento, retorna um erro com a mensagem: 'Termo de busca não informado'.`, () => {
    fetchProductsList();
    expect(fetch).toThrow('Termo de busca não informado')
  })

  // it('...', () => {
  // });
});
