var flag = true;

//method to open the tab in private window
function goSecure(url, tab) {
	browser.windows.create({"url": url, "incognito": true});
    browser.tabs.remove(tab.id);
	browser.tabs.create({"url": "about:blank"});
    flag = false;
}

var matchURL = function(tab) {
	var adcb 		= "adcb(india|netlink|careers)?"; //Abu Dhabi Commercial Bank Ltd.
    var american_exp = "americanexpress.com"; //American Express Bank Ltd.
	var arab_bangladesh = "abbl.com"; //Arab Bangladesh Bank Limited
	var allahabad 	= "all(ahabadbank|bankonline|bankcare).in"; //Allahabad Bank
	var andhra		= "(andhrabank|onlineandhrabank.net).in"; //Andhra Bank
	var axis 		= "axisbank.(com|co.in)"; //Axis Bank
   	var antwerpdiamond = "antwerpdiamondbank.com"; //Antwerp Diamond Bank N.V.
	var maybank 	= "maybank(.co.id|.com|2u.com.my)"; //Bank Internasional Indonesia
	var boa 		= "bankofamerica.com"; //Bank of America N.A.
	var bbk 		= "bbk(online|india).com"; //Bank of Bahrain & Kuwait BSC
	var barclays 	= "(home.)?barclays(.in|.com|.co.uk)?"; //Barclays Bank Plc
	var bnpparibas 	= "bnpparibas.co(m|.in)?"; //BNP PARIBAS
	var ceylon 		= "(combank.net|commercialbk.com|boc(.web)?.lk)"; //Bank of Ceylon
	var bob 		= "(bankofbaroda|bobibanking|barodarewardz).co(m|.in)"; //Bank of Baroda
	var boi 		= "bankofindia.(com|co.in)"; //Bank of India
    var bom 		= "(bankofmaharashtra|mahaconnect).in"; //Bank of Maharashtra
	var canara 		= "canarabank.(com|(org.)?in)"; //Canara Bank
	var central 	= "(centralbankofindia.co|(cbi|centralbank).net).in"; //Central Bank of India
	var calyon 		= "ca-(indosuez|cib).com"; //Calyon Bank
	var citi 		= "citi(bank.co.in|(group)?.com|.eu)"; //Citibank N.A.
	var shinhan 	= "bank.shinhan.com"; //Cho Hung Bank
	var ctbc 		= "(ctbcbank(usa)?.co(m|.id)|chinatrust(india)?.com)"; //Chinatrust Commercial Bank Ltd.
	var cityunion 	= "(cityunionbank.com|onlinecub.net)"; //City Union Bank Ltd.
	var coastalarea = "coastalareabank.com"; //Coastal Local Area Bank Ltd.
	var corp 		= "corp(bank(.biz|(net)?.com)|retail.com)"; //Corporation Bank
	var csb 		= "csb(net)?.co.in"; //Catholic Syrian Bank Ltd.
	var deutsche 	= "(db.com|deutsche(bank.co.in|-bank.de))"; //Deutsche Bank AG
	var dcb 		= "dcbbank.com"; //DCB Bank Limited.
	var dena 		= "denabank.co(m|.in)"; //Dena Bank
	var indusind 	= "indusind.com"; //IndusInd Bank Limited
	var icici 		= "icicibank.com"; //ICICI Bank
	var indian 		= "indian(-bank.com|bank(.net)?.in)"; //Indian Bank
	var iob			= "iob(net.co)?.in"; //Indian Overseas Bank
	var idbi 		= "idbi(.com|bank.co.in)"; //IDBI Bank Ltd.
	var jpmorgan 	= "(jpmorgan)?(.)?(jpmorgan|chase).com"; //J P Morgan Chase Bank, NA
	var kt 			= "ktb(.co.th|netbank.com)"; //Krung Thai Bank Public Company Ltd.
	var kotak 		= "kotak.com"; //Kotak Mahindra Bank Ltd.
	var karnataka 	= "karnatakabank.(com|co.in|info)"; //Karnataka Bank
	var kvb 		= "kvb(.co.in|in.com)"; //Karur Vysya Bank Ltd.
	var mashreq 	= "mashreq(bank|neo)?.(com|taleo.net)"; //Mashreqbank psc
	var mizuho 		= "mizuhobank.co(m|.jp)"; //Mizuho Corporate Bank Ltd.
	var oman 		= "oiboman.com"; //Oman International Bank S A O G
	var obc 		= "obc(india|online).co.in"; //Oriental Bank of Commerce
	var psb 		= "psb(india.com|online.co.in)"; //Punjab & Sind Bank
	var pnb 		= "(pnbindia.in|netpnb.com)"; //Punjab National Bank
	var societegenerale = "soc(ietegenerale.(com|asia)|gensolutions.com)"; //Societe Generale
	var sonali 		= "sonalibank.com"; //Sonali Bank
	var sc 			= "s(c|tandardchartered(trade)?).co(m|.in)"; //Standard Chartered Bank
	var sbm 		= "sb(mgroup.mu|imauritius.com)"; //State Bank of Mauritius Ltd.
	var sbici 		= "sbici.com"; //SBI Commercial and International Bank Ltd.
	var sbi 		= "sbi.co.in"; //State Bank of India
	var sbi_bj 		= "sbbjbank.com"; //State Bank of Bikaner and Jaipur
	var sbi_hyd 	= "(sbhyd|onlinesbi(global)?).com"; //State Bank of Hyderabad
	var sbi_mysore	= "bank.sbi"; //State Bank of Mysore
	var sbi_patiala = "sbp.co.in"; //State Bank of Patiala
	var sbi_travan 	= "statebankoftravancore.com"; //State Bank of Travancore
	var syndicate 	= "(synd(icatebank|online).in|ventureinfotek.com)"; //Syndicate Bank
	var scotia 		= "scotiabank.com"; //The Bank of Nova Scotia
	var tokyo_mitsubishi = "bk.mufg.jp"; //The Bank of Tokyo-Mitsubishi, Ltd.
	var dbs 		= "dbs(.com|bank.in)"; //The Development Bank of Singapore Ltd.
	var hsbc 		= "hsbc.co(.in|m)"; //The Hongkong & Shanghai Banking Corporation Ltd.
	var tmb 		= "tmb(net)?.in"; //Tamilnad Mercantile Bank Ltd.
	var dhan 		= "dhanbank.(com|in)"; //The Dhanalakshmi Bank Limited.
	var federal 	= "fed(eralbank.co.in|netbank.com)"; //The Federal Bank Ltd.
	var hdfc 		= "hdfcbank.com"; //The HDFC Bank Ltd.
	var jkbank 		= "jkbank(online)?.com"; //The Jammu & Kashmir Bank Ltd.
	var nainital 	= "nainitalbank.co.in"; //The Nainital Bank Ltd.
	var sangliurban = "sangliurbanbank.in"; //The Sangli Bank Ltd.
	var southindian = "southindianbank.com"; //The South Indian Bank Ltd.
	var rbl 		= "rblbank.com"; //The Ratnakar Bank Ltd.
	var rbs 		= "rbs(.in|(digital|international)?.com|.co.uk)"; //The Royal Bank of Scotland N.V.
	var lv 			= "lvbank(.com|online.in)"; //The akshmi Vilas Bank Ltd
	var uco 		= "uco((bank|ebanking).com|online(.co)?.in)"; //UCO Bank
	var union 		= "unionbank(ofindia|online).co.in";// Union Bank of India
	var united 		= "unitedbankofindia.com"; //United Bank Of India
	var vijaya 		= "vijayabank(.com|(online)?.in)"; //Vijaya Bank
	var yesbank 	= "yesbank(.co)?.in"; //Yes Bank
	var nabard 		= "nabard.org"; //National Bank for Agriculture and Rural Development(NABARD)
	var exim 		= "exim(bankindia|mitra).in"; //Export-Import Bank of India
	var nhb 		= "nhb(online)?.org.in"; //National Housing Bank
	var sidbi 		= "sidbi(startupmitra)?.in"; //Small Industries Development Bank of India
	var iibi 		= "iibiltd.com"; //Industrial Investment Bank of India Ltd. : has been shutdown in 2012
	var nedfi 		= "nedfi.com"; //North Eastern Development Finance Corporation
	//ING Vysya Bank: Merged with Kotak Mahindra Bank Ltd.
	//The Bank of Rajasthan Limited : Merged with ICICI
	//Lord Krishna Bank Ltd.: We don't trust this bank's site at all

	var travel_hotel= "((9flats|exp(edia(inc)?|atarrivals)|amtrak|accesrail|airbnb|(asia|bargain|roomer|one|mbe|trazee|whole|smarter|broadway|wesaidgo)travel|(word|myfamily)travels|atlasobscura|bedforest|bravofly|budgetplaces|bumblehood|bus(bud|junction)|canadastays|cheap((o)?air|tickets(canada|city-discovery))|citypass|cofman|collegeweekends|(concert|think)hotels|cruise(critic|planners|shipcenters)|dealbase|discover(tnt|greece|ingireland)|dayuse|dohop|dwellable|fare(compare|portal|buzz|makers)|flight(aware|fox)|fly(aow|ertalk)|get(yourguide|there|aroom)|gadventures|glo(balhotelreview|betrooper|veler)|go(lfscape|seek|euro|transit)|(go)?(ibibo|trump)|groupleader|headforpoints|hip(munk|traveler)|holidaywatchdog|(in\.hotels)|hotel(s(-scanner)?|sbyday|tonight|scombined|urbano)|hotwire|inyourpocket|inspirock|justorbit|(travel\.jumia)|jacksonharries|(lastminute|priceline)(group)?|(late|oyo)rooms|loco2|lonelyplanet|seat61|mapquest|maritimematters|geemedia|(momon|opo)do|misterbandb|morehotels4less|(msn\.com\/en-in\/travel)|mus(afir|ement)|my(cityvenueescapes|driver|localpitch)|(ne(t|p)|scottscheap)flights|masflight|notesfromtheroad|otalo|pitchup|prontohotel|roadtrippers|roughguides|routofy|seatguru|secretescapes|sfstation|skift|sleepout|stay(uncle|ful)|spot(tedbylocals|ahome)|studentuniverse|the(suitest|trainline)|summerplaybook|tangareef|plumguide|ticketclever|tour(million|radar|sbylocals)|trav((buddy|ix)|el(port|worm|guru|lerspoint|lady|genio|muse|pod|yaari|zoo))|janbala|trekiz|tri(pping|ppy|vago|poso|pcombi)|ve(eve|gas|nere)|via|visitscotland|virtualtourist|wayn|wander(u|ingearl)|wikicity|whereivebeen|webjetlimited|world(hum|nomads)|wimdu|yamsafer|wotif|orbitz|rome2rio|(ixi|lili|hutch)go|jet(cost|radar)|kiwi|mobissimo|fromatob|edreams(odigeo)?|(voyager|billet)moinscher|scoutgps|lagisatu|walkit|roomstonite|ytbpulse|opentable|booking(buddy)?|rentalcars|swisscom|yatra|(clear|easemy|makemy|c|house)trip|agoda|goomo|travel(mob|guru|companionexchange)|(hostel|1degree)world|wego|abhibus|wizzair|diviac|liveaboard|padi|skyauction|schmap)\.com|(tri(padvisor|vago)|sotc|thomascook|hotelscombined|redbus)\.in|(airbnb|expedia|homeaway|hotelscompare|kayak|raileurope|wego)\.co\.in|(cheapflights|cruise(1st|compare)|dealchecker|directferries|goeuro|jactravel|knowhere|momondo|travelizer)\.co\.uk|(elong|findacrew|skyscanner)\.net|(entur|hitchwiki|travelblog|visit|wheelmap|wiki(voyage|travel))\.org|(sportsandtravel)\.com\.hk|(travelstart)\.co\.za|(hotel|transport(direct|nsw))\.info|(chinaknowledge|go(euro|pili)|hotel|)\.de|(momondo|cruise1st)\.com\.au|gopili\.(it|ru|es|co\.uk)|hotels\.n(l|g)|(goeuro)\.es|(jasons)\.co\.nz|(triip)\.me|(viva)\.gr|(oui)\.sncf|(momondo)\.ca|(en-tur)\.no|(yahoo\.com\/lifestyle\/tagged\/travel)|(google|paytm)\.com\/flights)"; //Travel & Hotel-Booking Sites

	var URLs = [adcb, american_exp, arab_bangladesh, allahabad, andhra, axis, antwerpdiamond, maybank, boa, bbk, barclays, bnpparibas, ceylon, bob, boi, bom, canara, central, calyon, citi, shinhan, ctbc, cityunion, coastalarea, corp, csb, deutsche, dcb, dena, indusind, icici, indian, iob, idbi, jpmorgan, kt, kotak, karnataka, kvb, mashreq, mizuho, oman, obc, psb, pnb, societegenerale, sonali, sc, sbm, sbici, sbi, sbi_bj, sbi_hyd, sbi_mysore, sbi_patiala, sbi_travan, syndicate, scotia, tokyo_mitsubishi, dbs, hsbc, tmb, dhan, federal, hdfc, jkbank, nainital, sangliurban, southindian, rbl, rbs, lv, uco, union, united, vijaya, yesbank, nabard, exim, nhb, sidbi, iibi, nedfi, travel_hotel];

	for (var i = 0; i < URLs.length; i += 1) {
		var url = `^http(s)?:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)${URLs[i]}\([-a-zA-Z0-9@:%_\+.~#?&//=]*)`;
		var re  = new RegExp(url);
		if (re.test(tab.url)) {
			console.log(URLs[i]);
			return true;
		}
	}
}

function privateWindow(tab) {
	if (!tab.incognito) {
		if(matchURL(tab)){
				if (flag) {
					goSecure(tab.url, tab);
				}
		}
	}
}

function utmRemover(requestDetails) {
	var originalURL= requestDetails.url;
     var queryString = originalURL.indexOf('?');
		 var utmString = originalURL.indexOf('utm_');
     if (utmString > queryString) {
			//var utm_check = new RegExp('([\?\&]utm_(source|medium|term|campaign|content|cid|reader|name|viz_id|pubreferrer)=[^&#]+)', 'ig');
			//	var modifiedURL = originalURL.replace(utm_check, ''); //removing utm
      // if (modifiedURL.charAt(queryString) === '&')
      //       modifiedURL = modifiedURL.substr(0, queryString) + '?' + modifiedURL.substr(queryString + 1)

			var modifiedURL = originalURL.replace(/(\&|\?)utm_([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g , ''); //removing utm
         if (modifiedURL != originalURL){
             return { redirectUrl: modifiedURL };
				 }
     }

}

function callCheck(tab) {
	if (!tab.incognito) {
		flag = true;
		showPageAction(tab);
		}
	else {
		showPageAction(tab);
        }
}

function showPageAction(tab) {
	if (!tab.incognito) {
		if(matchURL(tab)){
			if (flag) {
				browser.pageAction.show(tab.id);
			}
		}
	}
	else {
		browser.pageAction.show(tab.id);
		browser.pageAction.setIcon({tabId: tab.id, path: "icons/safe-48.png"});
        browser.pageAction.setTitle({tabId: tab.id, title: "Woahh! You are safe!"});
	}
}

browser.tabs.onActivated.addListener(function(id, info, tab) {
    browser.tabs.query({ currentWindow: true, active: true },
        function (tabArray) {
            if(tabArray[0]){
			   showPageAction(tabArray[0]);

		   }
        });

});

browser.tabs.onUpdated.addListener(function(id, info, tab) {
	showPageAction(tab);
});

//event handler when a new tab is created
browser.tabs.onCreated.addListener(callCheck);

//event handler when you click the button in the address bar
browser.pageAction.onClicked.addListener(privateWindow);

browser.webRequest.onBeforeRequest.addListener(
  utmRemover,
	{urls: ["<all_urls>"], types: ['main_frame']},
	 ['blocking']
 );
