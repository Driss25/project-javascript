if (localStorage.getItem('products') == null || localStorage.getItem('products') == "null") {
    localStorage.setItem('products', '{}')
}

let products = JSON.parse(localStorage.getItem('products'))
let tbody = document.getElementById("cartEmpty")

if (Object.keys(products).length) {
    tbody.removeChild(tbody.children[0])
    let i = 0
    let total = 0
    for (let prod in products) {
        var price = products[prod]["price"]
        var quantity = products[prod]["quantity"]
        var myTr = document.createElement('tr')
        myTr.innerHTML = `<td>${++i}</td><td>${prod}</td><td>${price} DH</td><td class="ce"><input type="button"${products[prod]["quantity"] <= 1 ? ' disabled ' : ' ' }onclick="minusProd(this, '${prod}')" value="-"> <span>${quantity}</span><input  type="button" onclick="plusProd(this, '${prod}')" value="+"></td><td><button onclick="removeProd(this, '${prod}')">Remove</button></td>`
        total += products[prod]['price'] * products[prod]['quantity']
        tbody.appendChild(myTr)
    }
    document.getElementById('total').innerHTML = total + ' DH'
}


let mybtnreset = document.getElementById('reset')

/*************clear************ */
mybtnreset.addEventListener('click', function () {
    let mytr = document.createElement('tr')
    mytr.innerHTML = '<td colspan="5">Cart is empty</td>'
    localStorage.setItem('products', "{}")
    tbody.replaceChildren(mytr)
    document.getElementById('total').innerHTML = '00 DH'
})

/***************** map ********** */
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

/********************valid cart**************** */
let mybtnvalid = document.getElementById('valid')

mybtnvalid.onclick = () => {
    window.location.href = 'mailto:drissraiss25@gmail.com?subject=client'
}

/********************************************* */

/*****remove prod***** */

function removeProd(btn, prod) {
    let products = JSON.parse(localStorage.getItem('products'))
    var total = document.getElementById('total')

    btn.parentElement.parentElement.remove()
    delete products[prod]
    let somme = 0
    for (i in products) {
        somme += products[i]['price'] * products[i]['quantity']
    }
    total.innerHTML = somme + ' DH'
    localStorage.setItem('products', JSON.stringify(products))
    if (localStorage.products == "{}") {
        let mytr = document.createElement('tr')
        mytr.innerHTML = '<td colspan="5">Cart is empty</td>'
        tbody.replaceChildren(mytr)
        document.getElementById('total').innerHTML = '00 DH'
    }
}

/******plus/ minus********* */

function plusProd(plus, prod) {
    products = JSON.parse(localStorage.getItem('products'))
    let mySpan = plus.previousSibling
    let total = document.getElementById('total')
    products[prod]["quantity"] += 1
    mySpan.innerHTML = Number(mySpan.innerHTML) + 1
    console.log()
    let somme = 0
    for (i in products) {
        somme += products[i]['price'] * products[i]['quantity']
    }
    total.innerHTML = somme + ' DH'
    window.localStorage.setItem('products', JSON.stringify(products))
    if (products[prod]["quantity"] > 1) {
        plus.previousElementSibling.previousElementSibling.removeAttribute('disabled')
    }
}

function minusProd(minus,prod) {
    products = JSON.parse(window.localStorage.getItem('products'));
    let mySpan = minus.nextElementSibling
    let total = document.getElementById('total')
    products[prod]["quantity"] -= 1
    mySpan.innerHTML = Number(mySpan.innerHTML) - 1
    console.log()
    let somme = 0
    for (i in products) {
        somme += products[i]['price'] * products[i]['quantity']
    }
    total.innerHTML = somme + ' DH'
    window.localStorage.setItem('products', JSON.stringify(products))
    if (products[prod]["quantity"] <= 1) {
        minus.setAttribute('disabled','')
    }
}

