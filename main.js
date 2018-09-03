
window.onscroll = showNavigatorBar;

function showNavigatorBar() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("Navigation").style.backgroundColor = "rgba(14,22, 84, 0.9)";
    }
    else {
        document.getElementById("Navigation").style.backgroundColor ="";
    }
}


function Money() {
    document.getElementById("LeftImage").src = 'Images/money.svg';
    document.getElementById('Title1').innerText = 'Unser Service ist';
    document.getElementById('Title2').innerText = 'sehr günstig und';
    document.getElementById('Title3').innerText = 'schnell';
    document.getElementById('TextOnTitle').innerText = 'Dies ist ein Test, washier stehen kann, ohne das es irgendwienen sind und ich schriebe ganze viele Wörter mit ganzen vielen Fehlern';
}

function Webdesign() {
    document.getElementById("LeftImage").src = 'Images/Monitor2.svg';
    document.getElementById('Title1').innerText = 'Professionelles und';
    document.getElementById('Title2').innerText = 'Individuelles Webdesign';
    document.getElementById('Title3').innerText = '& Webosting';
    document.getElementById('TextOnTitle').innerText = 'Wir bei FOX Webdesign sind ein kleines Team von engagierten Designern, die ihenen dabei helfen wollen, die richtige Website oder das richtige Design individuell für ihr Unternehmen zu kreieren.';
    document.getElementById('TextOnTitle').style.color = 'white';
    document.getElementById('TextOnTitle').style.marginTop = '20px';
}


function Server() {
    document.getElementById("LeftImage").src = 'Images/Server.svg';
    document.getElementById('Title1').innerText = 'Wir hosten ihre';
    document.getElementById('Title2').innerText = 'Website gegen einen';
    document.getElementById('Title3').innerText = 'kleinen Aufpreis';
    document.getElementById('TextOnTitle').innerText = 'Dies ist ein Test, washier stehen kann, ohne das es irgendwienen sind und ich schriebe ganze viele Wörter mit ganzen vielen Fehlern';
    document.getElementById('TextOnTitle').style.color = 'white';
    document.getElementById('TextOnTitle').style.marginTop = '20px';
}

function Sonstiges() {
    document.getElementById("LeftImage").src = 'Images/Design.svg';
    document.getElementById('Title1').innerText = 'Wir hosten ihre';
    document.getElementById('Title2').innerText = 'Website gegen einen';
    document.getElementById('Title3').innerText = 'kleinen Aufpreis';
    document.getElementById('TextOnTitle').innerText = 'Dies ist ein Test, washier stehen kann, ohne das es irgendwienen sind und ich schriebe ganze viele Wörter mit ganzen vielen Fehlern';
    document.getElementById('TextOnTitle').style.color = 'white';
    document.getElementById('TextOnTitle').style.marginTop = '20px';
}


function ueberuns() {
    document.body.scrollTop = 800;
    document.documentElement.scrollTop = 800;
}


function home() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}