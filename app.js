class Product {
    constructor(name, price, year) {
        this.name = name;
        this.year = year;
        this.price = price;
    }
}

class UI {

    static addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card-body">
                <strong>Product Name: </strong>${product.name}
                <strong>Product Price: </strong>${product.price}
                <strong>Product Year: </strong>${product.year}
                <a class="btn btn-danger" name="delete" href="#">Delete</a>
            </div>
        `;
        productList.appendChild(element);
    }

    static resetForm() {
        document.getElementById('product-form').reset();
    }

    static deleteProduct(element) {
        if(element.name==="delete") {
            element.parentElement.parentElement.remove();
        }
    }

    static showMessage() {

    }

}
//DOM EVENTS

document.getElementById('product-form').addEventListener('submit', e => {
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;

    const product = new Product(name, price, year);
    UI.addProduct(product);
    UI.resetForm();//limpio los datos del formulario para poder ingresar nuevos datos
    e.preventDefault();//este evento cancela el autorefresh del formulario. El auto refresh se utiliza para luego recibir la respuesta del servidor
});

document.getElementById('product-list').addEventListener('click', e => {
    UI.deleteProduct(e.target);
});