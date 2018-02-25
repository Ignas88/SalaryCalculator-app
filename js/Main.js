window.Calculator = {
    //mokesciu skaiciavimas nuo atlyginimo ant popieriaus
    onPaper: function () {
        //istraukiame ivesta atlyginima is html failo
        var onPaper = parseFloat(document.getElementById('salary').value);

        //istraukiame checkbox kintamaji +2proc pridejimui
        var checkBox1 = document.getElementById("check1");

        //nustatome visus kintamuosius mokesciu apskaiciavimui
        var incomeTax = onPaper * 0.15;
        var insurance = onPaper * 0.06;
        var pensionProc = checkBox1.checked ? 0.05 : 0.03;
        var pension = onPaper * pensionProc;
        var employerTax = onPaper * 0.3118;
        var workplacePrice = onPaper + employerTax;
        var toHands = onPaper - (incomeTax + insurance + pension);

        //perkeliame kintamuosius i html faila
        document.getElementById('incomeTax').innerHTML = incomeTax;
        document.getElementById('insurance').innerHTML = insurance;
        document.getElementById('pension').innerHTML = pension;
        document.getElementById('employerTax').innerHTML = employerTax.toFixed(2);
        document.getElementById('workplacePrice').innerHTML = workplacePrice;
        document.getElementById('toHands').innerHTML = toHands;
    },

    //mokesciu skaiciavimas nuo atlyginimo i rankas
    onHands: function () {
        //istraukiame ivestus atlyginimus is html failo
        var onHands = parseFloat(document.getElementById('salary').value);
        var onHandsCopyright = parseFloat(document.getElementById('salary2').value);

        //istraukiame checkbox kintamaji +2proc pridejimui ir panaudojame su if funkcija
        var checkBox1 = document.getElementById("check1");
        //if funkcija procentu pakeitimui skaiciavimuose
        var pensionProc = checkBox1.checked ? 0.05 : 0.03;

        //jei ivestas autoriniu teisiu atl, mokescius skaiciuojame su juo, kitaip be jo
        if(onHandsCopyright > 0){
            var incomeTax = (onHands + onHandsCopyright) * 0.15;
            var insurance = (onHands + onHandsCopyright) * 0.06;
            var pension = (onHands + onHandsCopyright) * pensionProc;
            var onPaper = (onHands + onHandsCopyright) + incomeTax + insurance + pension;
        }else {
            var incomeTax = onHands * 0.15;
            var insurance = onHands * 0.06;
            var pension = onHands * pensionProc;
            var onPaper = onHands + incomeTax + insurance + pension;
        }

        //apskaiciuotus kintamuosius perkeliame i html faila
        document.getElementById('incomeTax').innerHTML = incomeTax;
        document.getElementById('insurance').innerHTML = insurance;
        document.getElementById('pension').innerHTML = pension;
        document.getElementById('onPaper').innerHTML = onPaper;
    },

    copyright: function () {
        //istraukiame ivestus atlyginima ir procentus is html failo
        var incomeCopyright = parseFloat(document.getElementById('incomeCopyright').value);
        var copyrightTax = parseFloat(document.getElementById('cTax').value);
        var startupTax = parseFloat(document.getElementById('startTax').value);

        //nustatome kintamuosius ir ju apskaiciavimus
        var authorToHands = incomeCopyright - ((incomeCopyright * copyrightTax)/100);
        var startupPay = incomeCopyright + ((incomeCopyright * startupTax)/100);

        //apskaiciuotus kintamuosius perkeliame i html faila
        document.getElementById('authorToHands').innerHTML = authorToHands;
        document.getElementById('startupPay').innerHTML = startupPay;
    }
};
//checkboxas keiciantis procentus pensiju draudime
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

//checkboxas atidarantis ir uzdarantis autoriniu teisiu mokesciu apskaiciavimo langa
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

