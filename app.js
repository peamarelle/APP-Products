class Product {
    constructor(name, price, year) {
        this.name = name;
        this.year = year;
        this.price = price;
    }
}

class UI {

    addProduct() {
        document.getElementById('product-list');
        const element = document.createElement('div');

    }

    deleteProduct() {

    }

    showMessage() {

    }

}
//DOM EVENTS

document.getElementById('products-form').addEventListener('submit', (e) => {
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;

    const product = new Product(name, price, year);

    e.preventDefault();
});