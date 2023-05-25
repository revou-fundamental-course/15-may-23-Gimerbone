document.getElementById("hlp").onclick = function() {
    sisi = parseInt(document.getElementById("i2").value);
    result = sisi ** 2;
    document.getElementById("j1").innerHTML = "Hasil: " + result + " cm";

    // Replace nilai input dengan hasil
    document.getElementById("i2").value = "";
};

document.getElementById("hkp").onclick = function() {
    sisi = parseInt(document.getElementById("i2").value);
    result = sisi * 4;
    document.getElementById("j1").innerHTML = "Hasil: " + result + " cm";

    // Replace nilai input dengan hasil
    document.getElementById("i2").value = "";
};

document.getElementById("hlpp").onclick = function() {
    panjang = parseInt(document.getElementById("i3").value);
    lebar = parseInt(document.getElementById("i4").value);
    result = panjang * lebar;
    document.getElementById("j2").innerHTML = "Hasil: " + result + " cm";

    // Replace nilai input dengan hasil
    document.getElementById("i3").value = "";
    document.getElementById("i4").value = "";
};

document.getElementById("hkpp").onclick = function() {
    panjang = parseInt(document.getElementById("i3").value);
    lebar = parseInt(document.getElementById("i4").value);
    result = (panjang * 2) + (lebar * 2);
    document.getElementById("j2").innerHTML = "Hasil: " + result + " cm";

    // Replace nilai input dengan hasil
    document.getElementById("i3").value = "";
    document.getElementById("i4").value = "";
};