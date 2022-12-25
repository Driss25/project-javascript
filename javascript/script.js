function log() {
    window.open("pages/logIn.html", "", "top=500,left=500,width=920px,height=800px");
}

function sing() {
    window.open("pages/SingUp.html", "", "top=500,left=500,width=920px,height=800px")
}


function funCart() {
    window.open("pages/cart.html", "", "top=500,left=500,width=920px,height=800px");
}

let a = true;

function show_hide() {
    if (a) {
        document.getElementById("maps").style.display = "inline"
        return a = false
    } else {
        document.getElementById("maps").style.display = "none"
        return a = true
    }
}


/*****************MODE DARCK************* */
let mode = window.localStorage.getItem('mode')
let myModeDark = document.getElementById('dark')
let myModeLight = document.getElementById('light')
let myModeAuto = document.getElementById('auto')
let myStyle = document.getElementsByTagName('link')[1]


function funcModeDark() {
    myStyle.setAttribute('href', 'css/styleDark.css')
    window.localStorage.setItem('mode', 'dark')

}

function funcModeLight() {
    myStyle.setAttribute('href', 'css/style.css')
    window.localStorage.setItem('mode', 'light')
}

function funcModeAuto() {
    const time = new Date();
    if (time.getHours() >= 6 && time.getHours() < 20) {
        funcModeLight()
        window.localStorage.setItem('mode', 'auto')
    } else {
        funcModeDark()
        window.localStorage.setItem('mode', 'auto')
    }
}

if (mode == 'dark') {
    funcModeDark()
} else if (mode == 'light') {
    funcModeLight()
} else {
    funcModeAuto()
}

myModeDark.onclick = () => funcModeDark()
myModeLight.onclick = () => funcModeLight()
myModeAuto.onclick = () => funcModeAuto()

/*****************END********************* */


/*********cart*********** */
if (localStorage.getItem('products') == null || localStorage.getItem('products') == "null") {
    localStorage.setItem('products', '{}')
}


