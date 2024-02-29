function generarQR() {
    var urlInput = document.getElementById('urlInput').value;
    if (urlInput.trim() !== '') {
        var qrCodeContainer = document.getElementById('qrCode');
        qrCodeContainer.innerHTML = '';
        var qrCode = new QRCode(qrCodeContainer, {
            text: urlInput,
            width: 200,
            height: 200
        });
    } else {
        alert('Por favor, ingresa un enlace válido.');
    }
}
