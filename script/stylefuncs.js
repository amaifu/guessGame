// Import Break
import { alertBox } from "./dom.js";

// Close LogReg Overlay
let scaleDown = e => {
    e = e.style.scale = '0'
    return e;
};
let scaleUp = e => {
    e = e.style.scale = '1'
    return e;
};

let tempAlertBox = (e, content) => {
    alertBox[e].innerHTML = content;
    scaleUp(alertBox[e]);
    setTimeout(()=> {
        scaleDown(alertBox[e]);
    },1500);
}

// Exports Break
export { scaleDown, scaleUp, tempAlertBox };