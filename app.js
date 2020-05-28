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
        this.showMessage('Producto borrado', 'danger')
    }

    static showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
        //Mostramos el mensaje en el container
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div, app);//Se agrega el div creado antes del id App
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 2000);
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
    UI.showMessage('Producto agregado', 'success');
    e.preventDefault();//este evento cancela el autorefresh del formulario. El auto refresh se utiliza para luego recibir la respuesta del servidor
});

document.getElementById('product-list').addEventListener('click', e => {
    UI.deleteProduct(e.target);
});

