var flag = true;
    
//method to open the tab in private window
function goSecure(url, tab) {
	browser.windows.create({"url": url, "incognito": true});
    browser.tabs.remove(tab.id);
	browser.tabs.create({"url": "about:blank"});
    flag = false;
}
    
var matchURL = function(tab) {
	var adcb = 'https://www.adcbnetlink.com/TCSRetail/appload.action';
    var adcb_pers = 'https://online.adcb.com/ADCBIB/kdw#_frmLogin';
    var adcb_corp= 'https://corporate.adcb.com/corporateWeb/';
    var american_express1 = 'https://www.americanexpress.com/in/';
    var american_express2 = 'https://global.americanexpress.com/myca/logon/japa/action?request_type=LogonHandler&Face=en_IN&Details=true&inav=iNavLnkLog';
    var american_express3 = 'https://global.americanexpress.com/myca/logon/emea/action?request_type=LogonHandler&Face=en_GB';
    var american_express4 = 'https://global.americanexpress.com/myca/logon/japa/action?request_type=LogonHandler&Face=en_HK';
	var arab_bangladesh = 'https://abdirect.abbl.com/login.html#!';
	var allahabad_pers = 'https://www.allbankonline.in/jsp/startnew.jsp';
	var allahabad_corp = 'https://www.allbankonline.in/jsp/startnewCorp.jsp';
	var andhrabank= 'https://www.onlineandhrabank.net.in/BankAwayRetail/AuthenticationController?__START_TRAN_FLAG__=Y&FORMSGROUP_ID__=AuthenticationFG&__EVENT_ID__=LOAD&FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=011';
    var axis_retail = 'https://retail.axisbank.co.in/wps/portal/rBanking/axisebanking/AxisRetailLogin/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOKNAzxMjIwNjLwsQp0MDBw9PUOd3HwdDQwMjIEKIoEKDHAARwNC-sP1o_ArMYIqwGNFQW6EQaajoiIAVNL82A!!/dl5/d5/L2dBISEvZ0FBIS9nQSEh/'; 
    var axis_corp = 'https://www.iconnect.co.in/BankAwayRetail/(S(s4maio2izpfdkw55slvykk55))/web/L001/corporate/jsp/user/CorporateSignOn.aspx?RequestId=34828097/';
    var citibank = 'https://www.online.citibank.co.in/';    
    var URLs = [adcb, adcb_pers, adcb_corp, american_express1, arab_bangladesh, allahabad_pers, allahabad_corp, andhrabank, axis_retail, axis_corp,citibank];
    for(var item in URLs) {
		if (tab.url == URLs[item]) {
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
		//browser.pageAction.enable(tab.id);
		}
	else {
		showPageAction(tab);
		browser.pageAction.setIcon({tabId: tab.id, path: "icons/safe-48.png"});
        browser.pageAction.setTitle({tabId: tab.id, title: "Woahh! You are safe!"});
        //browser.pageAction.disable(tab.id);
		}
}

 
//since pageAction is hidden by default
function showPageAction(tab){
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
        //browser.pageAction.disable(tab.id);				
	}		
}

browser.tabs.onActivated.addListener(function(id, info, tab){
    browser.tabs.query({ currentWindow: true, active: true },
        function (tabArray) {
            if(tabArray[0]){               
			   showPageAction(tabArray[0]);
            }
        });
});

browser.tabs.onUpdated.addListener(function(id, info, tab){
	showPageAction(tab);
});

//event handler when a new tab is created
browser.tabs.onCreated.addListener(callCheck);

  
//event handler when you click the button in the toolbar
browser.pageAction.onClicked.addListener(privateWindow);
	
	