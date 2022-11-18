import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProduct, fetchProductsList } from './helpers/fetchFunctions';
import { createCartProductElement, createProductElement } from './helpers/shopFunctions';
import { saveCartID } from './helpers/cartFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const elementUl = document.querySelector('.products');

const addToCardBtn = document.querySelector('.products');

const loadingScreen = () => {
  const loading = document.createElement('p');
  loading.innerText = 'carregando...';
  loading.classList.add('loading');
  elementUl.appendChild(loading);
};

const loadedScreen = () => {
  document.querySelector('.loading').remove();
};

const createElementList = async () => {
  try {
    loadingScreen();
    const elementList = await fetchProductsList('computador');
    loadedScreen();
    elementList.forEach((element) => {
      const list = createProductElement(element);
      elementUl.appendChild(list);
    });
  } catch (error) {
    loadedScreen();
    const apiFailed = document.createElement('h2');
    apiFailed.classList.add('error');
    elementUl.appendChild(apiFailed);

    apiFailed.innerText = 'Algum erro ocorreu, recarregue a página e tente novamente';
  }
};

const addItemCard = () => {
  addToCardBtn.addEventListener('click', async (event) => {
    const productId = event.target.parentNode.firstChild.innerText; // Agradecer aos colegas que me ajudaram nesse parentNode
    saveCartID(productId);
    const getProduct = await fetchProduct(productId);
    const elementOl = document.querySelector('.cart__products');
    elementOl.appendChild(createCartProductElement(getProduct));
  });
};

window.onload = () => {
  createElementList();
  addItemCard();
};
