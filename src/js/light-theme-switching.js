import { bodyElement, Theme } from './variables';

export default function () {
  bodyElement.classList.remove(Theme.DARK);
  bodyElement.classList.add(Theme.LIGHT);
  localStorage.setItem('theme', Theme.LIGHT);
}
