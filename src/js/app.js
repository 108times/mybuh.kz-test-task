import { multipleRippleEffect } from "./ripple/ripple.js";
import { showAction } from "./utils.js";
import { enableSwipers } from "./swiper.js";

window.showAction = showAction;

const enableRipple = () => {
  document.addEventListener("mousedown", function (event) {
    console.log(event.target.dataset);
    if (event.target.dataset.effect !== "ripple") return 1;
    multipleRippleEffect(event, { onRippleStart });
    function onRippleStart() {}
  });
};
document.addEventListener("DOMContentLoaded", () => {
  enableRipple();
  window.swipers = enableSwipers();
});
