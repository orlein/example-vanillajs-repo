import { setupCounter } from "./counter.ts";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    변경 전
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
