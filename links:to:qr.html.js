<script>
 function generationQRCode() {
  var url = document.getElementById("urlInput").value;
  var qrcodeDiv = document.getElementById("qrcode");


    qrcodeDiv.innerHTML = "";

    var qrcode = new QRcode (qrcodeDiv, {
     text: url,
     width: 128,
     height: 128,

    })
 }
</script>
