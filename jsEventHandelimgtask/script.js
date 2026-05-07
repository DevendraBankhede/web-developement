document.getElementById("backgroundColor").addEventListener("change", changeBackgroundColor);

function changeBackgroundColor()
{
    const bc =  document.getElementById("backgroundColor").value
    document.getElementById("para").style.backgroundColor = bc;
}

document.getElementById("headingColor").addEventListener("change", changeHeadingColor);

function changeHeadingColor()
{
    const hc =  document.getElementById("headingColor").value
    document.getElementById("heading").style.color = hc;
}


document.getElementById("paragraphColor").addEventListener("change", changeParaColor);

function changeParaColor()
{
    const pc =  document.getElementById("paragraphColor").value
    document.getElementById("loremParagraph").style.color = pc;
}
function reset()
{
    window.location.reload();
}