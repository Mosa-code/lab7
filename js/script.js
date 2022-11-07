function init() {
    const outputDiv =  document.getElementById("textoutput");
    const input = document.getElementById("entryinput").value;
    const name = document.getElementById("nameDiv").innerText;
    alert(name + ": " + input);
    input.value = name + ": " + input;
    outputDiv.innerHTML = input;
    document.getElementById("entrybutton").addEventListener("click", init);
}
window.addEventListener('load', init);
