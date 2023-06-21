// let a = 8;
// let b = 10;
// console.log(a + b);

const navlink = document.querySelectorAll('.nav-link').forEach(e => e.addEventListener('click',function() {
    e.classList.toggle('active');
}))