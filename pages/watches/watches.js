let products=[
    {
        imageUrl:'photos/w1.webp',
        imgUrl:'photos/w11.webp',
        id: 1,
        name:'circle silver earring',
        price:200,
        incart:0
      },
      {
        imageUrl:'photos/wa6.webp',
        imgUrl:'photos/wa66.webp',
        id: 2,
        name:'gold earring',
        price:215,
        incart:0
      },
      {
        imageUrl:'photos/w2.webp',
        imgUrl:'photos/w22.webp',
        id: 3,
        name:'green earring',
        price:300,
        incart:0
      },
      {
        imageUrl:'photos/w3.webp',
        imgUrl:'photos/w33.webp',
        id: 4,
        name:'pink earring',
        price:400,
        incart:0
      },
      {
        imageUrl:'photos/w7.jpg',
        imgUrl:'photos/w77.webp',
        id: 5,
        name:'silver1 earring',
        price:450,
        incart:0
      },
      {
        imageUrl:'photos/w6.webp',
        imgUrl:'photos/w66.webp',
        id: 6,
        name:'silver2 earring',
        price:390,
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





