import { setupCounter } from "./counter.ts";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    변경 전
    <button id="counter">0</button>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
