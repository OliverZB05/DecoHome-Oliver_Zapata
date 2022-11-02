const Products = [
//============ Productos del hogar ============ 
    {
        id: 1,
        name: "Silla de oficina",
        quantity: 1,
        group: "Productos del hogar",
        unitprice: 2000,
        price: 2000
    },

    {
        id: 2,
        name: "Lámpara de escritorio",
        quantity: 1,
        group: "Productos del hogar",
        unitprice: 1000,
        price: 1000
    },

    {
        id: 3,
        name: "Litera",
        quantity: 1,
        group: "Productos del hogar",
        unitprice: 5500,
        price: 5500
    },

    {
        id: 4,
        name: "Silla gamer",
        quantity: 1,
        group: "Productos del hogar",
        unitprice: 1000,
        price: 1000
    },

    {
        id: 5,
        name: "Mueble",
        quantity: 1,
        group: "Productos del hogar",
        unitprice: 1500,
        price: 1500
    },

    {
        id: 6,
        name: "Juego de comedor",
        quantity: 1,
        group: "Productos del hogar",
        unitprice: 2500,
        price: 2500
    },

    {
        id: 7,
        name: "Estantería",
        quantity: 1,
        group: "Productos del hogar",
        unitprice: 3500,
        price: 3500
    },

    {
        id: 8,
        name: "Closet",
        quantity: 1,
        group: "Productos del hogar",
        unitprice: 5000,
        price: 5000
    },
//============ Productos del hogar ============ 


//============ Productos del cocina ============   
    {
        id: 9,
        name: "Licuadora",
        quantity: 1,
        group: "Cocina",
        unitprice: 2000,
        price: 2000
    },

    {
        id: 10,
        name: "Microondas",
        quantity: 1,
        group: "Cocina",
        unitprice: 3400,
        price: 3400
    },

    {
        id: 11,
        name: "Horno",
        quantity: 1,
        group: "Cocina",
        unitprice: 2300,
        price: 2300
    },

    {
        id: 12,
        name: "Juego de cubiertos",
        quantity: 1,
        group: "Cocina",
        unitprice: 1600,
        price: 1600

    },

    {
        id: 13,
        name: "Juego de utencilios",
        quantity: 1,
        group: "Cocina",
        unitprice: 4700,
        price: 4700
    },

    {
        id: 14,
        name: "Batidora",
        quantity: 1,
        group: "Cocina",
        unitprice: 6400,
        price: 6400
    },

    {
        id: 15,
        name: "Cafetera",
        quantity: 1,
        group: "Cocina",
        unitprice: 5400,
        price: 5400
    },

    {
        id: 16,
        name: "Mortero de marmol",
        quantity: 1,
        group: "Cocina",
        unitprice: 6000,
        price: 6000
    },
//============ Productos del cocina ============ 


//============ Productos Electrónicos ============ 
    {
        id: 17,
        name: "Audífonos Inalámbricos",
        quantity: 1,
        group: "Electrodomesticos",
        unitprice: 2000,
        price: 2000
    },

    {
        id: 18,
        name: "Regleta",
        quantity: 1,
        group: "Electrodomesticos",
        unitprice: 3400,
        price: 3400
    },

    {
        id: 19,
        name: "Audífonos",
        quantity: 1,
        group: "Electrodomesticos",
        unitprice: 2200,
        price: 2200
    },

    {
        id: 20,
        name: "Aro De Luz Led",
        quantity: 1,
        group: "Electrodomesticos",
        unitprice: 1600,
        price: 1600
    },

    {
        id: 21,
        name: "Joystick",
        quantity: 1,
        group: "Electrodomesticos",
        unitprice: 4700,
        price: 4700
    },

    {
        id: 22,
        name: "Cornetas",
        quantity: 1,
        group: "Electrodomesticos",
        unitprice: 6400,
        price: 6400
    },

    {
        id: 23,
        name: "Batería Portátil",
        quantity: 1,
        group: "Electrodomesticos",
        unitprice: 5400,
        price: 5400
    },

    {
        id: 24,
        name: "Reloj inteligente", 
        quantity: 1,
        group: "Electrodomesticos",
        unitprice: 6000,
        price: 6000
    }
//============ Productos Electrónicos ============ 
];


const ShoppingCart = [];


//----------{ Products }----------
let Product1 = document.getElementById("SectionScroll-1");
let Product2 = document.getElementById("SectionScroll-2");
let Product3 = document.getElementById("SectionScroll-3");
let IDButtonPay1 = "Identifier__Row-1--";
let IDButtonPay2 = "Identifier__Row-2--";
let IDButtonPay3 = "Identifier__Row-3--";


function CreateCards(){

    for (let i = 0; i < Products.length; i++){
        let btnId = "btn" + Products[i].id;

    //=================== Construción de cartas de Fila 1 ===================
    if(Products[i].group == "Productos del hogar"){

        let Card = document.createElement("div");
            Card.className="rowProducts1__card";
            Product1.append(Card);

            let IMGCard = document.createElement("div");
            IMGCard.className="IMGCard" + i;  
            Card.append(IMGCard);


            if(IMGCard.className == "IMGCard" + i){

                Card.innerHTML += ` <h2 class="TextCard">${Products[i].name}</h2> 
                                    <h2 class="TextPrice">$${Products[i].price}</h2> 

                                    <div class="RowFlex">
                                    <button class="ButtonPay-1 Pay" id=${btnId} onclick=(btnClick(${"'"+btnId+"'"}))><p class="TextButton">Comprar</p></button>
                                    </div> `;

            }
    }
    //=================== Construción de cartas de Fila 1 ===================


    //=================== Construción de cartas de Fila 2 ===================
    if(Products[i].group == "Cocina"){

        let Card2 = document.createElement("div");
            Card2.className="rowProducts2__card";
            Product2.append(Card2);

            let IMGCard2 = document.createElement("div");
            IMGCard2.className="IMGCard2--" + i;  
            Card2.append(IMGCard2);


            if(IMGCard2.className == "IMGCard2--" + i){

                Card2.innerHTML += ` <h2 class="TextCard">${Products[i].name}</h2> 
                                    <h2 class="TextPrice">$${Products[i].price}</h2> 

                                    <div class="RowFlex">
                                    <button class="ButtonPay-2 Pay" id=${btnId} onclick=(btnClick(${"'"+btnId+"'"}))><p class="TextButton">Comprar</p></button>
                                    </div> `;

            }

    }
    //=================== Construción de cartas de Fila 2 ===================


    //=================== Construción de cartas de Fila 3 ===================
    if(Products[i].group == "Electrodomesticos"){

        let Card3 = document.createElement("div");
            Card3.className="rowProducts3__card";
            Product3.append(Card3);

            let IMGCard3 = document.createElement("div");
            IMGCard3.className="IMGCard3--" + i; 
            Card3.append(IMGCard3);


            if(IMGCard3.className == "IMGCard3--" + i){

                Card3.innerHTML += ` <h2 class="TextCard">${Products[i].name}</h2> 
                                    <h2 class="TextPrice">$${Products[i].price}</h2> 

                                    <div class="RowFlex">
                                    <button class="ButtonPay-3 Pay" id=${btnId} onclick=(btnClick(${"'"+btnId+"'"}))><p class="TextButton">Comprar</p></button>
                                    </div> `;

            }
    }
    //=================== Construción de cartas de Fila 3 ===================
    }
//----------{ Products }----------
}
CreateCards();







//==================== Botones de suma y resta ====================
function btnPlus(btnId){

    let QuantityHTML = document.getElementById("Quantity--" + btnId);
    let PriceHTML = document.getElementById("Price--" + btnId);
    let idProduct = btnId.substring(3, btnId.length);

    if(parseInt(idProduct) == Products[idProduct - 1].id){

        for(let j = 0; j < ShoppingCart.length; j++){
            if(ShoppingCart[j].id == Products[idProduct - 1].id){

                if(ShoppingCart[j].quantity > 14){
                    alert("Límite de productos alcanzado");
                    return;
                }
                
                ++ShoppingCart[j].quantity;
                ++QuantityHTML.innerHTML;
                ShoppingCart[j].price = ShoppingCart[j].unitprice * ShoppingCart[j].quantity;
                PriceHTML.innerHTML = "$" + ShoppingCart[j].unitprice * ShoppingCart[j].quantity;



                //============== Precio Total ============== 
                    let AddValue = 0;
                    for(let i = 0; i < ShoppingCart.length; i++){
                        AddValue += ShoppingCart[i].price;
                    }
                    let TotalPrice = document.getElementById("TotalPrice");
                    TotalPrice.innerHTML = `$${AddValue}`;
                    //============== Precio Total ============== 
            }
        }
    }
}



function btnMinus(btnId){
    let QuantityHTML = document.getElementById("Quantity--" + btnId);
    let PriceHTML = document.getElementById("Price--" + btnId);
    let idProduct = btnId.substring(3, btnId.length);

    if(parseInt(idProduct) == Products[idProduct - 1].id){

        for(let j = 0; j < ShoppingCart.length; j++){
            if(ShoppingCart[j].id == Products[idProduct - 1].id){

                if(ShoppingCart[j].quantity < 2){
                    alert("Límite de productos alcanzado");
                    return;
                }
                
                --ShoppingCart[j].quantity;
                --QuantityHTML.innerHTML;
                ShoppingCart[j].price = ShoppingCart[j].unitprice * ShoppingCart[j].quantity;
                PriceHTML.innerHTML = "$" + ShoppingCart[j].unitprice * ShoppingCart[j].quantity;



                //============== Precio Total ============== 
                    let AddValue = 0;
                    for(let i = 0; i < ShoppingCart.length; i++){
                        AddValue += ShoppingCart[i].price;
                    }
                    let TotalPrice = document.getElementById("TotalPrice");
                    TotalPrice.innerHTML = `$${AddValue}`;
                    //============== Precio Total ============== 
            }
        }
    }
}
//==================== Botones de suma y resta ====================



let Enumeration = 0;
function btnClick(btnId){


    let idProduct = btnId.substring(3, btnId.length);

    for(let j = 0; j < ShoppingCart.length; j++){
        if(ShoppingCart[j].id == idProduct) {
            return
        };
    }



    for(let i = 0; i < Products.length; i++){
        if(Products[i].id == idProduct){
        ShoppingCart.push(Products[i]);

        //==================== Crear Tablas HTML ====================
            for(let j = 0; j < ShoppingCart.length; j++){
                if(ShoppingCart[j].id == idProduct){

                    ContainerTable.innerHTML += `
            
                    <table class="ContainerTable__TableShopingCart" id="TableProducts">
                    
                        <th rowspan="3" class="TableShopingCart__Enumeration">
                            <h2 class="Enumeration__Text">${++Enumeration}</h2>
                        </th>
                    
                        <tr>
                            <td colspan="2" class="TableShopingCart__FirstRow">
                                <h1 class="FirstRow__Text">${ShoppingCart[j].name}</h1>
                            </td>
                        </tr>
                    
                        <tr class="TableShopingCart__Row">
                            <td class="Row__Column1">
                                <div class="Column1__Row-A"><h2 class="Row-A__Title">Cantidad</h2></div>
                                <div class="Column1__Row-B">
                                    <h2 class="Row-B__Text" id=${"Quantity--" + btnId}>${ShoppingCart[j].quantity}</h2>
                                    <button class="Row-B__PlusButton" onclick=(btnPlus(${"'"+btnId+"'"}))><p class="PlusButton__Text">+</p></button>
                                    <button class="Row-B__MinusButton" onclick=(btnMinus(${"'"+btnId+"'"}))><p class="MinusButton__Text">-</p></button> 
                                </div>
                            </td>
                    
                            <td class="Row__Column2">
                                <div class="Column2__Row-A"><h2 class="Row-A__Title">Precio</h2></div>
                                <div class="Column2__Row-B"><h2 class="Row-B__Title" id=${"Price--" + btnId}>$${ShoppingCart[j].price}</h2></div>
                            </td>
                    
                            <td class="Row__Column3">
                                <div class="Column3__Row-A"><h2 class="Row-A__Title">IVA</h2></div>
                                <div class="Column3__Row-B">
                                    <h2 class="Row-B__Title">21%</h2>
                                </div>
                            </td>
                        </tr> 
                    </table>
                    `


                    //============== Precio Total ============== 
                    let AddValue = 0;

                    for(let i = 0; i < ShoppingCart.length; i++){
                        AddValue += ShoppingCart[i].price;
                    }
                    let TotalPrice = document.getElementById("TotalPrice");
                    TotalPrice.innerHTML = `$${AddValue}`;
                    //============== Precio Total ============== 
                    

                }
            }
        //==================== Crear Tablas HTML ====================
        }
            
}


}



//============== Borrar Productos ============== 
let ContainerTable = document.getElementById("ContainerTable");
let DeleteButton = document.getElementById("DeleteButton");

DeleteButton.onclick = () =>{
    let TableProducts = Array.prototype.slice.call(document.getElementsByClassName("ContainerTable__TableShopingCart"), 0);

    for(element of TableProducts){
        element.remove();
    }  

    ShoppingCart.splice(0, 23);
    console.table(ShoppingCart);
    TotalPrice.innerHTML = "";
}
//============== Borrar Productos ==============   


//============== Enviar Productos ============== 
let SendButton = document.getElementById("SendButton");

SendButton.onclick = () =>{
    const SaveLocal = (key, value) => { localStorage.setItem(key, value) };
    SaveLocal("Compra reciente", JSON.stringify(ShoppingCart));
    localStorage.getItem("Compra reciente");
    console.log("================= Compra reciente =================");
    console.table(ShoppingCart);

    let TableProducts = Array.prototype.slice.call(document.getElementsByClassName("ContainerTable__TableShopingCart"), 0);

    for(element of TableProducts){
        element.remove();
    }  

    ShoppingCart.splice(0, 23);
    console.table(ShoppingCart);
    TotalPrice.innerHTML = "";

    alert("Ya se han enviado los productos al carrido de compras");
}
//============== Enviar Productos ==============

//localStorage.clear();





















