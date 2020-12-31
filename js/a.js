
let insertBut = document.querySelector('#insert-product');
insertBut.addEventListener('click', (e) => {
    const name = document.getElementById('product-name').value,
        price = document.getElementById('product-price').value,
        img = document.getElementById('product-image').value;
        console.log(name)
    const newRow = addNewRow(name, price, img);
    localStorage.setItem('newProduct', newRow)
    location.href= 'admin.html';
})


function addNewRow(name, price, img){
    img
    let newRow = `<tr><td class="shoping__cart__item"><img src="${img}" alt=""><h5>${name}</h5></td><td class="shoping__cart__price">${price}</td><td ><a href="./admin-edit.html"><h5>Sửa</h5></a></td><td><button class="remove-button"> Xóa</button></td></tr>`
    return newRow;    
}