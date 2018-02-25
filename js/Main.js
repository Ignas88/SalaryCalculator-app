function calcAntPop() {

    var antPopieriaus = parseFloat(document.getElementById('atl').value);
    var checkBox1 = document.getElementById("check1");
    var sodra = antPopieriaus * 0.15;
    var sDraudimas = antPopieriaus * 0.06;
    var darbdavioMokesciai = antPopieriaus * 0.3118;
    var dVietosKaina = antPopieriaus + darbdavioMokesciai;
    var iRankas = antPopieriaus - (sodra + sDraudimas + pensija);

    if (checkBox1.checked == true){
        var pensijaProc = 0.05;
    } else{
        var pensijaProc = 0.03;
    }

    var pensija = antPopieriaus * pensijaProc;

    document.getElementById('pajamuMokest').innerHTML = sodra;
    document.getElementById('Draudimas').innerHTML = sDraudimas;
    document.getElementById('Pensija').innerHTML = pensija;
    document.getElementById('DarbdavioMokesciai').innerHTML = darbdavioMokesciai.toFixed(2);
    document.getElementById('dVietosKaina').innerHTML = dVietosKaina;
    document.getElementById('iRankas').innerHTML = iRankas;
}

function calcAntRank() {

    var antRanku = parseFloat(document.getElementById('atl').value);
    var anRankPerAutorines = parseFloat(document.getElementById('atl2').value);
    var checkBox1 = document.getElementById("check1");

    if (checkBox1.checked == true){
        var pensijaProc = 0.05;
    } else{
        var pensijaProc = 0.03;
    }

    if(anRankPerAutorines > 0){
        var pajamuMokest2 = (antRanku + anRankPerAutorines) * 0.15;
        var sDraudimas2 = (antRanku + anRankPerAutorines) * 0.06;
        var pensija2 = (antRanku + anRankPerAutorines) * pensijaProc;
        var antPopieriaus2 = (antRanku + anRankPerAutorines) + pajamuMokest2 + sDraudimas2 + pensija2;
    }else {
        var pajamuMokest2 = antRanku * 0.15;
        var sDraudimas2 = antRanku * 0.06;
        var pensija2 = antRanku * pensijaProc;
        var antPopieriaus2 = antRanku + pajamuMokest2 + sDraudimas2 + pensija2;
    }


    document.getElementById('pajamuMokest2').innerHTML = pajamuMokest2;
    document.getElementById('Draudimas2').innerHTML = sDraudimas2;
    document.getElementById('Pensija2').innerHTML = pensija2;
    document.getElementById('antPopieriaus2').innerHTML = antPopieriaus2;
}

function boxCheck1() {
    // Get the checkbox
    var checkBox1 = document.getElementById("check1");
    // Get the span
    var spanProc = document.getElementById("proc");

    if (checkBox1.checked == true){
        spanProc.innerText = '5';
    }else{
        spanProc.innerText = '3';
    }
}

function boxCheck2() {
    // Get the checkbox
    var checkBox2 = document.getElementById("check2");
    // Get the output
    var output = document.getElementById("well");

    // If the checkbox is checked, display the output
    if (checkBox2.checked == true){
        output.style.display = "block";
    } else {
        output.style.display = "none";
    }
}

function calcAutorines() {
    var autorinesPajamos = parseFloat(document.getElementById('pajAutor').value);
    var autoriniaiMokesciai = parseFloat(document.getElementById('aMokesc').value);
    var uzsakovoMokesciai = parseFloat(document.getElementById('uzsMokesc').value);
    var autoriuiRankos = autorinesPajamos - ((autorinesPajamos * autoriniaiMokesciai)/100);
    var uzsakovasMoka = autorinesPajamos + ((autorinesPajamos * uzsakovoMokesciai)/100);

    document.getElementById('autorRankos').innerHTML = autoriuiRankos;
    document.getElementById('uzsakMok').innerHTML = uzsakovasMoka;
}