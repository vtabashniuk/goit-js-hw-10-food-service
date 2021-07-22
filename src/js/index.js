import { bodyElement, themeSwitcher, Theme } from './variables';
import onChangeThemeToggle from './on-change-theme-toggle';
import menuTemplate from '../templates/menu-item.hbs';
import menu from '../menu.json';

themeSwitcher.addEventListener('change', onChangeThemeToggle);

const themeSaved = localStorage.getItem('theme');
if (themeSaved === null) {
  bodyElement.classList.add(Theme.LIGHT);
} else {
  bodyElement.classList.add(themeSaved);
  if (bodyElement.classList.contains(Theme.DARK)) {
    themeSwitcher.checked = true;
  }
}

const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('afterbegin', menuTemplate(menu));