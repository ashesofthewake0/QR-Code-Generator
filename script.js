document.getElementById("toggleAdvancedButton").addEventListener("click", function() {
    const advancedOptions = document.getElementById("advancedOptions");
    advancedOptions.style.display = advancedOptions.style.display === "none" ? "block" : "none";
});

document.getElementById("generateButton").addEventListener("click", function() {
    generateQRCode();
});

function generateQRCode() {
    const text = document.getElementById("text").value;
    const size = parseInt(document.getElementById("size").value);
    const colorDark = document.getElementById("colorDark").value;
    const colorLight = document.getElementById("colorLight").value;

    const qrCodeContainer = document.getElementById("qrcode");
    qrCodeContainer.innerHTML = "";

    new QRCode(qrCodeContainer, {
        text: text,
        width: size,
        height: size,
        colorDark: colorDark,
        colorLight: colorLight
    });
}
