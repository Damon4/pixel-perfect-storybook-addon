var rootSelector = "#storybook-root";
var overlayId = "pixel-perfect-overlay";
export var renderOverlay = function renderOverlay(_ref) {
  var src = _ref.src,
    opacity = _ref.opacity,
    colorInversion = _ref.colorInversion;
  var root = document.querySelector(rootSelector);
  if (!root) return;
  var rootRect = root.getBoundingClientRect();
  var existingOverlay = root.querySelector("#".concat(overlayId));
  if (!existingOverlay) {
    var newOverlay = document.createElement("img");
    newOverlay.setAttribute("id", overlayId);
    newOverlay.setAttribute("alt", "pixel perfect overlaying image");
    newOverlay.style.position = "absolute";
    newOverlay.style.top = "".concat(rootRect.top, "px");
    newOverlay.style.left = "".concat(rootRect.left, "px");
    newOverlay.style.zIndex = "100000";
    newOverlay.style.pointerEvents = "none";

    // Customizations
    newOverlay.setAttribute("src", src);
    newOverlay.style.opacity = "".concat(opacity);
    newOverlay.style.filter = colorInversion ? "invert(1)" : "none";
    root.appendChild(newOverlay);
  } else {
    if (existingOverlay.getAttribute("src") !== src) {
      existingOverlay.setAttribute("src", src);
    }
    if (Number(existingOverlay.style.opacity) !== opacity) {
      existingOverlay.style.opacity = "".concat(opacity);
    }
    var isInverted = existingOverlay.style.filter === "invert(1)";
    if (isInverted !== colorInversion) {
      existingOverlay.style.filter = colorInversion ? "invert(1)" : "none";
    }
  }
};
export var removeOverlay = function removeOverlay() {
  var overlay = document.querySelector("".concat(rootSelector, " #").concat(overlayId));
  if (!overlay) return;
  overlay.remove();
};