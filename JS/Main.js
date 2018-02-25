function calcAntPop() {

    var antPopieriaus = parseFloat(document.getElementById('atl').value);
    var sodra = antPopieriaus * 0.15;
    var sDraudimas = antPopieriaus * 0.06;
    var pensija = antPopieriaus * 0.03;
    var darbdavioMokesciai = antPopieriaus * 0.3118;
    var dVietosKaina = antPopieriaus + darbdavioMokesciai;
    var iRankas = antPopieriaus - (sodra + sDraudimas + pensija);


    document.getElementById('pajamuMokest').innerHTML = sodra;
    document.getElementById('Draudimas').innerHTML = sDraudimas;
    document.getElementById('Pensija').innerHTML = pensija;
    document.getElementById('DarbdavioMokesciai').innerHTML = darbdavioMokesciai.toFixed(2);
    document.getElementById('dVietosKaina').innerHTML = dVietosKaina;
    document.getElementById('iRankas').innerHTML = iRankas;
}

function calcAntRank() {

    var antRanku = parseFloat(document.getElementById('atl').value);
    var pajamuMokest2 = antRanku * 0.15;
    var sDraudimas2 = antRanku * 0.06;
    var pensija2 = antRanku * 0.03;
    var antPopieriaus2 = antRanku + pajamuMokest2 + sDraudimas2 + pensija2;


    document.getElementById('pajamuMokest2').innerHTML = pajamuMokest2;
    document.getElementById('Draudimas2').innerHTML = sDraudimas2;
    document.getElementById('Pensija2').innerHTML = pensija2;
    document.getElementById('antPopieriaus2').innerHTML = antPopieriaus2;
}