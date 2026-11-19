const datelefthour = 23;
const dateleftminute = 59;
const dateleftsecond = 59;

const updatepricetext = document.getElementById("timeleft")

function updatelimited() {
    let date = new Date();

    let datenowhour = date.getHours();
    let datenowminute = date.getMinutes();
    let datenowsecond = date.getSeconds();  

    let newhour = datelefthour - datenowhour;
    let newminute = dateleftminute - datenowminute;
    let newsecond = dateleftsecond - datenowsecond;
    if (newsecond < 10) {
        newsecond = "0" + newsecond;
    }
    if (newminute < 10) {
        newminute = "0" + newminute;
    }
    if (newhour < 10) {
        newhour = "0" + newhour;
    }

    updatepricetext.innerHTML = ("// koop nu! " + String(newhour) + " : " + String(newminute) + " : " + String(newsecond) );
}

updatelimited()

setInterval(updatelimited, 1000);