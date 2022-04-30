import { multipleRippleEffect } from "./ripple/ripple.js";
import { showAction } from "./utils.js";

window.showAction = showAction;

const enableRipple = () => {
  document.addEventListener("mousedown", function (event) {
    if (event.target.dataset.effect !== "ripple") return 1;
    multipleRippleEffect(event, { onRippleStart });
    function onRippleStart() {}
  });
};
document.addEventListener("DOMContentLoaded", () => {
  enableRipple();
});
