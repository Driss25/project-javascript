function log() {
    window.open("logIn.html", "", "top=500,left=500,width=920px,height=800px");
}

function sing() {
    window.open("SingUp.html", "", "top=500,left=500,width=920px,height=800px")
}
let a = true;

function show_hide() {
    if (a) {
        document.getElementById("maps").style.display = "inline"
        return a = false
    }
    if (!a) {
        document.getElementById("maps").style.display = "none"
        return a = true
    }
}


/*********************************** */
let mode = window.localStorage.getItem('mode')
let myModeDark = document.getElementById('dark')
let myModeLight = document.getElementById('light')
let myModeAuto = document.getElementById('auto')
let myStyle = document.getElementsByTagName('link')[1]

if (mode == 'dark') {
    funcModeDark()
} else if (mode == 'light') {
    funcModeLight()
} else if (mode == 'auto'){
    funcModeAuto()
} else  {
    //funcModeAuto()
}

function funcModeDark() {
    myStyle.setAttribute('href', '../css/pageStyleDark.css')
    window.localStorage.setItem('mode', 'dark')

}

function funcModeLight() {
    myStyle.setAttribute('href', '../css/pageStyle.css')
    window.localStorage.setItem('mode', 'light')
}

function funcModeAuto() {
    const time = new Date();
    if (time.getHours() >= 6 && time.getHours() <= 20) {
        funcModeLight()
    } else {
        funcModeDark()
    }
    window.localStorage.setItem('mode', 'auto')
}


myModeAuto.onclick = () => funcModeAuto()
myModeDark.onclick = () => funcModeDark()
myModeLight.onclick = () => funcModeLight()

/****************lang************** */
var lang = window.localStorage.getItem('lang')
var langFR = document.getElementById('fr');
var langEN = document.getElementById('en');
var langAR = document.getElementById('ar');


function fr() {
    let myNavBar = document.links
    let myDiv1 = document.getElementsByClassName('header')[0]
    let msgContact = document.querySelector('.p1')
    let mydSectionDiv = document.getElementById('divcontainner')
    let myMode = document.getElementsByClassName('dropbtn')[1]
    let myModeDark = document.getElementById('dark')
    let myModeLight = document.getElementById('light')
    let myModeAuto = document.getElementById('auto')

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

    myDiv1.innerHTML = '<h1>A propos pour le site</h1><br>\
                        <p>Bienvenue sur le site de DRS Gaming</p>'

    // contente page                                                                                                                                                                                                                                                                                
    mydSectionDiv.innerHTML = "<h1>Termes et conditions</h1>\                                                                                                                                                                                                                                                            \
    <p>Dernière mise à jour : 28 mars 2022</p>\
    <p>Veuillez lire attentivement ces termes et conditions avant d'utiliser notre service.</p>\
    <h1>Interprétation et définitions</h1>\
    <h2>Interprétation</h2>\
    <p>Les mots dont la lettre initiale est en majuscule ont des significations définies dans les conditions suivantes.\
        Les définitions suivantes auront la même signification qu'elles apparaissent au singulier ou au pluriel.</p>\
    <h2>Définitions</h2>\
    <p>Aux fins des présentes conditions générales :</p>\
    <ul>\
        <li>\
            <p><strong>Affilier</strong> désigne une entité qui contrôle, est contrôlée par ou est sous contrôle commun\
                avec une partie, où \"contrôle\" ; désigne la propriété de 50 % ou plus des actions, des participations ou\
                d'autres titres habilités à voter pour l'élection des administrateurs ou d'une autre autorité de\
                gestion.</p>\
        </li>\
        <li>\
            <p><strong>De campagne</strong> fait référence à : Maroc </p>\
        </li>\
        <li>\
            <p><strong>Compagnie</strong> (dénommé soit &quot;l'entreprise &quot;, &quot;We&quot;,\
                &quot;Us&quot; ou &quot;Notre&quot; dans le présent Accord) fait référence à DRS Gaming.</p>\
        </li>\
        <li>\
            <p><strong>Appareil</strong> désigne tout appareil pouvant accéder au Service tel qu'un ordinateur, un\
                téléphone portable ou une tablette numérique.</p>\
        </li>\
        <li>\
            <p><strong>Service</strong> fait référence au Site Web. </p>\
        </li>\
        <li>\
            <p><strong>Termes et conditions</strong> (aussi appelé &quot;Terms&quot;) désignent les présentes conditions\
                générales qui constituent l'intégralité de l'accord entre vous et la société concernant l'utilisation du\
                service. Cet accord sur les termes et conditions a été créé avec l'aide du <a\
                    href=\"https://drsphones.netlify.app/\" target=\"_blank\">DRS Phones</a>.</p>\
        </li>\
        <li>\
            <p><strong>Service de médias sociaux tiers</strong> désigne tout service ou contenu (y compris les données,\
                informations, produits ou services) fourni par un tiers qui peut être affiché, inclus ou mis à\
                disposition par le Service.</p>\
        </li>\
        <li>\
            <p><strong>Site Internet</strong>désigne DRS Gaming, accessible depuis<a\
                    href=\"https://drsgaming.netlify.app/\" rel=\"external nofollow noopener\"\
                    target=\"_blank\">https://drsgaming.netlify.app/</a></p>\
        </li>\
        <li>\
            <p><strong>Toi</strong> désigne la personne accédant ou utilisant le Service, ou la société ou toute autre\
                entité juridique au nom de laquelle cette personne accède ou utilise le Service, selon le cas.</p>\
        </li>\
    </ul>\
    <h1>Reconnaissance</h1>\
    <p>Ce sont les termes et conditions régissant l'utilisation de ce service et l'accord qui fonctionne\
        entre vous et la Société. Les présentes conditions générales définissent les droits et obligations de tous les\
        utilisateurs\
        concernant l'utilisation du Service.</p>\
    <p>Votre accès et votre utilisation du Service sont conditionnés par Votre acceptation et votre respect de ces\
        Termes et conditions. Ces Termes et Conditions s'appliquent à tous les visiteurs, utilisateurs et autres qui\
        accèdent ou\
        utiliser le Service.</p>\
    <p>En accédant ou en utilisant le Service, vous acceptez d'être lié par ces Termes et Conditions. Si vous n'êtes pas\
        d'accord\
        avec toute partie de ces Termes et Conditions, Vous ne pouvez pas accéder au Service.</p>\
    <p>Vous déclarez que vous avez plus de 18 ans. La Société n'autorise pas les moins de 18 ans à utiliser le\
        Service.</p>\
    <p>Votre accès et votre utilisation du Service sont également conditionnés par Votre acceptation et votre respect\
        des\
        Politique de confidentialité de la Société. Notre politique de confidentialité décrit nos politiques et\
        procédures sur le\
        la collecte, l'utilisation et la divulgation de Vos informations personnelles lorsque Vous utilisez\
        l'Application ou le Site Internet\
        et vous informe de vos droits à la vie privée et de la manière dont la loi vous protège. S'il vous plait lisez\
        notre politique de confidentialité\
        attentivement avant d'utiliser Notre Service.</p>\
    <h1>Liens vers d'autres sites Web</h1>\
    <p>Notre service peut contenir des liens vers des sites Web tiers ou des services qui ne sont ni détenus ni\
        contrôlés par\
        l'entreprise.</p>\
    <p>La Société n'a aucun contrôle sur, et n'assume aucune responsabilité pour, le contenu, les politiques de\
        confidentialité, ou\
        pratiques de tout site Web ou service tiers. Vous reconnaissez et acceptez en outre que la Société\
        ne sera pas responsable, directement ou indirectement, de tout dommage ou perte causé ou allégué à\
        être causé par ou en relation avec l'utilisation ou la dépendance à l'égard de tels contenus, biens ou services\
        disponibles sur ou via ces sites Web ou services.</p>\
    <p>Nous vous conseillons vivement de lire les termes et conditions et les politiques de confidentialité de tout site\
        Web tiers\
        ou services que vous visitez.</p>\
    <h1>Résiliation</h1>\
    <p>Nous pouvons résilier ou suspendre votre accès immédiatement, sans préavis ni responsabilité, pour quelque raison\
        que ce soit\
        que ce soit, y compris, sans s'y limiter, si vous enfreignez les présentes conditions générales.</p>\
    <p>En cas de résiliation, Votre droit d'utiliser le Service cessera immédiatement.</p>\
    <h1>Limitation de responsabilité</h1>\
    <p>Nonobstant les dommages que Vous pourriez subir, l'entière responsabilité de la Société et de l'un de ses\
        fournisseurs en vertu de toute disposition des présentes conditions et votre recours exclusif pour tout ce qui\
        précède sera\
        limité au montant effectivement payé par vous via le service ou 100 USD si vous n'avez pas acheté\
        quoi que ce soit via le Service.</p>\
    <p>Dans la mesure maximale permise par la loi applicable, en aucun cas la Société ou ses fournisseurs ne seront\
        responsable de tout dommage spécial, accessoire, indirect ou consécutif (y compris, mais non\
        limité aux dommages et intérêts pour manque à gagner, perte de données ou d'autres informations, pour\
        interruption d'activité,\
        pour préjudice corporel, perte de vie privée résultant de ou lié de quelque manière que ce soit à l'utilisation\
        ou à l'incapacité de\
        utiliser le Service, des logiciels tiers et/ou du matériel tiers utilisés avec le Service, ou autrement dans\
        relation avec toute disposition des présentes Conditions), même si la Société ou tout fournisseur a été informé\
        de\
        la possibilité de tels dommages et même si le recours n'atteint pas son objectif essentiel.</p>\
    <p>Certains états n'autorisent pas l'exclusion des garanties implicites ou la limitation de responsabilité pour les\
        dommages accessoires ou\
        dommages indirects, ce qui signifie que certaines des limitations ci-dessus peuvent ne pas s'appliquer. Dans ces\
        états,\
        la responsabilité de chaque partie sera limitée dans toute la mesure permise par la loi.</p>\
    <h1>&quot;AS IS&quot; and &quot;AS AVAILABLE&quot; Disclaimer</h1>\
    <p>Le Service vous est fourni &quot;TEL QUEL&quot; et &quot;SELON DISPONIBILITÉ&quot; et avec tous les défauts et\
        défauts sans garantie d'aucune sorte. Dans la mesure maximale permise par la loi applicable, la Société,\
        en son propre nom et au nom de ses sociétés affiliées et de ses concédants de licence et services respectifs\
        fournisseurs, décline expressément toute garantie, expresse, implicite, statutaire ou autre, avec\
        concernant le Service, y compris toutes les garanties implicites de qualité marchande, d'adéquation à un usage\
        particulier\
        l'objet, le titre et l'absence de contrefaçon, et les garanties pouvant découler du cours des transactions, du\
        cours des\
        performance, usage ou pratique commerciale. Sans limitation à ce qui précède, la Société ne fournit aucune\
        garantie ou engagement, et ne fait aucune déclaration de quelque nature que ce soit que le Service répondra à\
        Votre\
        exigences, atteindre les résultats escomptés, être compatible ou fonctionner avec tout autre logiciel,\
        application,\
        systèmes ou services, fonctionner sans interruption, répondre à des normes de performance ou de fiabilité ou\
        être\
        sans erreur ou que toute erreur ou tout défaut peut ou sera corrigé.</p>\
    <p>Sans limiter ce qui précède, ni la Société ni aucun de ses fournisseurs ne fait aucun\
        représentation ou garantie de quelque nature que ce soit, expresse ou tacite : (i) quant au fonctionnement ou à\
        la disponibilité de\
        le Service, ou les informations, le contenu et les matériaux ou produits qui y sont inclus ; (ii) que le\
        Le service sera ininterrompu ou sans erreur ; (iii) quant à l'exactitude, la fiabilité ou l'actualité de tout\
        les informations ou contenus fournis via le Service ; ou (iv) que le Service, ses serveurs, le contenu,\
        ou les e-mails envoyés par ou au nom de la Société sont exempts de virus, scripts, chevaux de Troie, vers,\
        logiciels malveillants, bombes à retardement ou autres composants nuisibles.</p>\
    <p>Certaines juridictions n'autorisent pas l'exclusion de certains types de garanties ou de limitations sur les\
        droits statutaires d'un consommateur, de sorte que certaines ou toutes les exclusions et limitations ci-dessus\
        peuvent ne pas s'appliquer à\
        Toi. Mais dans un tel cas, les exclusions et limitations énoncées dans la présente section s'appliqueront au\
        dans la mesure du possible exécutoire en vertu de la loi applicable.</p>\
    <h1>Droit applicable</h1>\
    <p>Les lois du pays, à l'exclusion de ses règles de conflits de lois, régiront les présentes conditions et votre\
        utilisation de\
        le service. Votre utilisation de l'Application peut également être soumise à d'autres réglementations locales,\
        étatiques, nationales ou\
        lois internationales.</p>\
    <h1>Résolution des litiges</h1>\
    <p>Si vous avez des préoccupations ou un différend concernant le service, vous acceptez d'abord d'essayer de\
        résoudre le différend\
        de manière informelle en contactant la Société.</p>\
    <h1>Pour les utilisateurs de l'Union européenne (UE)</h1>\
    <p>Si vous êtes un consommateur de l'Union européenne, vous bénéficierez de toutes les dispositions impératives de\
        la loi du\
        pays dans lequel vous résidez.</p>\
    <h1>Conformité légale aux États-Unis</h1>\
    <p>Vous déclarez et garantissez que (i) vous n'êtes pas situé dans un pays soumis aux États-Unis\
        embargo gouvernemental, ou qui a été désigné par le gouvernement des États-Unis comme un \"terroriste\"\
        soutenant\" pays, et (ii) Vous ne figurez sur aucune liste gouvernementale des États-Unis\
        ou des parties restreintes.</p>\
    <h1>Divisibilité et renonciation</h1>\
    <h2>Divisibilité</h2>\
    <p>Si une disposition de ces Conditions est jugée inapplicable ou invalide, cette disposition sera modifiée\
        et interprétés pour atteindre les objectifs de cette disposition dans toute la mesure du possible en vertu de\
        loi applicable et les dispositions restantes resteront en vigueur et de plein effet.</p>\
    <h2>Renoncer</h2>\
    <p>Sauf disposition contraire des présentes, le défaut d'exercer un droit ou d'exiger l'exécution d'une obligation\
        en vertu des présentes conditions n'affectera pas la capacité d'une partie à exercer ce droit ou à exiger une\
        telle exécution\
        à tout moment par la suite et la renonciation à un manquement ne constituera pas non plus une renonciation à\
        tout manquement ultérieur.</p>\
    <h1>Traduction Interprétation</h1>\
    <p>Ces Termes et Conditions peuvent avoir été traduits si Nous les avons mis à Votre disposition sur notre Service.\
        Vous acceptez que le texte original en anglais prévaudra en cas de litige.</p>\
    <h1>Modifications de ces termes et conditions</h1>\
    <p>Nous nous réservons le droit, à Notre seule discrétion, de modifier ou de remplacer ces Conditions à tout moment.\
        Si une révision\
        est important Nous ferons des efforts raisonnables pour fournir un préavis d'au moins 30 jours avant toute\
        nouvelle condition\
        prenant effet. Ce qui constitue un changement important sera déterminé à Notre seule discrétion.</p>\
    <p>En continuant à accéder ou à utiliser Notre Service après l'entrée en vigueur de ces révisions, Vous acceptez\
        d'être lié\
        par les termes révisés. Si vous n'acceptez pas les nouvelles conditions, en tout ou en partie, veuillez cesser\
        d'utiliser le\
        site Web et le Service.</p>\
    <h1>Nous contacter</h1>\
    <p>Si vous avez des questions sur ces Termes et Conditions, Vous pouvez nous contacter :</p>\
    <ul>\
        <li>Par email: <a href=\"mailto:drissraiss25@gmail.com\">drissraiss25@gmail.com</a> </li>\
    </ul>"

    // end content


    msgContact.textContent = 'Pour plus d\'informations, contactez nous'

    window.localStorage.setItem('lang', 'fr') // change lang
    lang = window.localStorage.getItem('lang') // update variable lang
}

function en() {
    let myNavBar = document.links
    let myDiv1 = document.getElementsByClassName('header')[0]
    let msgContact = document.querySelector('.p1')
    let mydSectionDiv = document.getElementById('divcontainner')
    let myMode = document.getElementsByClassName('dropbtn')[1]
    let myModeDark = document.getElementById('dark')
    let myModeLight = document.getElementById('light')
    let myModeAuto = document.getElementById('auto')

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

    myDiv1.innerHTML = "<h1>About for the site</h1>\
    <br>\
    <p>Welcome to the DRS Gaming website</p>"

    // contente page
    mydSectionDiv.innerHTML = "<h1>Terms and Conditions</h1>\
    <p>Last updated: March 28, 2022</p>\
    <p>Please read these terms and conditions carefully before using Our Service.</p>\
    <h1>Interpretation and Definitions</h1>\
    <h2>Interpretation</h2>\
    <p>The words of which the initial letter is capitalized have meanings defined under the following\
        conditions. The following definitions shall have the same meaning regardless of whether they appear in\
        singular or in plural.</p>\
    <h2>Definitions</h2>\
    <p>For the purposes of these Terms and Conditions:</p>\
    <ul>\
        <li>\
            <p><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common\
                control with a party, where &quot;control&quot; means ownership of 50% or more of the shares,\
                equity interest or other securities entitled to vote for election of directors or other managing\
                authority.</p>\
        </li>\
        <li>\
            <p><strong>Country</strong> refers to: Morocco</p>\
        </li>\
        <li>\
            <p><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;,\
                &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to DRS Gaming.</p>\
        </li>\
        <li>\
            <p><strong>Device</strong> means any device that can access the Service such as a computer, a\
                cellphone or a digital tablet.</p>\
        </li>\
        <li>\
            <p><strong>Service</strong> refers to the Website.</p>\
        </li>\
        <li>\
            <p><strong>Terms and Conditions</strong> (also referred as &quot;Terms&quot;) mean these Terms and\
                Conditions that form the entire agreement between You and the Company regarding the use of the\
                Service. This Terms and Conditions agreement has been created with the help of the <a\
                    href=\"https://drsphones.netlify.app/\" target=\"_blank\">DRS Phones</a>.</p>\
        </li>\
        <li>\
            <p><strong>Third-party Social Media Service</strong> means any services or content (including data,\
                information, products or services) provided by a third-party that may be displayed, included or\
                made available by the Service.</p>\
        </li>\
        <li>\
            <p><strong>Website</strong> refers to DRS Gaming, accessible from <a\
                    href=\"https://drsgaming.netlify.app/\" rel=\"external nofollow noopener\"\
                    target=\"_blank\">https://drsgaming.netlify.app/</a></p>\
        </li>\
        <li>\
            <p><strong>You</strong> means the individual accessing or using the Service, or the company, or\
                other legal entity on behalf of which such individual is accessing or using the Service, as\
                applicable.</p>\
        </li>\
    </ul>\
    <h1>Acknowledgment</h1>\
    <p>These are the Terms and Conditions governing the use of this Service and the agreement that operates\
        between You and the Company. These Terms and Conditions set out the rights and obligations of all users\
        regarding the use of the Service.</p>\
    <p>Your access to and use of the Service is conditioned on Your acceptance of and compliance with these\
        Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or\
        use the Service.</p>\
    <p>By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree\
        with any part of these Terms and Conditions then You may not access the Service.</p>\
    <p>You represent that you are over the age of 18. The Company does not permit those under 18 to use the\
        Service.</p>\
    <p>Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the\
        Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the\
        collection, use and disclosure of Your personal information when You use the Application or the Website\
        and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy\
        carefully before using Our Service.</p>\
    <h1>Links to Other Websites</h1>\
    <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by\
        the Company.</p>\
    <p>The Company has no control over, and assumes no responsibility for, the content, privacy policies, or\
        practices of any third party web sites or services. You further acknowledge and agree that the Company\
        shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to\
        be caused by or in connection with the use of or reliance on any such content, goods or services\
        available on or through any such web sites or services.</p>\
    <p>We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites\
        or services that You visit.</p>\
    <h1>Termination</h1>\
    <p>We may terminate or suspend Your access immediately, without prior notice or liability, for any reason\
        whatsoever, including without limitation if You breach these Terms and Conditions.</p>\
    <p>Upon termination, Your right to use the Service will cease immediately.</p>\
    <h1>Limitation of Liability</h1>\
    <p>Notwithstanding any damages that You might incur, the entire liability of the Company and any of its\
        suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be\
        limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased\
        anything through the Service.</p>\
    <p>To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be\
        liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not\
        limited to, damages for loss of profits, loss of data or other information, for business interruption,\
        for personal injury, loss of privacy arising out of or in any way related to the use of or inability to\
        use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in\
        connection with any provision of this Terms), even if the Company or any supplier has been advised of\
        the possibility of such damages and even if the remedy fails of its essential purpose.</p>\
    <p>Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or\
        consequential damages, which means that some of the above limitations may not apply. In these states,\
        each party's liability will be limited to the greatest extent permitted by law.</p>\
    <h1>&quot;AS IS&quot; and &quot;AS AVAILABLE&quot; Disclaimer</h1>\
    <p>The Service is provided to You &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; and with all faults and\
        defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company,\
        on its own behalf and on behalf of its Affiliates and its and their respective licensors and service\
        providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with\
        respect to the Service, including all implied warranties of merchantability, fitness for a particular\
        purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of\
        performance, usage or trade practice. Without limitation to the foregoing, the Company provides no\
        warranty or undertaking, and makes no representation of any kind that the Service will meet Your\
        requirements, achieve any intended results, be compatible or work with any other software, applications,\
        systems or services, operate without interruption, meet any performance or reliability standards or be\
        error free or that any errors or defects can or will be corrected.</p>\
    <p>Without limiting the foregoing, neither the Company nor any of the company's provider makes any\
        representation or warranty of any kind, express or implied: (i) as to the operation or availability of\
        the Service, or the information, content, and materials or products included thereon; (ii) that the\
        Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any\
        information or content provided through the Service; or (iv) that the Service, its servers, the content,\
        or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms,\
        malware, timebombs or other harmful components.</p>\
    <p>Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable\
        statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to\
        You. But in such a case the exclusions and limitations set forth in this section shall be applied to the\
        greatest extent enforceable under applicable law.</p>\
    <h1>Governing Law</h1>\
    <p>The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of\
        the Service. Your use of the Application may also be subject to other local, state, national, or\
        international laws.</p>\
    <h1>Disputes Resolution</h1>\
    <p>If You have any concern or dispute about the Service, You agree to first try to resolve the dispute\
        informally by contacting the Company.</p>\
    <h1>For European Union (EU) Users</h1>\
    <p>If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the\
        country in which you are resident in.</p>\
    <h1>United States Legal Compliance</h1>\
    <p>You represent and warrant that (i) You are not located in a country that is subject to the United States\
        government embargo, or that has been designated by the United States government as a &quot;terrorist\
        supporting&quot; country, and (ii) You are not listed on any United States government list of prohibited\
        or restricted parties.</p>\
    <h1>Severability and Waiver</h1>\
    <h2>Severability</h2>\
    <p>If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed\
        and interpreted to accomplish the objectives of such provision to the greatest extent possible under\
        applicable law and the remaining provisions will continue in full force and effect.</p>\
    <h2>Waiver</h2>\
    <p>Except as provided herein, the failure to exercise a right or to require performance of an obligation\
        under these Terms shall not effect a party's ability to exercise such right or require such performance\
        at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.\
    </p>\
    <h1>Translation Interpretation</h1>\
    <p>These Terms and Conditions may have been translated if We have made them available to You on our Service.\
        You agree that the original English text shall prevail in the case of a dispute.</p>\
    <h1>Changes to These Terms and Conditions</h1>\
    <p>We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision\
        is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms\
        taking effect. What constitutes a material change will be determined at Our sole discretion.</p>\
    <p>By continuing to access or use Our Service after those revisions become effective, You agree to be bound\
        by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the\
        website and the Service.</p>\
    <h1>Contact Us</h1>\
    <p>If you have any questions about these Terms and Conditions, You can contact us:</p>\
    <ul>\
        <li>By email: <a href=\"mailto:drissraiss25@gmail.com\">drissraiss25@gmail.com</a> </li>\
    </ul>"

    // end content

    msgContact.textContent = 'For more information, please contact us'

    window.localStorage.setItem('lang', 'en') // change lang
    lang = window.localStorage.getItem('lang') // update variable lang
}

function ar() {
    let myNavBar = document.links
    let myDiv1 = document.getElementsByClassName('header')[0]
    let msgContact = document.querySelector('.p1')
    let mydSectionDiv = document.getElementById('divcontainner')
    let myMode = document.getElementsByClassName('dropbtn')[1]
    let myModeDark = document.getElementById('dark')
    let myModeLight = document.getElementById('light')
    let myModeAuto = document.getElementById('auto')

    myNavBar[1].textContent = 'المنتجات';
    myNavBar[2].textContent = 'الاتصال';
    myNavBar[3].textContent = 'الدعم';
    myNavBar[4].textContent = 'حول';
    document.querySelector('.dropbtn').textContent = 'اللغة ▼';
    langFR.textContent = 'الفرنسية';
    langEN.textContent = 'الإنجليزية';
    langAR.textContent = 'العربية';
    myMode.textContent = 'الوضع ▼'
    myModeDark.textContent = 'الوضع الليلي'
    myModeLight.textContent = 'الوضع العادي'
    myModeAuto.textContent = 'الوضع الافتراضي'

    myDiv1.innerHTML = "<h1>احكام و شروط الموقع</h1>\
    <br>\
    <p>DRS Gaming website مرحبا بكم في </p>"

    // contente page
    mydSectionDiv.innerHTML = "<div dir=\"rtl\">\
    <h1>الأحكام والشروط</h1>\
    <p>آخر تحديث: 28 مارس 2022</p>\
    <p>يرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام خدمتنا.</p>\
    <h1>التفسير والتعريفات</h1>\
    <h2>تفسير</h2>\
    <p>الكلمات التي يتم كتابة الحرف الأول بها معاني محددة وفقًا لما يلي\
        الظروف. يجب أن تحمل التعريفات التالية نفس المعنى بغض النظر عما إذا كانت تظهر فيه\
        المفرد أو الجمع.</p>\
    <h2>تعريفات</h2>\
    <p>لأغراض هذه الشروط والأحكام:</p>\
    <ul>\
        <li>\
            <p>الشركة التابعة تعني الكيان الذي يتحكم أو يتحكم فيه أو يكون خاضعًا لسيطرة مشتركة\
                السيطرة مع طرف ، حيث تعني السيطرة ملكية 50 ٪ أو أكثر من الأسهم ،\
                حقوق الملكية أو الأوراق المالية الأخرى التي يحق لها التصويت لانتخاب أعضاء مجلس الإدارة أو غيرهم من\
                المديرين\
                السلطة.</p>\
        </li>\
        <li>\
            <p>الدولة تشير إلى: المغرب</p>\
        </li>\
        <li>\
            <p> الشركة (يشار إليها باسم الشركة نحن ،\
                نحن أو لدينا في هذه الاتفاقية) تشير إلى DRS Gaming.</p>\
        </li>\
        <li>\
            <p>الجهاز يعني أي جهاز يمكنه الوصول إلى الخدمة مثل الكمبيوتر ، أ\
                الهاتف المحمول أو الكمبيوتر اللوحي الرقمي.</p>\
        </li>\
        <li>\
            <p>تشير الخدمة إلى موقع الويب.</p>\
        </li>\
        <li>\
            <p>الشروط والأحكام (يشار إليها أيضًا باسم الشروط) تعني هذه الشروط و\
                الشروط التي تشكل الاتفاقية الكاملة بينك وبين الشركة فيما يتعلق باستخدام\
                خدمة. تم إنشاء اتفاقية الشروط والأحكام هذه بمساعدة <a href=\"https://drsphones.netlify.app/\"\
                    target=\"_blank\">DRS Phones</a>.</p>\
        </li>\
        <li>\
            <p>تعني خدمة الوسائط الاجتماعية للجهات الخارجية أي خدمات أو محتوى (بما في ذلك البيانات ،\
                المعلومات أو المنتجات أو الخدمات) المقدمة من طرف ثالث والتي قد يتم عرضها أو تضمينها أو\
                التي توفرها الخدمة.</p>\
        </li>\
        <li>\
            <p>يشير موقع الويب إلى DRS Gaming ، ويمكن الوصول إليه من <a href=\"https://drsgaming.netlify.app/\"\
                    rel=\"external nofollow noopener\" target=\"_blank\">https://drsgaming.netlify.app/</a></p>\
        </li>\
        <li>\
            <p>أنت تعني الفرد الذي يصل إلى الخدمة أو يستخدمها ، أو الشركة ، أو\
                الكيان القانوني الآخر الذي يقوم هذا الفرد بالوصول إلى الخدمة أو استخدامها نيابة عنه ، مثل\
                ملائم.</p>\
        </li>\
    </ul>\
    <h1>إعتراف</h1>\
    <p>هذه هي الشروط والأحكام التي تحكم استخدام هذه الخدمة والاتفاقية السارية\
        بينك وبين الشركة. تحدد هذه الشروط والأحكام حقوق والتزامات جميع المستخدمين\
        فيما يتعلق باستخدام الخدمة.</p>\
    <p>إن وصولك إلى الخدمة واستخدامها مشروط بقبولك وامتثالك لها\
        الأحكام والشروط. تنطبق هذه الشروط والأحكام على جميع الزوار والمستخدمين وغيرهم ممن يصلون إلى أو\
        استخدام الخدمة.</p>\
    <p>من خلال الوصول إلى الخدمة أو استخدامها ، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء من هذه الشروط والأحكام ، فلا يجوز لك الوصول إلى الخدمة.</p>\
    <p>أنت تقر بأن عمرك يزيد عن 18 عامًا. ولا تسمح الشركة لمن هم دون 18 عامًا باستخدام\
        خدمة.</p>\
    <p>إن وصولك إلى الخدمة واستخدامها مشروط أيضًا بقبولك وامتثالك لـ\
        سياسة الخصوصية الخاصة بالشركة. تصف سياسة الخصوصية الخاصة بنا سياساتنا وإجراءاتنا على\
        جمع واستخدام والكشف عن معلوماتك الشخصية عند استخدامك للتطبيق أو الموقع\
        ويخبرك بحقوق الخصوصية الخاصة بك وكيف يحميك القانون. يرجى قراءة سياسة الخصوصية\
        بعناية قبل استخدام خدمتنا.</p>\
    <h1>روابط لمواقع أخرى</h1>\
    <p>قد تحتوي خدمتنا على روابط لمواقع أو خدمات ويب تابعة لجهات خارجية لا يملكها أو يتحكم فيها\
        الشركة.</p>\
    <p>الشركة ليس لديها سيطرة ولا تتحمل أي مسؤولية عن المحتوى أو سياسات الخصوصية أو\
        ممارسات أي مواقع ويب أو خدمات خاصة بطرف ثالث. أنت تقر وتوافق كذلك على أن الشركة\
        لن يكون مسؤولاً أو مسؤولاً ، بشكل مباشر أو غير مباشر ، عن أي ضرر أو خسارة ناتجة أو مزعومة\
        تكون ناجمة عن أو مرتبطة باستخدام أو الاعتماد على أي محتوى أو سلع أو خدمات\
        متوفرة على أو من خلال أي من مواقع الويب أو الخدمات.</p>\
    <p>ننصحك بشدة بقراءة الشروط والأحكام وسياسات الخصوصية الخاصة بأي مواقع ويب تابعة لجهات خارجية\
        أو الخدمات التي تزورها.</p>\
    <h1>نهاية</h1>\
    <p>يجوز لنا إنهاء أو تعليق وصولك على الفور ، دون إشعار مسبق أو مسؤولية ، لأي سبب من الأسباب\
        أيا كان ، بما في ذلك على سبيل المثال لا الحصر إذا انتهكت هذه الشروط والأحكام.</p>\
    <p>عند الإنهاء ، سيتوقف حقك في استخدام الخدمة على الفور.</p>\
    <h1>تحديد المسؤولية</h1>\
    <p>بغض النظر عن أي أضرار قد تتكبدها ، فإن المسؤولية الكاملة للشركة وأي منها\
        الموردين بموجب أي حكم من أحكام هذه الشروط وسيعطيك الانتصاف الحصري لكل ما سبق ذكره\
        يقتصر على المبلغ الذي دفعته بالفعل من خلال الخدمة أو 100 دولار أمريكي إذا لم تكن قد اشتريت\
        أي شيء من خلال الخدمة.</p>\
    <p>إلى أقصى حد يسمح به القانون المعمول به ، لن تكون الشركة أو مورديها بأي حال من الأحوال\
        مسؤول عن أي أضرار خاصة أو عرضية أو غير مباشرة أو تبعية من أي نوع (بما في ذلك ، ولكن ليس\
        يقتصر على الأضرار الناجمة عن فقدان الأرباح أو فقدان البيانات أو المعلومات الأخرى ، بسبب انقطاع الأعمال ،\
        للإصابة الشخصية ، وفقدان الخصوصية الناجم عن أو بأي شكل من الأشكال المتعلقة باستخدام أو عدم القدرة على\
        استخدام الخدمة و / أو برامج الجهة الخارجية و / أو أجهزة الطرف الثالث المستخدمة مع الخدمة ، أو بأي طريقة أخرى\
        فيما يتعلق بأي حكم من أحكام هذه الشروط) ، حتى لو تم إخطار الشركة أو أي مورد\
        إمكانية حدوث مثل هذه الأضرار وحتى إذا فشل العلاج في تحقيق الغرض الأساسي منه.</p>\
    <p>لا تسمح بعض الدول باستثناء الضمانات الضمنية أو تحديد المسؤولية عن عرضية أو\
        الأضرار اللاحقة ، مما يعني أن بعض القيود المذكورة أعلاه قد لا تنطبق. في هذه الدول ،\
        ستكون مسؤولية كل طرف محدودة إلى أقصى حد يسمح به القانون.</p>\
    <h1>الضمان</h1>\
    <p>الخدمة مقدمة لك كما هي و كما هو متاح وبكل عيوب و\
        دون ضمان من أي نوع. إلى أقصى حد يسمح به القانون المعمول به ، فإن الشركة ،\
        بالأصالة عن نفسها وبالنيابة عن الشركات التابعة لها ومرخصيها وخدماتهم\
        يتنصل مقدمو الخدمة صراحة من جميع الضمانات ، سواء كانت صريحة أو ضمنية أو قانونية أو غير ذلك ، مع\
        فيما يتعلق بالخدمة ، بما في ذلك جميع الضمانات الضمنية الخاصة بالتسويق والملاءمة لشخص معين\
        الغرض والملكية وعدم الانتهاك والضمانات التي قد تنشأ عن سياق التعامل\
        الأداء أو الاستخدام أو الممارسة التجارية. على سبيل المثال لا الحصر ، لا تقدم الشركة أي\
        الضمان أو التعهد ، ولا يقدم أي تعهد من أي نوع بأن الخدمة سوف تلبي احتياجاتك\
        المتطلبات ، أو تحقيق أي نتائج مقصودة ، أو التوافق أو العمل مع أي برامج أو تطبيقات أخرى ،\
        أنظمة أو خدمات ، تعمل دون انقطاع ، تلبي أي معايير أداء أو موثوقية أو تكون\
        خالية من الأخطاء أو أن أي أخطاء أو عيوب يمكن تصحيحها أو سيتم تصحيحها.</p>\
    <p>دون تقييد ما سبق ، لا تقوم الشركة ولا أي من مزودي الشركة بأي شيء\
        إقرار أو ضمان من أي نوع ، صريحًا أو ضمنيًا: (1) فيما يتعلق بتشغيل أو توفر\
        الخدمة أو المعلومات والمحتوى والمواد أو المنتجات المدرجة فيها ؛ (2) أن\
        ستكون الخدمة دون انقطاع أو خالية من الأخطاء ؛ (3) فيما يتعلق بالدقة أو الموثوقية أو العملة الخاصة بأي منها\
        المعلومات أو المحتوى المقدم من خلال الخدمة ؛ أو (4) أن الخدمة وخوادمها والمحتوى\
        أو رسائل البريد الإلكتروني المرسلة من أو نيابة عن الشركة خالية من الفيروسات والنصوص وأحصنة طروادة والديدان ،\
        البرامج الضارة أو القنابل الزمنية أو المكونات الضارة الأخرى.</p>\
    <p>لا تسمح بعض السلطات القضائية باستثناء أنواع معينة من الضمانات أو القيود المفروضة\
        الحقوق القانونية للمستهلك ، لذلك قد لا تنطبق بعض أو كل الاستثناءات والقيود المذكورة أعلاه\
        أنت. ولكن في مثل هذه الحالة ، تطبق الاستثناءات والقيود المنصوص عليها في هذا القسم على\
        إلى أقصى حد قابل للتنفيذ بموجب القانون المعمول به.</p>\
    <h1>القانون الذي يحكم</h1>\
    <p>تحكم قوانين الدولة ، باستثناء تعارضها مع قواعد القانون ، هذه الشروط واستخدامك لـ\
        الخدمة. قد يكون استخدامك للتطبيق أيضًا خاضعًا لمعايير أخرى محلية ، أو وطنية ، أو وطنية ، أو\
        القوانين الدولية.</p>\
    <h1>حل النزاعات</h1>\
    <p>إذا كان لديك أي قلق أو نزاع حول الخدمة ، فأنت توافق على محاولة حل النزاع أولاً\
        بشكل غير رسمي عن طريق الاتصال بالشركة.</p>\
    <h1>لمستخدمي الاتحاد الأوروبي</h1>\
    <p>إذا كنت مستهلكًا في الاتحاد الأوروبي ، فستستفيد من أي أحكام إلزامية في قانون\
        البلد الذي تقيم فيه.</p>\
    <h1>الامتثال القانوني للولايات المتحدة</h1>\
    <p>أنت تقر وتتعهد (1) أنك لست مقيمًا في دولة خاضعة للولايات المتحدة\
        الحظر الذي تفرضه الحكومة ، أو الذي صنفته حكومة الولايات المتحدة على أنه إرهابي\
        دعم؛ البلد ، و (2) أنت غير مدرج في أي قائمة من قوائم الممنوعات الصادرة عن حكومة الولايات المتحدة\
        أو الأطراف المحظورة.</p>\
    <h1>قابلية الفصل والتنازل</h1>\
    <h2>الاستقلالية</h2>\
    <p>إذا تم اعتبار أي بند من هذه الشروط غير قابل للتنفيذ أو غير صالح ، فسيتم تغيير هذا الحكم\
        وتفسيرها لتحقيق أهداف هذا الحكم إلى أقصى حد ممكن في ظل\
        القانون المعمول به والأحكام المتبقية سارية المفعول والتأثير الكامل.</p>\
    <h2>تنازل</h2>\
    <p>باستثناء ما هو منصوص عليه هنا ، عدم ممارسة حق أو طلب أداء التزام\
        بموجب هذه الشروط لا تؤثر على قدرة الطرف على ممارسة هذا الحق أو تتطلب مثل هذا الأداء\
        في أي وقت بعد ذلك ولا يشكل التنازل عن خرق تنازلاً عن أي خرق لاحق.\
    </p>\
    <h1>ترجمة فورية</h1>\
    <p>ربما تمت ترجمة هذه الشروط والأحكام إذا قمنا بتوفيرها لك على خدمتنا.\
        أنت توافق على أن النص الأصلي باللغة الإنجليزية هو الذي يسود في حالة النزاع.</p>\
    <h1>التغييرات على هذه الشروط والأحكام</h1>\
    <p>نحتفظ بالحق ، وفقًا لتقديرنا الخاص ، في تعديل أو استبدال هذه الشروط في أي وقت. إذا كان التنقيح\
        تعتبر جوهرية وسنبذل جهودًا معقولة لتقديم إشعار قبل 30 يومًا على الأقل من أي شروط جديدة\
        ساري المفعول. سيتم تحديد ما يشكل تغييرًا جوهريًا وفقًا لتقديرنا الخاص.</p>\
    <p>من خلال الاستمرار في الوصول إلى خدمتنا أو استخدامها بعد أن تصبح هذه المراجعات فعالة ، فإنك توافق على\
        الالتزام\
        بالشروط المعدلة. إذا كنت لا توافق على الشروط الجديدة ، كليًا أو جزئيًا ، فيرجى التوقف عن استخدام\
        الموقع والخدمة.</p>\
    <h1>اتصل بنا</h1>\
    <p>إذا كان لديك أي أسئلة حول هذه الشروط والأحكام ، يمكنك الاتصال بنا:</p>\
    <ul>\
        <li>بالبريد الالكتروني:<b><a href=\"mailto:drissraiss25@gmail.com\">drissraiss25@gmail.com</a></b></li>\
    </ul>\
</div>"

    // end content

    msgContact.textContent = 'For more information, please contact us'

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