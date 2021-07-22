import darkThemeSwitching from './dark-theme-switching';
import lightThemeSwitching from './light-theme-switching';

export default function (event) {
  if (event.target.checked) {
    darkThemeSwitching();
  } else {
    lightThemeSwitching();
  }
}
