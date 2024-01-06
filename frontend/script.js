let val = prompt("Enter the color");
switch(val){
    case 'violet':
        alert("Violet")
        break
    case 'indigo':
        alert("Indigo")
        break
    case 'blue':
        alert("Blue")
        break
    case 'green':
        alert("green")
        break
    case 'yellow':
        alert("Yellow")
        break
    case 'orange':
        alert("Orange")
        break
    case 'red':
        alert("Red")
        break
    default:
        alert("Not a rainbow color")
}

function exmaple(name,age){ this.name = name; this.age = age}  
let obj = new exmaple("karan",99) 
obj.name;
obj.age
