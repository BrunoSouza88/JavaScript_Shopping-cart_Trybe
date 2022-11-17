import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const elementUl = document.querySelector('.products');

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
  loadingScreen();
  const elementList = await fetchProductsList('computador');
  loadedScreen();
  elementList.forEach((element) => {
    const list = createProductElement(element);
    elementUl.appendChild(list);
  });
};

window.onload = () => {
  createElementList();
};
