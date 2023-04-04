
const pannableDiv = document.querySelector('.container');
let isDragging = false;
let x, y;

pannableDiv.addEventListener('mousedown', (e) => {
    if (e.button === 2){
        isDragging = true;
        x = e.pageX - pannableDiv.offsetLeft;
        y = e.pageY - pannableDiv.offsetTop;
    }
});

pannableDiv.addEventListener('mouseup', () => {
    isDragging = false;
});

pannableDiv.addEventListener('mousemove', (e) => {
    if (isDragging) {
        pannableDiv.style.left = `${e.pageX - x}px`;
        pannableDiv.style.top = `${e.pageY - y}px`;

       console.log(pannableDiv.style.left, pannableDiv.style.top)
    }
});

pannableDiv.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });


