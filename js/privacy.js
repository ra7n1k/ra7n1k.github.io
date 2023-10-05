const head = document.querySelector("head");
const fMeta = document.querySelector("meta[charset='utf-8']");
const dialog = document.querySelector("dialog");
const agree = document.getElementById("agree");
const disagree = document.getElementById("disagree");

const loadScripts = () => {
    const gtagScript = document.createElement('script');
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-9ERDK1NF68';
    gtagScript.async = true;
    
    const clarityScript = document.createElement('script');
    clarityScript.type = 'text/javascript';
    clarityScript.innerHTML = `
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){
                (c[a].q=c[a].q||[]).push(arguments)
            };
            t=l.createElement(r);
            t.async=1;
            t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];
            y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "j4srpthos2");
    `;

    document.head.insertBefore(gtagScript, fMeta);
    document.head.insertBefore(clarityScript, fMeta);

    gtagScript.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'G-9ERDK1NF68');
    };
};

window.onload = () => {
    const consent = localStorage.getItem("consent");
    if (consent === "true") {
        loadScripts();
        dialog.close();
    } else if (consent === "false") {
        dialog.close();
    } else {
        dialog.showModal();
    }
};

agree.onclick = () => {
    localStorage.setItem("consent", "true");
    loadScripts();
    dialog.close();
};

disagree.onclick = () => {
    localStorage.setItem("consent", "false");
    dialog.close();
};
