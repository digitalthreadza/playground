import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { setupThemeSwitcher } from './themeSwitcher.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript + Zustand</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <div class="card">
      <button id="counterReceiver" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

// Add theme switcher button
const themeButton = document.createElement('button')
themeButton.className = 'theme-switcher'
themeButton.id = 'theme-switcher'
document.body.appendChild(themeButton)

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
setupCounter(document.querySelector<HTMLButtonElement>('#counterReceiver')!)
setupThemeSwitcher(document.querySelector<HTMLButtonElement>('#theme-switcher')!)