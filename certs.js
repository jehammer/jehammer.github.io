$(document).ready(function(){
    $("body").hide();
    var orientation = (screen.orientation || {}).type || screen.mozOrientation || screen.msOrientation;
    console.log(orientation);
    if(orientation === "portrait-primary"){
        document.getElementById("appendhere").innerHTML +='<p>Mobile view of PDF files is not yet setup.</p>';
        document.getElementById("appendhere").innerHTML +='<button type="button" onClick="getMSCert()" class="btn btn-primary">Click Here To Download MS Access Cert!</button>';
        
        console.log("Mobile Viewer");
    }
    else if(orientation === "landscape-primary"){
        document.getElementById("appendhere").innerHTML +='<embed src="/work/Joshua Hammer MS Cert.pdf" width="100%" height="1000vh" type="application/pdf">';
        console.log("Desktop View");
    }
    else{
        document.getElementById("appendhere").innerHTML += '<p>This website only supports portrait mobile or landscape desktop views currently.<p>'
        console.log("Other Screen oreintation");
    }
    $("body").fadeIn();
})

function getMSCert(){
    document.getElementById("appendhere").innerHTML += '<iframe src="/work/Joshua Hammer MS Cert.pdf" style="position: absolute; width:0; height:0; border:0;"></iframe>';
}