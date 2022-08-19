import Vue from "vue";

function isDesctop() {
    const notDesctop = window.matchMedia('(hover:none)').matches &&
    ('ontouchstart' in window ||
    window.DocumentTouch && document instanceof window.DocumentTouch ||
    navigator.maxTouchPoints > 0 ||
    window.navigator.msMaxTouchPoints > 0);

    return !notDesctop;
}

Object.defineProperty(Vue.prototype, "isDesctop", {
    value: isDesctop(),
    writable: true
});

window.addEventListener('resize', () => {
    Vue.prototype.isTouchable = isDesctop();
});
