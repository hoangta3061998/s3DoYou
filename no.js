function ok() {
    alert("<3");
}

function Troll() {
    let x = Math.round(Math.random()* window.innerHeight);
    let y = Math.round(Math.random()*window.innerWidth);
    document.getElementById('no').style.left = x + 'px';
    document.getElementById('no').style.top= y + 'px';


}


