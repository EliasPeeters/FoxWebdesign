
window.addEventListener("resize", function() {
    if (window.matchMedia("(min-width: 1200px)").matches) {
        document.getElementById('WebdesignIcon').style.display = 'inline';
        document.getElementById('HostingIcon').style.display = 'inline';
        document.getElementById('MoneyIcon').style.display = 'inline';
        document.getElementById('OtherIcon').style.display = 'inline';

    } else {

        document.getElementById('WebdesignIcon').style.display = 'none';
        document.getElementById('HostingIcon').style.display = 'none';
        document.getElementById('MoneyIcon').style.display = 'none';
        document.getElementById('OtherIcon').style.display = 'none';

    }

});


function test() {
    document.body.scrollTop = 400px;

}

