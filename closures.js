const kiran = (a, b) => {
    console.log("Namastee!!!");
    console.log(a + b);
    return function(a, b) {
        console.log(a + b);
    };
}

kiran(10, 20)(30, 40);
