import { bodyElement, Theme } from "./variables";

export default function () {
  bodyElement.classList.remove(Theme.LIGHT);
  bodyElement.classList.add(Theme.DARK);
  localStorage.setItem('theme', Theme.DARK);
}
