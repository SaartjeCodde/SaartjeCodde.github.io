(function () {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                                window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();

var canvas = document.getElementById('seedOfLife');
var context = canvas.getContext('2d');
var x = canvas.width / 2;
var y = canvas.height / 2;
var radius = 75;
var endPercent = 101;
var curPerc = 0;
var counterClockwise = false;
var circ = Math.PI * 2;
var quart = Math.PI / 2;

context.lineWidth = 7;
context.strokeStyle = '#ffffff';

function animate(current) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(x, y, radius, -(quart), ((circ) * current) - quart, false);
    context.stroke();
    context.beginPath();
    context.arc(x + radius, y, radius, -(quart), ((circ) * current) - quart, false);
    context.stroke();
    context.beginPath();
    context.arc(x - radius, y, radius, -(quart), ((circ) * current) - quart, false);
    context.stroke();
    context.beginPath();
    context.arc(x + (radius / 2), y + radius * 0.85, radius, -(quart), ((circ) * current) - quart, false);
    context.stroke();
    context.beginPath();
    context.arc(x - (radius / 2), y + radius * 0.85, radius, -(quart), ((circ) * current) - quart, false);
    context.stroke();
    context.beginPath();
    context.arc(x + (radius / 2), y - radius * 0.85, radius, -(quart), ((circ) * current) - quart, false);
    context.stroke();
    context.beginPath();
    context.arc(x - (radius / 2), y - radius * 0.85, radius, -(quart), ((circ) * current) - quart, false);
    context.stroke();

    curPerc++;
    if (curPerc < endPercent) {
        requestAnimationFrame(function () {
            animate(curPerc / 100)
        });
    }
}

animate();