var lang = window.localStorage.getItem('lang')
var langFR = document.getElementById('fr');
var langEN = document.getElementById('en');
var langAR = document.getElementById('ar');


function fr() {
    let myNavBar = document.links
    let myDiv1 = document.getElementsByClassName('header')[0]
    let myNameProducts = document.getElementsByTagName('h5')
    let vm = document.getElementsByClassName('vm') // for all View more
    let msgContact = document.querySelector('.p1')
    let myMode = document.getElementsByClassName('dropbtn')[1]
    let myModeDark = document.getElementById('dark')
    let myModeLight = document.getElementById('light')
    let myModeAuto = document.getElementById('auto')
    let myCart = document.getElementById('cart')

    myNavBar[1].textContent = 'Produit';
    myNavBar[2].textContent = 'Contact';
    myNavBar[3].textContent = 'Support';
    myNavBar[4].textContent = 'Propos';
    document.querySelector('.dropbtn').textContent = 'La langue ▼';
    langFR.textContent = 'Français';
    langEN.textContent = 'L\'Anglais';
    langAR.textContent = 'Arabe';
    myMode.textContent = 'Mode ▼'
    myModeDark.textContent = 'Mode nuit'
    myModeLight.textContent = 'Mode normal'
    myModeAuto.textContent = 'Mode automatique'
    myCart.textContent = 'Panier'

    myDiv1.innerHTML = '<h1>Bienvenue sur le site de <span>DRS Gaming</span></h1><br>\
                        <p>Le meilleur site d\'électronique au Maroc</p>\
                        <p>s\'il vous plait, Inscrivez-vous</p>\
                        <div class="log-sing">\
                        <input type="button" onclick="log()" value="Connexion" id="log">\
                        <input type="button" onclick="sing()" value="S\'inscrire" id="sing">\
                        </div>'



    myNameProducts[0].textContent = 'Carte graphique';
    myNameProducts[1].textContent = 'Casque de jeu';
    myNameProducts[2].textContent = 'Clavier de jeu';
    myNameProducts[3].textContent = 'Moniteurs de jeu';
    myNameProducts[4].textContent = 'Pack de jeu';
    myNameProducts[5].textContent = 'Ordinateur complet';
    myNameProducts[6].textContent = 'Joueur pc';
    myNameProducts[7].textContent = 'Souris de Jeu';

    for (let i of vm) {
        i.textContent = 'Voir plus'
    }

    msgContact.textContent = 'Pour plus d\'informations, contactez nous'

    window.localStorage.setItem('lang', 'fr') // change lang
    lang = window.localStorage.getItem('lang') // update variable lang
}

function en() {
    let myNavBar = document.links
    let myDiv1 = document.getElementsByClassName('header')[0]
    let myNameProducts = document.getElementsByTagName('h5')
    let vm = document.getElementsByClassName('vm') // for all View more
    let msgContact = document.querySelector('.p1')
    let myMode = document.getElementsByClassName('dropbtn')[1]
    let myModeDark = document.getElementById('dark')
    let myModeLight = document.getElementById('light')
    let myModeAuto = document.getElementById('auto')
    let myCart = document.getElementById('cart')


    myNavBar[1].textContent = 'Products';
    myNavBar[2].textContent = 'Contacts';
    myNavBar[3].textContent = 'Support';
    myNavBar[4].textContent = 'About';
    document.querySelector('.dropbtn').textContent = 'Language ▼';
    langFR.textContent = 'French';
    langEN.textContent = 'English';
    langAR.textContent = 'Arabic';
    myMode.textContent = 'Mode ▼';
    myModeDark.textContent = 'Night mode';
    myModeLight.textContent = 'Normal mode';
    myModeAuto.textContent = 'Auto mode';
    myCart.textContent = 'Cart'

    myDiv1.innerHTML = '<h1>Welcome to the <span>DRS Gaming</span> website</h1><br>\
    <p>The best electronics website in Morocco</p>\
    <p>please Sing up </p>\
    <div class="log-sing">\
    <input type="button" onclick="log()" value="Log in" id="log">\
    <input type="button" onclick="sing()" value="Sing up" id="sing">\
    </div>'

    myNameProducts[0].textContent = 'Graphic card';
    myNameProducts[1].textContent = 'Gaming headset';
    myNameProducts[2].textContent = 'Keyboard Gaming';
    myNameProducts[3].textContent = 'Monitors Gaming';
    myNameProducts[4].textContent = 'Pack Gaming';
    myNameProducts[5].textContent = 'PC Complete';
    myNameProducts[6].textContent = 'PC GAMER';
    myNameProducts[7].textContent = 'Mouse Gaming';

    for (let i of vm) {
        i.textContent = 'View more'
    }

    msgContact.textContent = 'For more information, please contact us'

    window.localStorage.setItem('lang', 'en') // change lang
    lang = window.localStorage.getItem('lang') // update variable lang
}


function ar() {
    let myNavBar = document.links
    let myDiv1 = document.getElementsByClassName('header')[0]
    let myNameProducts = document.getElementsByTagName('h5')
    let vm = document.getElementsByClassName('vm') // for all View more
    let msgContact = document.querySelector('.p1')
    let myMode = document.getElementsByClassName('dropbtn')[1]
    let myModeDark = document.getElementById('dark')
    let myModeLight = document.getElementById('light')
    let myModeAuto = document.getElementById('auto')
    let myCart = document.getElementById('cart')

    myNavBar[1].textContent = 'المنتجات';
    myNavBar[2].textContent = 'الاتصال';
    myNavBar[3].textContent = 'الدعم';
    myNavBar[4].textContent = 'حول';
    document.querySelector('.dropbtn').textContent = 'اللغة ▼';
    langFR.textContent = 'الفرنسية';
    langEN.textContent = 'الإنجليزية';
    langAR.textContent = 'العربية';
    myMode.textContent = 'الوضع ▼'
    myModeDark.textContent = 'الوضع الليلي';
    myModeLight.textContent = 'الوضع العادي';
    myModeAuto.textContent = 'الوضع الافتراضي';
    myCart.textContent = 'السلة'

    myDiv1.innerHTML = '<h1><span>DRS Gaming</span> مرحبا بكم في </h1><br>\
    <p>افضل موقع الكتروني في المغرب</p>\
    <p>المرجو التسجيل  في الموقع </p>\
    <div class="log-sing">\
    <input type="button" onclick="log()" value="الدخول" id="log">\
    <input type="button" onclick="sing()" value="التسجيل" id="sing">\
    </div>'

    myNameProducts[0].textContent = 'بطاقة الرسومات';
    myNameProducts[1].textContent = 'سماعة الألعاب';
    myNameProducts[2].textContent = 'لوحة المفاتيح';
    myNameProducts[3].textContent = 'شاشة الالعاب';
    myNameProducts[4].textContent = 'حزمة الألعاب';
    myNameProducts[5].textContent = 'كمبيوتر جاهز';
    myNameProducts[6].textContent = 'كمبيوتر العاب';
    myNameProducts[7].textContent = 'فأرة ألعاب';

    for (let i of vm) {
        i.textContent = 'رؤية المزيد'
    }

    msgContact.textContent = 'للمزيد من المعلومات يرجى التواصل عبر المواقع التالية';

    window.localStorage.setItem('lang', 'ar') // change lang
    lang = window.localStorage.getItem('lang') // update variable lang
}


if (lang == 'fr') {
    fr()
} else if (lang == 'ar') {
    ar()
} else {
    lang = window.localStorage.lang = 'en' // par defaut la lungage est English
}

langEN.onclick = () => {
    if (lang != 'en') {
        en()
    }
}
langFR.onclick = () => {
    if (lang != 'fr') {
        fr()
    }
}
langAR.onclick = () => {
    if (lang != 'ar') {
        ar()
    }
}