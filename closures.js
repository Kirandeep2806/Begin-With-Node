const kiran = (a, b) => {
    let name=  "Closures!!!";
    console.log(a + b, `${name}`);
    return function(a, b) {
        console.log(a + b, `${name}`);
    };
}

kiran(10, 20)(30, 40);
