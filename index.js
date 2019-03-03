console.log('hello dvaivd');
var pingus = ['a', 'b', 'c'];
console.log(pingus);
console.log(pingus[2]);
var ducko = {
    name: 'Duck',
    age: 9
};
console.log(duck);
function a() {
    document.body.innerHTML = 'EEEEEEEEE';
}

function duck (name, age, cute) {
    this.name = name;
    this.age = age;
    this.cute = cute;
    console.log('a duck was born');
    //some other code
}

function button (text, handler) {
    var el = document.createElement('button');
    el.innerText = text;
    el.addEventListener('click', function () {
        handler;
    });
    document.body.appendChild(el);
}

ducko = new duck('DOKKKSOEKI', 9302, true);

if (ducko.cute == true) {
  console.log('awwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww')
}

for (var i = 0; i < 30; i++) {
    console.log(i);
}
var d = 15;
while (d > 0) {
  console.log('While loop');
  d--;
}
for (var i = 30; i > 0; i--) {
    console.log('SAME THING FOR LOOP BUT REVERSED: ' + i);
}

var owo = new button('hi iam a button and its button time who wants a button please i just wanna bie', console.log('its butotn mine'));

var iput = document.getElementById('iput');

var buton = document.getElementById('buton');

buton.addEventListener('click', function (e) {
    alert(iput.value + 'at (' + e.clientX + ',' + e.clientY + ')');
})
