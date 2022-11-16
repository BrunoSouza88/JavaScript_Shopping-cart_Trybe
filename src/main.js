import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const elementUl = document.querySelector('.products');

const createElementList = async () => {
  const elementList = await fetchProductsList('computador');
  elementList.forEach((element) => {
    const list = createProductElement(element);
    elementUl.appendChild(list);
  });
};

window.onload = () => {
  createElementList();
};
