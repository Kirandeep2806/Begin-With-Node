// Program for lexical scoping

// function foo() {
//     var x="Kiran";
//     bar();
// }

// function bar() {
//     console.log(x);
// }

// foo();

function foo() {
    var x="Kiran"; // replace var with let to see diff
    var x = "Dileep"; // replace var with let to see diff
    bar();

    function bar() {
        console.log(x);
    }
}

foo();

// Uncomment the above code to see the difference in output.