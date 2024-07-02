let products=[
    {
        imageUrl:'photos/ring1.webp',
        imgUrl:'photos/ring2.webp',
        id: 1,
        name:'silver bracelet',
        price:60,
        incart:0
      },
      {
        imageUrl:'photos/earring_studs1.webp',
        imgUrl:'photos/earring_studs2.webp',
        id: 2,
        name:'silver bracelet',
        price:78,
        incart:0
      },
      {
        imageUrl:'photos/flower1.webp',
        imgUrl:'photos/flower2.webp',
        id: 3,
        name:'silver bracelet',
        price:399,
        incart:0
      },
      {
        imageUrl:'photos/silver\ earring1.webp',
        imgUrl:'photos/silver\ earring2.webp',
        id: 4,
        name:'silver bracelet',
        price:420,
        incart:0
      },
      {
        imageUrl:'photos/carnevale_sterling_silver1.webp',
        imgUrl:'photos/carnevale_sterling_silver2.webp',
        id: 5,
        name:'silver bracelet',
        price:170,
        incart:0
      },
      {
        imageUrl:'photos/ping\ ring.webp',
        imgUrl:'photos/pink\ ring3.webp',
        id: 6,
        name:'silver bracelet',
        price:265,
        incart:0
      },
      
      {
        imageUrl:'photos/gold-plated_sterling1.webp',
        imgUrl:'photos/gold-plated_sterling2.webp',
        id: 6,
        name:'silver bracelet',
        price:420,
        incart:0
      },
     
      {
        imageUrl:'photos/necklace1.webp',
        imgUrl:'photos/necklace2.webp',
        id: 7,
        name:'silver bracelet',
        price:459,
        incart:0
      },
      
      {
        imageUrl:'photos/necklace3.webp',
        imgUrl:'photos/necklace4.webp',
        id: 8,
        name:'silver bracelet',
        price:500,
        incart:0
      }
];
let rightDiv=document.querySelector('#RightDiv');
let cartCount=document.querySelector('#count');
let cart=JSON.parse(localStorage.getItem('cart')) || [];
renderProducts();
addEvent();
calcCartCount();

function renderProducts(){
    products.forEach(product => {
        rightDiv.innerHTML +=`
        <div class="col-3 RDiv Images" id="${product.id}">
        <img class="image1" src='${product.imageUrl}'onmouseover="this.src='${product.imgUrl}'" onmouseout="this.src='${product.imageUrl}'"/>
           <div class="ImgContent">
           <h3>$${product.price}.00</h3>
           <p>Bling Jewelry Great Gatsby Inspired CZ Vintage Style Full Finger Armor Ring</p>
       </div>
       <div class="BtN">
         <button class="addCart" data-target='${product.id}'>ADD TO CART</button>
       </div> 
       `
    });
   
}



function addEvent(){
  let buttons=document.querySelectorAll(".BtN");
  let addToCartBtns=document.querySelectorAll('.addCart');
  addToCartBtns.forEach(btn => {
    btn.addEventListener('click',()=>{
       let id= btn.dataset.target;
       let productObj=products.find(product=>{
        return product.id==id;
       })
       let quantity=1; 
       cart.push({...productObj , quantity});
       saveCartToLS();
       calcCartCount();
    })
  });
}



function saveCartToLS(){
    localStorage.setItem('cart',JSON.stringify(cart));
}

function calcCartCount(){
    cartCount.textContent=cart.length;
}





