const EuropaiUnio = [{
    orszag: "Ausztria",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Belgium",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Bulgária",
    csatlakozas: "2007.01.01"
},
{
    orszag: "Ciprus",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Csehország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Dánia",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Egyesült Királyság",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Észtország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Finnország",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Franciaország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Görögország",
    csatlakozas: "1981.01.01"
},
{
    orszag: "Hollandia",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Horvátország",
    csatlakozas: "2013.07.01"
},
{
    orszag: "Írország",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Lengyelország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Lettország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Litvánia",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Luxemburg",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Magyarország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Málta",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Németország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Olaszország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Portugália",
    csatlakozas: "1986.01.01"
},
{
    orszag: "Románia",
    csatlakozas: "2007.01.01"
},
{
    orszag: "Spanyolország",
    csatlakozas: "1986.01.01"
},
{
    orszag: "Svédország",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Szlovákia",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Szlovénia",
    csatlakozas: "2004.05.01"
}
]

//Tagállamok száma
function tagallamokSzama(){
	document.write("Az Európai Unió tagállamainak száma: "+EuropaiUnio.length);
}
tagallamokSzama();

// Májusban csatlakozott országok

function csatlakozottMajus(){
	let majus=[];
   for (i=0;i<EuropaiUnio.length;i++){
   		if(EuropaiUnio[i].csatlakozas.includes("05"))
        {
    majus.push(" "+EuropaiUnio[i].orszag);
    }
    }
    return majus;
 }
document.write("<br>A májusban csatlakozott országok: "+csatlakozottMajus());

// Utolsó csatlakozott ország
function utoljaraCsatlakozott(){
	let utoljara=0;
    	for(let i=1;i<EuropaiUnio.length;i++)
		{
			if(EuropaiUnio[i].csatlakozas>EuropaiUnio[utoljara].csatlakozas)
        	{
        		utoljara=i;
    		}    
    	
		}
    return EuropaiUnio[utoljara].orszag;
}
document.write("<br>Az utoljára csatlakozott ország: "+utoljaraCsatlakozott(EuropaiUnio));

// melyik évben hányan csatlakoztak?
function melyikEvben() {
    for (let ev = 1958; ev <= 2023; ev++) {
      let szam = 0;
      for (let i = 0; i < EuropaiUnio.length; i++) {
        if (EuropaiUnio[i].csatlakozas.substring(0, 4) == ev) {
          szam++;
        }
      }
      if (szam > 0) {
         document.write("<br>"+ ev + " évben " + szam + " tagállam csatlakozott az Európai Unióhoz.");;
      }
    }
  }
  melyikEvben();