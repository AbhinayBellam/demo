// use of ";"
alert(2+
    3+
    3
);

alert("helo")

[1,2].forEach(alert);



// ways to interact with user:
alert("hello world");
prompt("what is your age",18);
confirm("your age is 24 ?");



// ways to create function:
function func()    //normal function
{
    alert("says hi");
}

function func(a,b)  //normal function with parameters
{
    alert(a+b);
}

let func = function()  // function expression
{
    alert("says hi");
}

let func = function(a,b)  // function expression with parameters
{
    alert(a+b);
}

let func = () => alert("Says hi");  // arrow function

let func = (a,b) => alert(a+b);  // arrow function with parameters

function func(question, yes, no)
{
    if(confirm(question)) yes()
        else no();
}
function showOk()
{
    alert("you agreed");
}
function showNotOk()
{
    alert("you not agreed");
}
func("do you agree?", showOk, showNotOk);
