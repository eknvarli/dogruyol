function sendMail() {
    var link = "mailto:ekinnos@tutanota.com"
             + "?cc=ekinnos@tutanota.com"
             + "&subject=" + escape("DogruYol")
             + "&body=" + escape(document.getElementById('textarea').value)
    ;
 
    window.location.href = link;
}