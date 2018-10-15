var counter = document.getElementById(counter).getContext('2d');
var no = 0; // starting point
var pointtofill = 4.72;
var cw = counter.canvas.width;
var ch = counter.canvas.height;
var diff;

function fillCounter () {
    diff((no/100) * Math.PI*2*10);

    counter.clearRect(0,0,cw,ch);

    counter.lineWidth = 2;

    counter.fillStyle = '#fff';

    counter.strokeStyle = '#333';

    counter.textAlign = 'center';

    counter.font = "25px monospace";

    counter.fillText = (no,100,110);

    counter.beginPath();

    counter.arc(100,100,90,pointtofill,diff/10+pointtofill);
    counter.stroke();

    if(no >= 80) {
        clearTimeout(fill);
    }
    no++;

}


