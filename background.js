var flag = true;
    
//method to open the tab in private window
function goSecure(url, tab) {
	browser.windows.create({"url": url, "incognito": true});
    browser.tabs.remove(tab.id);
	browser.tabs.create({"url": "about:blank"});
    flag = false;
}
 		
var matchURL = function(tab) {
	var adcb = /^http(s)?:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)adcb(india|netlink|careers)?\.com([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //Abu Dhabi Commercial Bank Ltd.
    var american_exp = /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)americanexpress\.com([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //American Express Bank Ltd.
	var arab_bangladesh = /^http(s)?:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)abbl\.com([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //Arab Bangladesh Bank Limited
	var allahabad = /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)all(ahabadbank|bankonline|bankcare)\.in([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //Allahabad Bank
	var andhra= /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)(andhrabank|onlineandhrabank\.net)\.in([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //Andhra Bank
	var axis = /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)axisbank\.(com|co\.in)([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //Axis Bank
   	var antwerpdiamond = /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)antwerpdiamondbank\.com([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //Antwerp Diamond Bank N.V.
	var maybank = /^http(s)?:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)maybank(\.co\.id|\.com|2u\.com\.my)([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //Bank Internasional Indonesia
	var boa = /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)bankofamerica\.com([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //Bank of America N.A.
	var bbk = /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)bbk(online|india)\.com([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //Bank of Bahrain & Kuwait BSC
	var barclays = /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)(home\.)?barclays(\.in|\.com|\.co\.uk)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //Barclays Bank Plc
	var bnpparibas = /^http(s)?:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)bnpparibas\.co(m|\.in)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //BNP PARIBAS
	var ceylon = /^http(s)?:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)(combank\.net|commercialbk\.com|boc(\.web)?\.lk)([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //Bank of Ceylon
	var bob = /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)(bankofbaroda|bobibanking|barodarewardz)\.co(m|\.in)([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //Bank of Baroda
	var boi = /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)bankofindia\.(com|co\.in)([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //Bank of India
    var bom = /^http(s)?:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)(bankofmaharashtra|mahaconnect)\.in([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //Bank of Maharashtra
	var canara = /^http(s)?:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)canarabank\.(com|(org\.)?in)([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //Canara Bank
	var central = /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)(centralbankofindia\.co|(cbi|centralbank)\.net)\.in([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //Central Bank of India
	var calyon = /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)ca-(indosuez|cib)\.com([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //Calyon Bank
	var citi = /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)citi(bank\.co\.in|(group)?\.com|\.eu)([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //Citibank N.A.
	var shinhan = /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)bank\.shinhan\.com([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //Cho Hung Bank
	var ctbc = /^http(s)?:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)(ctbcbank(usa)?\.co(m|\.id)|chinatrust(india)?\.com)([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //Chinatrust Commercial Bank Ltd.
	var cityunion = /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)(cityunionbank\.com|onlinecub\.net)([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //City Union Bank Ltd.
	var coastalarea = /^http(s)?:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)coastalareabank\.com([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //Coastal Local Area Bank Ltd.
	var corp = /^http(s)?:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)corp(bank(\.biz|(net)?\.com)|retail\.com)([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //Corporation Bank
	var csb = /^http(s)?:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)csb(net)?\.co\.in([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //Catholic Syrian Bank Ltd.
	var deutsche = /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)(db\.com|deutsche(bank\.co\.in|-bank.de))([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //Deutsche Bank AG
	var dcb = /^http(s)?:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)dcbbank\.com([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //DCB Bank Limited.
	var dena = /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)denabank\.co(m|\.in)([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //Dena Bank
	var indusind = /^http(s)?:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)indusind\.com([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //IndusInd Bank Limited
	var icici = /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)icicibank\.com([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //ICICI Bank
	var indian = /^http(s)?:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)indian(-bank\.com|bank(\.net)?\.in)([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //Indian Bank
	var iob= /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)iob(net\.co)?\.in([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //Indian Overseas Bank
	var idbi = /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)idbi(\.com|bank\.co\.in)([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //IDBI Bank Ltd.
	var jpmorgan = /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)(jpmorgan)?(\.)?(jpmorgan|chase)\.com([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //J P Morgan Chase Bank, NA
	var kt = /^http(s)?:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)ktb(\.co\.th|netbank\.com)([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //Krung Thai Bank Public Company Ltd.
	var kotak = /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)kotak\.com([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //Kotak Mahindra Bank Ltd.
	var karnataka = /^http(s)?:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)karnatakabank\.(com|co\.in|info)([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //Karnataka Bank
	var kvb = /^http(s)?:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)kvb(\.co\.in|in\.com)([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //Karur Vysya Bank Ltd.
	var mashreq = /^http(s)?:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)mashreq(bank|neo)?\.(com|taleo\.net)([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //Mashreqbank psc
	var mizuho = /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)mizuhobank\.co(m|\.jp)([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //Mizuho Corporate Bank Ltd.
	var oman = /^http(s)?:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)oiboman\.com([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //Oman International Bank S A O G
	var obc = /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)obc(india|online)\.co\.in([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //Oriental Bank of Commerce
	var psb = /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)psb(india\.com|online\.co\.in)([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //Punjab & Sind Bank
	var pnb = /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)(pnbindia\.in|netpnb\.com)([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //Punjab National Bank
	var societegenerale = /^http(s)?:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)soc(ietegenerale\.(com|asia)|gensolutions\.com)([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //Societe Generale
	var sonali = /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)sonalibank\.com([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //Sonali Bank
	var sc = /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)s(c|tandardchartered(trade)?\.co(\.in|m))([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //Standard Chartered Bank 
	var sbm = /^http(s)?:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)sb(mgroup\.mu|imauritius\.com)([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //State Bank of Mauritius Ltd.
	var sbici = /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)sbici\.com([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //SBI Commercial and International Bank Ltd.
	var sbi = /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)sbi\.co\.in([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //State Bank of India
	var sbi_bj = /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)sbbjbank\.com([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //State Bank of Bikaner and Jaipur
	var sbi_hyd = /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)(sbhyd|onlinesbi(global)?)\.com([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //State Bank of Hyderabad 
	var sbi_mysore = /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)bank\.sbi([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //State Bank of Mysore
	var sbi_patiala = /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)sbp\.co\.in([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //State Bank of Patiala
	var sbi_travan = /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)statebankoftravancore\.com([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //State Bank of Travancore
	var syndicate = /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)(synd(icatebank|online)\.in|ventureinfotek\.com)([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //Syndicate Bank
	var scotia = /^http(s)?:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)scotiabank\.com([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //The Bank of Nova Scotia
	var tokyo_mitsubishi = /^http(s)?:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)bk\.mufg\.jp([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //The Bank of Tokyo-Mitsubishi, Ltd.
	var dbs = /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)dbs(\.com|bank\.in)([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //The Development Bank of Singapore Ltd.
	var hsbc = /^http(s)?:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)hsbc\.co(\.in|m)([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //The Hongkong & Shanghai Banking Corporation Ltd.
	var tmb = /^http(s)?:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)tmb(net)?\.in([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //Tamilnad Mercantile Bank Ltd.
	var dhan = /^http(s)?:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)dhanbank\.(com|in)([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //The Dhanalakshmi Bank Limited.
	var federal = /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)fed(eralbank\.co\.in|netbank\.com)([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //The Federal Bank Ltd.
	var hdfc = /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)hdfcbank\.com([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //The HDFC Bank Ltd.
	var jkbank = /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)jkbank(online)?\.com([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //The Jammu & Kashmir Bank Ltd.
	var nainital = /^http(s)?:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)nainitalbank\.co\.in([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //The Nainital Bank Ltd.
	var sangliurban = /^http(s)?:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)sangliurbanbank\.in([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //The Sangli Bank Ltd.
	var southindian = /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)southindianbank\.com([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //The South Indian Bank Ltd.
	var rbl = /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)rblbank\.com([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //The Ratnakar Bank Ltd.
	var rbs = /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)rbs(\.in|(digital|international)?\.com|\.co\.uk)([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //The Royal Bank of Scotland N.V.
	var lv = /^http(s)?:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)lvbank(\.com|online\.in)([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //The Lakshmi Vilas Bank Ltd
	var uco = /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)uco((bank|ebanking)\.com|online(\.co)?\.in)([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //UCO Bank
	var union = /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)unionbank(ofindia|online)\.co\.in([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;// Union Bank of India
	var united = /^http(s)?:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)unitedbankofindia\.com([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //United Bank Of India
	var vijaya = /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)vijayabank(\.com|(online)?\.in)([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //Vijaya Bank
	var yesbank = /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)yesbank(\.co)?\.in([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //Yes Bank
	var nabard = /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)nabard\.org([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //National Bank for Agriculture and Rural Development(NABARD)
	var exim = /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)exim(bankindia|mitra)\.in([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //Export-Import Bank of India
	var nhb = /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)nhb(online)?\.org\.in([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //National Housing Bank
	var sidbi = /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)sidbi(startupmitra)?\.in([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //Small Industries Development Bank of India
	var iibi = /^https:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)iibiltd\.com([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //Industrial Investment Bank of India Ltd. : has been shutdown in 2012
	var nedfi = /^http(s)?:\/\/(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)nedfi\.com([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //North Eastern Development Finance Corporation
	//ING Vysya Bank: Merged with Kotak Mahindra Bank Ltd.
	//The Bank of Rajasthan Limited : Merged with ICICI
	//Lord Krishna Bank Ltd.: We don't trust this bank's site at all

	var URLs = [adcb, american_exp, arab_bangladesh, allahabad, andhra, axis, antwerpdiamond, maybank, boa, bbk, barclays, bnpparibas, ceylon, bob, boi, bom, canara, central, calyon, citi, shinhan, ctbc, cityunion, coastalarea, corp, csb, deutsche, dcb, dena, indusind, icici, indian, iob, idbi, jpmorgan, kt, kotak, karnataka, kvb, mashreq, mizuho, oman, obc, psb, pnb, societegenerale, sonali, sc, sbm, sbici, sbi, sbi_bj, sbi_hyd, sbi_mysore, sbi_patiala, sbi_travan, syndicate, scotia, tokyo_mitsubishi, dbs, hsbc, tmb, dhan, federal, hdfc, jkbank, nainital, sangliurban, southindian, rbl, rbs, lv, uco, union, united, vijaya, yesbank, nabard, exim, nhb, sidbi, iibi, nedfi];
    			
	for (var i = 0; i < URLs.length; i += 1) {  
		if (URLs[i].test(tab.url)) {
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

function callCheck(tab) {	
	if (!tab.incognito) {
		flag = true;
		showPageAction(tab);
		}
	else {
		showPageAction(tab);
		browser.pageAction.setIcon({tabId: tab.id, path: "icons/unsafe-64.png"});
        browser.pageAction.setTitle({tabId: tab.id, title: "Woahh! You are safe!"});
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

//event handler when you click the button in the toolbar
browser.pageAction.onClicked.addListener(privateWindow);