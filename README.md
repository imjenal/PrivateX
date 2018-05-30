# PrivateX
This is a Chrome and Firefox browser extension which provide safe access by reminding the user to open Banking sites using Private Browsing mode. 
Also, this extension by default chops off the Google Analytics tracking (i.e. [Urchin Tracking Monitor][utm]) tokens from the URL's query string *before* the web Request is made. So, this extension provides more private browsing experience with cleaner and shorter URL.

PrivateX strips utm_* tokens (for instance, "utm_source=rss&utm_medium=rss&utm_campaign=rss") from URLs to prevent the user from being tracked.

Install from the [Chrome Web Store][chrome] or [Firefox Add-ons][firefox].

Example of URL with UTM tokens:
http://bigpicture.ru/?p=431513&utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+bigpictures+%28%D0%9D%D0%9E%D0%92%D0%9E%D0%A1%D0%A2%D0%98+%D0%92+%D0%A4%D0%9E%D0%A2%D0%9E%D0%93%D0%A0%D0%90%D0%A4%D0%98%D0%AF%D0%A5%29

URL after installing *PrivateX* : http://bigpicture.ru/?p=431513

[utm]: https://en.wikipedia.org/wiki/UTM_parameters
[chrome]: https://chrome.google.com/webstore/detail/privatex/oojbhhcihnpdccgkhckpkgabghcjfmkm
[firefox]: https://addons.mozilla.org/en-US/firefox/addon/privatx/

