window.Calculator = {
    setProc: function () {
             //istraukiame ivestus procentus, jei nieko neivestas kintamieji = 0
             var incomeProc =  parseFloat($("#incomeProc").val()) || 0;
             var insurProc = parseFloat($("#insurProc").val()) || 0;
             var pensProc = parseFloat($("#pensProc").val()) || 0;
             var emplProc = parseFloat($("#emplProc").val()) || 0;
             var copProc = parseFloat($("#cTax").val()) || 0;
             var startProc = parseFloat($("#startTax").val()) || 0;

             //prekeliame kintamuosius i i kita html elementa
             $("#incProc").html(incomeProc.toFixed(2));
             $("#insProc").html(insurProc.toFixed(2));
             $("#penProc").html(pensProc.toFixed(2));
             $("#empProc").html(emplProc.toFixed(2));
             $("#copProc").html(copProc.toFixed(2));
             $("#startProc").html(startProc.toFixed(2));
    },
    //mokesciu skaiciavimas nuo atlyginimo ant popieriaus
    onPaper: function () {

        //istraukiame procentus
        var incomeProc =  parseFloat($("#incomeProc").val()) || 0;
        var insurProc = parseFloat($("#insurProc").val()) || 0;
        var pensProc = parseFloat($("#pensProc").val()) || 0;
        var emplProc = parseFloat($("#emplProc").val()) || 0;

        //istraukiame ivesta atlyginima is html failo
        var onPaper = parseFloat($("#salary").val());

        //istraukiame checkbox kintamaji +2proc pridejimui su if funkcija procentu pakeitimui skaiciavimuose
        if($("#check1").prop("checked")){
            pensProc += 2;
        }

        //nustatome visus kintamuosius mokesciu apskaiciavimui, jei neivestas atl ant popieriaus visos reiksmes = 0
        var incomeTax = insurance = pension = employerTax = workplacePrice = toHands = 0;

        if (onPaper > 0) {
             incomeTax = onPaper * (incomeProc/100);
             insurance = onPaper * (insurProc/100);
             pension = onPaper * (pensProc/100);
             employerTax = onPaper * (emplProc/100);
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

        //istraukiame procentus
        var incomeProc =  parseFloat($("#incomeProc").val()) || 0;
        var insurProc = parseFloat($("#insurProc").val()) || 0;
        var pensProc = parseFloat($("#pensProc").val()) || 0;

        //istraukiame ivestus atlyginimus is html failo
        var onHands = parseFloat($("#salary").val());
        var onHandsCopyright = parseFloat($("#salary2").val());

        //istraukiame checkbox kintamaji +2proc pridejimui ir panaudojame su if funkcija
        if($("#check1").prop("checked")){
            pensProc += 2;
        }

        //jei neivestas kuris nors atl skaiciuojame be jo, jei nieko neivesta visos reiksmes = 0
        var incomeTax = insurance = pension = onPaper = 0;

        if(onHandsCopyright > 0 && onHands > 0){
             incomeTax = (onHands + onHandsCopyright) * (incomeProc/100);
             insurance = (onHands + onHandsCopyright) * (insurProc/100);
             pension = (onHands + onHandsCopyright) * (pensProc/100);
             onPaper = (onHands + onHandsCopyright) + incomeTax + insurance + pension;
        }else if (onHands > 0) {
             incomeTax = onHands * (incomeProc/100);
             insurance = onHands * (insurProc/100);
             pension = onHands * (pensProc/100);
             onPaper = onHands + incomeTax + insurance + pension;
        } else if (onHandsCopyright > 0) {
             incomeTax = onHandsCopyright * (incomeProc/100);
             insurance = onHandsCopyright * (insurProc/100);
             pension = onHandsCopyright * (pensProc/100);
             onPaper = onHandsCopyright + incomeTax + insurance + pension;
        }

        //apskaiciuotus kintamuosius perkeliame i html faila, po kablelio 2 skaiciai
        $("#incomeTax").html(incomeTax.toFixed(2));
        $("#insurance").html(insurance.toFixed(2));
        $("#pension").html(pension.toFixed(2));
        $("#onPaper").html(onPaper.toFixed(2));
    },

    copyright: function () {
        //istraukiame ivesta atlyginima ir procentus is html failo
        var incomeCopyright = parseFloat($("#incomeCopyright").val());
        var copyrightTax = parseFloat($("#cTax").val()) || 0;
        var startupTax = parseFloat($("#startTax").val()) || 0;

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
    var pensProc = parseFloat($("#pensProc").val());
    //jei checkboxas pazymetas textas + 2, kitaip + 0
    if ($("#check1").prop("checked")){
        pensProc += 2;
        $("#penProc").html(pensProc.toFixed(2));
    }else{
        pensProc += 0;
        $("#penProc").html(pensProc.toFixed(2));
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

//paspaudus settings icona atsidaro/uzsidaro nustatymu langas
function settingsClick() {
    if ($("#settingsWindow").css("display") == "block") {
        $("#settingsWindow").hide();
    } else {
        $("#settingsWindow").show();
    }
}

