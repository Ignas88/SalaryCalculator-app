window.Calculator = {
    //mokesciu skaiciavimas nuo atlyginimo ant popieriaus
    onPaper: function () {
        //istraukiame ivesta atlyginima is html failo
        var onPaper = parseFloat($("#salary").val());

        //istraukiame checkbox kintamaji +2proc pridejimui su if funkcija procentu pakeitimui skaiciavimuose
        var pensionProc = $("#check1").prop("checked") ? 0.05 : 0.03;

        //nustatome visus kintamuosius mokesciu apskaiciavimui, jei neivestas atl ant popieriaus visos reiksmes = 0
        var incomeTax = insurance = pension = employerTax = workplacePrice = toHands = 0;

        if (onPaper > 0) {
             incomeTax = onPaper * 0.15;
             insurance = onPaper * 0.06;
             pension = onPaper * pensionProc;
             employerTax = onPaper * 0.3118;
             workplacePrice = onPaper + employerTax;
             toHands = onPaper - (incomeTax + insurance + pension);
        }

        //perkeliame kintamuosius i html faila, po kablelio 2 skaiciai
        $("#incomeTax").html(incomeTax.toFixed(2));
        $("#insurance").html(insurance.toFixed(2));
        $("#pension").html(pension.toFixed(2));
        $("#employerTax").html(employerTax.toFixed(2));
        $("#workplacePrice").html(workplacePrice.toFixed(2));
        $("#toHands").html(toHands.toFixed(2));
    },

    //mokesciu skaiciavimas nuo atlyginimo i rankas
    onHands: function () {
        //istraukiame ivestus atlyginimus is html failo
        var onHands = parseFloat($("#salary").val());
        var onHandsCopyright = parseFloat($("#salary2").val());

        //istraukiame checkbox kintamaji +2proc pridejimui ir panaudojame su if funkcija
        var pensionProc = $("#check1").prop("checked") ? 0.05 : 0.03;

        //jei neivestas kuris nors atl skaiciuojame be jo, jei nieko neivesta visos reiksmes = 0
        var incomeTax = insurance = pension = onPaper = 0;

        if(onHandsCopyright > 0 && onHands > 0){
             incomeTax = (onHands + onHandsCopyright) * 0.15;
             insurance = (onHands + onHandsCopyright) * 0.06;
             pension = (onHands + onHandsCopyright) * pensionProc;
             onPaper = (onHands + onHandsCopyright) + incomeTax + insurance + pension;
        }else if (onHands > 0) {
             incomeTax = onHands * 0.15;
             insurance = onHands * 0.06;
             pension = onHands * pensionProc;
             onPaper = onHands + incomeTax + insurance + pension;
        } else if (onHandsCopyright > 0) {
             incomeTax = onHandsCopyright * 0.15;
             insurance = onHandsCopyright * 0.06;
             pension = onHandsCopyright * pensionProc;
             onPaper = onHandsCopyright + incomeTax + insurance + pension;
        }

        //apskaiciuotus kintamuosius perkeliame i html faila, po kablelio 2 skaiciai
        $("#incomeTax").html(incomeTax.toFixed(2));
        $("#insurance").html(insurance.toFixed(2));
        $("#pension").html(pension.toFixed(2));
        $("#onPaper").html(onPaper.toFixed(2));
    },

    copyright: function () {
        //istraukiame ivestus atlyginima ir procentus is html failo
        var incomeCopyright = parseFloat($("#incomeCopyright").val());
        var copyrightTax = parseFloat($("#cTax").val());
        var startupTax = parseFloat($("#startTax").val());

        //nustatome kintamuosius ir ju apskaiciavimus, jei nevestas atl ir procentai, visos reiksmes = 0
        var authorToHands = startupPay = 0;

        if(incomeCopyright > 0 && copyrightTax > 0 && startupTax > 0){
             authorToHands = incomeCopyright - ((incomeCopyright * copyrightTax)/100);
             startupPay = incomeCopyright + ((incomeCopyright * startupTax)/100);
        }

        //apskaiciuotus kintamuosius perkeliame i html faila, po kablelio 2 skaiciai
        $("#authorToHands").html(authorToHands.toFixed(2));
        $("#startupPay").html(startupPay.toFixed(2));
    }
};

//checkboxas keiciantis procentus pensiju draudime
function boxCheck1() {
    //jei checkboxas pazymetas textas = 5, kitaip = 3
    if ($("#check1").prop("checked")){
        $("#proc").text('5');
    }else{
        $("#proc").text('3');
    }
}

//checkboxas atidarantis ir uzdarantis autoriniu teisiu mokesciu apskaiciavimo langa
function boxCheck2() {
    if ($("#check2").prop("checked")){
        $("#well").show();
    } else {
        $("#well").hide();
    }
}

