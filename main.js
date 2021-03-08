var mouse_event= "empty";
var last_position_x, last_position_y;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color = "black";
line_width= 1;

canvas.addEventListener ("mousedown", my_mouse_down);
function my_mouse_down(e)
{
    mouse_event = "mouseDown";
}

canvas.addEventListener ("mousemove", my_mouse_move);
function my_mouse_move(e)
{
    current_position_x = e.clientX - canvas.offsetLeft;
    current_position_y = e.clientY - canvas.offsetTop;

    if (mouse_event=="mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth=line_width;
        console.log("Last position of x and y co-ordinates are ");
        console.log("x = " + last_position_x + " y = "  + last_position_y);
        ctx.moveTo(last_position_x,last_position_y);
        console.log("Current position of x and y co-ordinates are ");
        console.log("x = " + current_position_x + " y = " + current_position_y);
        ctx.lineTo(current_position_x, current_position_y);
        ctx.stroke();
    }
    last_position_x=current_position_x;
    last_position_y=current_position_y;
}

canvas.addEventListener ("mouseup",my_mouseup);
function my_mouseup(e)
 {
    mouse_event= "mouseUp";
} 

canvas.addEventListener ("mouseleave",my_mouseleave);
function my_mouseleave(e)
 {
    mouse_event= "mouseLeave";
} 