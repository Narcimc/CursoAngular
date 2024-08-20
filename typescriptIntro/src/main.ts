import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import './topic/basicTypes.ts'
import './topic/objectInterface.ts'
import './topic/funcion.ts'
import './topic/homewor.ts'
import './topic/basicEstructura.ts'
import './topic/funcionsDestructuring.ts'
import './topic/importExport.ts'
import './topic/clases.ts'
import './topic/generic.ts'
import './topic/decoratores.ts'
import './topic/opcionalChaining.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <h1>Holu</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
