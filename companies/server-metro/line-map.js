const nsl = document.getElementById("ns-line-m");
const nslw = nsl.clientWidth;
const nsle = nsl.clientHeight;
const s = nslw / 1024;

const nslcs = document.getElementById("nsl-cs");
const nslefms = document.getElementById("nsl-efms");

nslcs.setAttribute("coords", (512 * s) + ", " + (512 * s) + ", " + (32 * s));
nslefms.setAttribute("coords", (512 * s) + ", " + (896 * s) + ", " + (32 * s));