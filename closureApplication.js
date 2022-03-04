const cart = () => {
    let item = 0;
    console.log('I am in the cart');
    return {
        addItem: () => {
            item++;
        },
        getCount : () => {
            return `Items in the cart: ${item}`;
        }
    };
}

const myCart = cart();
myCart.addItem();
console.log(myCart.getCount());
myCart.addItem();
myCart.addItem();
myCart.addItem();
console.log(myCart.getCount());
