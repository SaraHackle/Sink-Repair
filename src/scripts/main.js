import { fetchRequests } from "./dataAccess.js";
import { SinkRepair } from "./SinkRepair.js";
import { deleteRequest } from "./dataAccess.js";

const mainContainer = document.querySelector("#container");

mainContainer.addEventListener("click", (click) => {
  if (click.target.id.startsWith("request--")) {
    const [, requestId] = click.target.id.split("--");
    deleteRequest(parseInt(requestId));
  }
});

document.addEventListener("stateChanged", (CustomEvent) => {
  render();
  return CustomEvent;
});

const render = () => {
  fetchRequests().then(() => {
    mainContainer.innerHTML = SinkRepair();
  });
};

render();
