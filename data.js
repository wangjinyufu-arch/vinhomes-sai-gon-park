const APARTMENT_DATA = [
    {
        "macan": "ĐLCV1-39",
        "type": "finished",
        "dtDat": 112,
        "dtXay": 150.3,
        "priceBeforeVat": 17096810037,
        "vat": 1600589353,
        "kpbt": 100709944,
        "allin": 18798109334
    },
    {
        "macan": "ĐLCV2-08",
        "type": "rough",
        "dtDat": 112,
        "dtXay": 155.1,
        "priceBeforeVat": 15691592294,
        "vat": 1460067578,
        "kpbt": 87760549,
        "allin": 17239420421
    },
    {
        "macan": "TL10-53",
        "type": "rough",
        "dtDat": 80,
        "dtXay": 145.4,
        "priceBeforeVat": 6849463353,
        "vat": 607023727,
        "kpbt": 38091959,
        "allin": 7494579039
    },
    {
        "macan": "TL10-22",
        "type": "rough",
        "dtDat": 112,
        "dtXay": 228.9,
        "priceBeforeVat": 9478881311,
        "vat": 838796480,
        "kpbt": 52788824,
        "allin": 10370466615
    },
    {
        "macan": "TL11-04",
        "type": "rough",
        "dtDat": 70,
        "dtXay": 228.1,
        "priceBeforeVat": 8337219361,
        "vat": 765539654,
        "kpbt": 46504601,
        "allin": 9149263616
    },
    {
        "macan": "TL15-95",
        "type": "rough",
        "dtDat": 50,
        "dtXay": 156.8,
        "priceBeforeVat": 5846717531,
        "vat": 535970123,
        "kpbt": 32510939,
        "allin": 6415198593
    },
    {
        "macan": "TL32-31",
        "type": "finished",
        "dtDat": 112,
        "dtXay": 225.4,
        "priceBeforeVat": 10502327933,
        "vat": 941141142,
        "kpbt": 61698032,
        "allin": 11505167107
    },
    {
        "macan": "TL33-32",
        "type": "finished",
        "dtDat": 112,
        "dtXay": 225.4,
        "priceBeforeVat": 11775866832,
        "vat": 1068495032,
        "kpbt": 69232087,
        "allin": 12913593951
    },
    {
        "macan": "TL35-29",
        "type": "finished",
        "dtDat": 50,
        "dtXay": 166.7,
        "priceBeforeVat": 6528342690,
        "vat": 604132639,
        "kpbt": 38259479,
        "allin": 7170734808
    },
    {
        "macan": "TL35-51",
        "type": "finished",
        "dtDat": 50,
        "dtXay": 166.7,
        "priceBeforeVat": 6595230202,
        "vat": 610821390,
        "kpbt": 38655175,
        "allin": 7244706767
    },
    {
        "macan": "TL6-69",
        "type": "rough",
        "dtDat": 72,
        "dtXay": 176.7,
        "priceBeforeVat": 9911169622,
        "vat": 920986615,
        "kpbt": 55281441,
        "allin": 10887437678
    },
    {
        "macan": "TL7-72",
        "type": "rough",
        "dtDat": 70,
        "dtXay": 225.3,
        "priceBeforeVat": 7120453921,
        "vat": 643863110,
        "kpbt": 39614604,
        "allin": 7803931635
    },
    {
        "macan": "TL7-104",
        "type": "rough",
        "dtDat": 70,
        "dtXay": 225.3,
        "priceBeforeVat": 7010860875,
        "vat": 632903806,
        "kpbt": 39052042,
        "allin": 7682816723
    },
    {
        "macan": "TL8-89",
        "type": "rough",
        "dtDat": 50,
        "dtXay": 145.3,
        "priceBeforeVat": 5315835182,
        "vat": 482881888,
        "kpbt": 29528011,
        "allin": 5828245081
    },
    {
        "macan": "TL9-05",
        "type": "rough",
        "dtDat": 50,
        "dtXay": 145.3,
        "priceBeforeVat": 5709168097,
        "vat": 522215180,
        "kpbt": 31738075,
        "allin": 6263121352
    },
    {
        "macan": "AS79-01",
        "type": "gianXay",
        "dtDat": 85.3,
        "dtXay": 250,
        "priceBeforeVat": 10617212577,
        "vat": 978636277,
        "kpbt": 57822809,
        "allin": 11653671663
    },
    {
        "macan": "AS72-22",
        "type": "gianXay",
        "dtDat": 50,
        "dtXay": 157.7,
        "priceBeforeVat": 5185123374,
        "vat": 469810707,
        "kpbt": 27893055,
        "allin": 5682827136
    },
    {
        "macan": "AS72-24",
        "type": "gianXay",
        "dtDat": 50,
        "dtXay": 157.7,
        "priceBeforeVat": 5115282569,
        "vat": 462826627,
        "kpbt": 27500633,
        "allin": 5605609829
    },
    {
        "macan": "AS48-21",
        "type": "gianXay",
        "dtDat": 60,
        "dtXay": 188.3,
        "priceBeforeVat": 6537031499,
        "vat": 595261194,
        "kpbt": 35315343,
        "allin": 7167608036
    },
    {
        "macan": "AS51-40",
        "type": "gianXay",
        "dtDat": 50,
        "dtXay": 150.2,
        "priceBeforeVat": 5504936126,
        "vat": 501791983,
        "kpbt": 29732628,
        "allin": 6036460737
    },
    {
        "macan": "AS60-42",
        "type": "gianXay",
        "dtDat": 80,
        "dtXay": 144.2,
        "priceBeforeVat": 7108713682,
        "vat": 632948760,
        "kpbt": 38778036,
        "allin": 7780440478
    },
    {
        "macan": "AS60-44",
        "type": "gianXay",
        "dtDat": 80,
        "dtXay": 144.1,
        "priceBeforeVat": 7107856193,
        "vat": 632863011,
        "kpbt": 38773786,
        "allin": 7779492990
    },
    {
        "macan": "AS52-24",
        "type": "gianXay",
        "dtDat": 50,
        "dtXay": 145.8,
        "priceBeforeVat": 5397365806,
        "vat": 491034951,
        "kpbt": 29153205,
        "allin": 5917553962
    }
];