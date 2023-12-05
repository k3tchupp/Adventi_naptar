function Ablak(ez){
    d = new Date();
    num = d.getDate();

    selectedNum = ez.innerText * 1

    if (selectedNum === num || selectedNum < num) {
        alert("Boldog karácsonyt!")
    } else {
        alert("Nem lehet csalni, nem!")
    }
}