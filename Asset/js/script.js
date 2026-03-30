async function get_products(state) {
        let url = 'Asset/files/products.json';
        let req = await fetch(url);
        products = await req.json();
        if(state)load_productsUi()
        else return products
    }