let todo = document.querySelector("#head1");
let but = document.querySelector('#buthead');
let para = document.querySelector('#para');
let counter=0;
but.addEventListener('click',function(e){
    var paragraph1 = document.createElement('li');
    e.preventDefault();
    paragraph1.textContent=todo.value;
    var button1 = document.createElement('button');
    var button2 = document.createElement('button');
    var icon1 = document.createElement('i');
    var icon2 = document.createElement('i');
    icon2.setAttribute("class","fa-solid fa-user-pen");
    icon1.setAttribute("class","fa fa-trash");
    button2.appendChild(icon2);
    button1.appendChild(icon1);
    button1.type='submit';
    button2.type='submit';
    paragraph1.appendChild(button2);
    paragraph1.appendChild(button1);
    para.appendChild(paragraph1);
    let inp = document.createElement('input');
    inp.setAttribute("type","checkbox");
    paragraph1.appendChild(inp);
    icon1.addEventListener('click',function(){
        remove(this.parentNode.parentNode);
    });
    icon2.addEventListener('click',function (e) {
        e.preventDefault();
        edit(this.parentNode.parentNode);
    });
});
function remove(but) {
    but.parentNode.removeChild(but);
}
function edit(t) {
    t.textContent=prompt();
    var parent = t;
    var button1 = document.createElement('button');
    var button2 = document.createElement('button');
    var icon1 = document.createElement('i');
    var icon2 = document.createElement('i');
    icon2.setAttribute("class","fa-solid fa-user-pen");
    icon1.setAttribute("class","fa fa-trash");
    button2.appendChild(icon2);
    button1.appendChild(icon1);
    button1.type='submit';
    button2.type='submit';
    parent.appendChild(button2);
    parent.appendChild(button1);
    let inp = document.createElement('input');
    inp.setAttribute("type","checkbox");
    parent.appendChild(inp);
    t=parent;
    icon1.addEventListener('click',function(){
        remove(this.parentNode.parentNode);
    });
    icon2.addEventListener('click',function (e) {
        e.preventDefault();
        edit(this.parentNode.parentNode);
    });
};