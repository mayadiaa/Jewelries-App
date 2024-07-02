let products=[
    {
        imageUrl:'photos/blue\ brac1.jpg',
        imgUrl:'photos/blue\ brac2.webp',
        id: 1,
        name:'blue bracelet',
        price:79,
        incart:0
      },
      {
        imageUrl:'photos/bracelet2.jfif',
        imgUrl:'photos/bracelet1.jfif',
        id: 2,
        name:'beauty bracelet',
        price:100,
        incart:0
      },
      {
        imageUrl:'photos/gold\ brac1.jpg',
        imgUrl:'photos/gold\ brac2.jpg',
        id: 3,
        name:'gold bracelet',
        price:250,
        incart:0
      },
      {
        imageUrl:'photos/golden\ brac1.webp',
        imgUrl:'photos/golden\ brac2.webp',
        id: 4,
        name:'golden bracelet',
        price:80,
        incart:0
      },
      {
        imageUrl:'photos/green\ brac2.webp',
        imgUrl:'photos/green\ brac1.webp',
        id: 5,
        name:'green bracelet',
        price:170,
        incart:0
      },
      {
        imageUrl:'photos/silver\ brac2.jfif',
        imgUrl:'photos/silver\ brac1.jfif',
        id: 6,
        name:'silver bracelet',
        price:320,
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
        <div class="col-4 col-md-3 RDiv Images" id="${product.id}">
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




















