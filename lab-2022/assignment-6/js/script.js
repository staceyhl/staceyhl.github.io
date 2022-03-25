let cheeses = document.querySelectorAll(".cheese");
let container = document.querySelector("#container");

cheeses.forEach(function (cheese) {
    cheese.style.left = (90 * Math.random()) + '%';

    cheese.style.top = (80 * Math.random()) + '%';
});

container.addEventListener('click', function (event) {
    if (event.target.classList.contains('cheese')) {
        event.target.remove();
    }
});