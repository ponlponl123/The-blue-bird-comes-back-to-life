function checkXIcon() {
  if (document.querySelector('header[role="banner"] h1[role="heading"]>a[aria-label="X"]>div[dir="ltr"]')) return true;
  return false;
}

function checkXPremiumIcon() {
  if (document.querySelector('a[href="/i/verified-choose"][aria-label="Premium"]>div.css-1dbjc4n')) return true;
  return false;
}

function checkBannerPostBTN() {
  if (!document.querySelector('header[role="banner"] a[href="/compose/tweet"]')) return false;
  const BannerPostBTN = document.querySelector('header[role="banner"] a[href="/compose/tweet"]');
  BannerPostBTN.querySelector('div>span>div>div>span>span').innerHTML = 'Tweet';
}

function changeProfileTabPostBTN(user) {
  if (!document.querySelector(`main[role="main"] div[role="tablist"]>div[role="presentation"]>a[href="${user}"][role="tab"]`)) return false;
  const ProfileTabPostBTN = document.querySelector(`main[role="main"] div[role="tablist"]>div[role="presentation"]>a[href="${user}"][role="tab"]`);
  ProfileTabPostBTN.querySelector('div.css-1dbjc4n>div[dir="ltr"]>span[class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0"]').innerHTML = 'Tweets';
}

function changePostModalBTN(onload) {
  if (!document.querySelector(`div#layers div[aria-labelledby="modal-header"] div[class="css-1dbjc4n r-1awozwy r-14lw9ot r-18u37iz r-1w6e6rj r-1wtj0ep r-id7aif r-184en5c"][data-testid="toolBar"] div[role="button"][data-testid="tweetButton"]>div[dir="ltr"]>span>span`))
  {
    if(onload === true) {
      if( composetweet_loader === true ) {
        if( composetweetbtnspan_changed === false ){
          setTimeout(() => {
            changePostModalBTN(true)
          }, 100);
        }
      }
    }
    return false;
  };
  const PostModalBTN = document.querySelector(`div#layers div[aria-labelledby="modal-header"] div[class="css-1dbjc4n r-1awozwy r-14lw9ot r-18u37iz r-1w6e6rj r-1wtj0ep r-id7aif r-184en5c"][data-testid="toolBar"] div[role="button"][data-testid="tweetButton"]>div[dir="ltr"]>span>span`);
  PostModalBTN.innerHTML = 'Tweets';
  composetweetbtnspan_changed = true;
}

function changeHomeLegacyPostBTN() {
  if (!document.querySelector(`main[role="main"] div[class="css-1dbjc4n r-14lw9ot r-1h8ys4a"] div[class="css-1dbjc4n r-14lw9ot r-jumn1c r-xd6kpl r-gtdqiz r-ipm5af r-184en5c"] div[role="button"][data-testid="tweetButtonInline"]`)) return false;
  const HomeLegacyPostBTN = document.querySelector(`main[role="main"] div[class="css-1dbjc4n r-14lw9ot r-1h8ys4a"] div[class="css-1dbjc4n r-14lw9ot r-jumn1c r-xd6kpl r-gtdqiz r-ipm5af r-184en5c"] div[role="button"][data-testid="tweetButtonInline"]`);
  HomeLegacyPostBTN.querySelector('div[dir="ltr"]>span[class="css-901oao css-16my406 css-1hf3ou5 r-poiln3 r-a023e6 r-rjixqe r-bcqeeo r-qvutc0"]>span[class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0"]').innerHTML = 'Tweets';
  HomeLegacyPostBTNchanged = true;
}

function checkBannerHomeBTN() {
  if (!document.querySelector('header[role="banner"] nav[aria-label="Primary"][role="navigation"]>a[href="/home"]>div[class="css-1dbjc4n r-1awozwy r-sdzlij r-18u37iz r-1777fci r-dnmrzs r-xyw6el r-o7ynqc r-6416eg"]>div.css-1dbjc4n>svg')) return false;
  const homesvg = document.querySelector('header[role="banner"] nav[aria-label="Primary"][role="navigation"]>a[href="/home"]>div[class="css-1dbjc4n r-1awozwy r-sdzlij r-18u37iz r-1777fci r-dnmrzs r-xyw6el r-o7ynqc r-6416eg"]>div.css-1dbjc4n>svg');
  homesvg.setAttribute('preserveAspectRatio', "xMidYMid meet");
  homesvg.setAttribute('viewBox', "0 0 128.000000 128.000000");
  homesvg.setAttribute('width', "32");
  homesvg.setAttribute('height', "32");
  homesvg.setAttribute('class', "");
  homesvg.setAttribute('xmlns', "http://www.w3.org/2000/svg");
  homesvg.setAttribute('version', "1.0");
  homesvg.style = `margin-left: -2px;`;
  homesvg.innerHTML = `<g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M489 1037 c-63 -34 -133 -73 -155 -86 -21 -13 -74 -43 -117 -65 -54 -28 -80 -48 -84 -64 -8 -32 11 -49 47 -44 27 4 32 0 45 -30 7 -19 21 -104 30 -189 21 -207 32 -274 53 -317 29 -62 49 -67 307 -70 275 -4 295 0 342 70 34 51 34 52 58 308 9 91 21 182 26 202 9 34 11 36 38 28 60 -17 84 49 29 76 -73 37 -296 158 -319 175 -44 31 -132 69 -159 68 -14 0 -77 -28 -141 -62z m217 -276 c34 -18 44 -30 75 -88 21 -39 2 -110 -39 -150 -41 -41 -69 -53 -119 -53 -48 0 -98 33 -128 84 -30 52 -31 77 -4 133 41 85 134 117 215 74z"></path></g>`;
}

var XIcon = false;
var XPremiumIcon = false;
var BannerPostBTN = false;
var HomeLegacyPostBTNchanged = false;
var composetweet_loader = false;
var composetweetbtnspan_changed = false;
if(document.querySelector('body div#react-root div#placeholder')) document.querySelector('body div#react-root div#placeholder').innerHTML = `<svg class="r-1p0dtai r-18jsvk2 r-4qtqp9 r-yyyyoo r-wy61xf r-1d2f490 r-ywje51 r-dnmrzs r-u8s1d r-zchlnj r-1plcrui r-ipm5af r-lrvibr r-1blnp2b" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="72" height="72" viewBox="0 0 72 72" enable-background="new 0 0 72 72" xml:space="preserve"><g id="bounds"><rect opacity="0" width="72" height="72"/></g><g id="icon"><path d="M67.812,16.141c-2.348,1.039-4.869,1.743-7.519,2.06c2.703-1.62,4.778-4.187,5.756-7.244c-2.529,1.5-5.33,2.592-8.313,3.176C55.349,11.591,51.948,10,48.182,10c-7.229,0-13.092,5.861-13.092,13.093c0,1.026,0.118,2.021,0.338,2.981C24.543,25.526,14.9,20.317,8.441,12.395c-1.126,1.936-1.771,4.184-1.771,6.581c0,4.542,2.312,8.551,5.824,10.898c-2.146-0.069-4.165-0.657-5.93-1.638c-0.002,0.055-0.002,0.11-0.002,0.162c0,6.345,4.513,11.638,10.504,12.84c-1.101,0.298-2.256,0.457-3.449,0.457c-0.846,0-1.667-0.078-2.465-0.231c1.667,5.2,6.499,8.986,12.23,9.09C18.9,54.066,13.253,56.16,7.122,56.16c-1.055,0-2.096-0.061-3.122-0.184c5.794,3.717,12.676,5.882,20.067,5.882c24.083,0,37.251-19.949,37.251-37.249c0-0.566-0.014-1.134-0.039-1.694C63.838,21.068,66.058,18.765,67.812,16.141z"/></g></svg>`;
if(document.querySelector("head>title")) document.querySelector("head>title").innerHTML = "Twitter";

function main() {
    const favicon = document.querySelector(`link[rel="mask-icon"]`);
    const favicon2 = document.querySelector(`link[rel="shortcut icon"]`);
    favicon.setAttribute("href", "https://abs.twimg.com/favicon.ico");
    favicon2.setAttribute("href", "https://abs.twimg.com/favicon.ico");
    if(document.querySelector('body div#react-root div#placeholder')) document.querySelector('body div#react-root div#placeholder').innerHTML = `<svg class="r-1p0dtai r-18jsvk2 r-4qtqp9 r-yyyyoo r-wy61xf r-1d2f490 r-ywje51 r-dnmrzs r-u8s1d r-zchlnj r-1plcrui r-ipm5af r-lrvibr r-1blnp2b" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="72" height="72" viewBox="0 0 72 72" enable-background="new 0 0 72 72" xml:space="preserve"><g id="bounds"><rect opacity="0" width="72" height="72"/></g><g id="icon"><path d="M67.812,16.141c-2.348,1.039-4.869,1.743-7.519,2.06c2.703-1.62,4.778-4.187,5.756-7.244c-2.529,1.5-5.33,2.592-8.313,3.176C55.349,11.591,51.948,10,48.182,10c-7.229,0-13.092,5.861-13.092,13.093c0,1.026,0.118,2.021,0.338,2.981C24.543,25.526,14.9,20.317,8.441,12.395c-1.126,1.936-1.771,4.184-1.771,6.581c0,4.542,2.312,8.551,5.824,10.898c-2.146-0.069-4.165-0.657-5.93-1.638c-0.002,0.055-0.002,0.11-0.002,0.162c0,6.345,4.513,11.638,10.504,12.84c-1.101,0.298-2.256,0.457-3.449,0.457c-0.846,0-1.667-0.078-2.465-0.231c1.667,5.2,6.499,8.986,12.23,9.09C18.9,54.066,13.253,56.16,7.122,56.16c-1.055,0-2.096-0.061-3.122-0.184c5.794,3.717,12.676,5.882,20.067,5.882c24.083,0,37.251-19.949,37.251-37.249c0-0.566-0.014-1.134-0.039-1.694C63.838,21.068,66.058,18.765,67.812,16.141z"/></g></svg>`;
    
    if (checkXIcon()) {
      XIcon = true;
      document.querySelector('header[role="banner"] h1[role="heading"]>a[aria-label="X"]>div[dir="ltr"]').innerHTML = `<svg role="abluebird" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="144px" height="144px"><path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"/></svg>`;
    }

    if (checkXPremiumIcon()) {
      XPremiumIcon = true;
      document.querySelector('a[href="/i/verified-choose"][aria-label="Premium"]>div.css-1dbjc4n>div.css-1dbjc4n').innerHTML = `<svg class="r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="72" height="72" viewBox="0 0 72 72" enable-background="new 0 0 72 72" xml:space="preserve"><g id="bounds"><rect opacity="0" width="72" height="72"/></g><g id="icon"><path d="M67.812,16.141c-2.348,1.039-4.869,1.743-7.519,2.06c2.703-1.62,4.778-4.187,5.756-7.244c-2.529,1.5-5.33,2.592-8.313,3.176C55.349,11.591,51.948,10,48.182,10c-7.229,0-13.092,5.861-13.092,13.093c0,1.026,0.118,2.021,0.338,2.981C24.543,25.526,14.9,20.317,8.441,12.395c-1.126,1.936-1.771,4.184-1.771,6.581c0,4.542,2.312,8.551,5.824,10.898c-2.146-0.069-4.165-0.657-5.93-1.638c-0.002,0.055-0.002,0.11-0.002,0.162c0,6.345,4.513,11.638,10.504,12.84c-1.101,0.298-2.256,0.457-3.449,0.457c-0.846,0-1.667-0.078-2.465-0.231c1.667,5.2,6.499,8.986,12.23,9.09C18.9,54.066,13.253,56.16,7.122,56.16c-1.055,0-2.096-0.061-3.122-0.184c5.794,3.717,12.676,5.882,20.067,5.882c24.083,0,37.251-19.949,37.251-37.249c0-0.566-0.014-1.134-0.039-1.694C63.838,21.068,66.058,18.765,67.812,16.141z"/></g></svg>`;
      document.querySelector('a[href="/i/verified-choose"][aria-label="Premium"]>div.css-1dbjc4n>div[dir="ltr"].css-901oao>span').innerHTML = 'Blue tick';
    }

    if(XIcon==false || XPremiumIcon==false) {
        setTimeout(() => {
            main();
            checkBannerHomeBTN();
            changeHomeLegacyPostBTN();
            checkBannerPostBTN();
        }, 1 * 10);
    }
}

setInterval(() => {
  if(document.querySelector(`link[rel="mask-icon"]`)) document.querySelector(`link[rel="mask-icon"]`).setAttribute("href", "https://abs.twimg.com/favicon.ico");
  if(document.querySelector(`link[rel="shortcut icon"]`)) document.querySelector(`link[rel="shortcut icon"]`).setAttribute("href", "https://abs.twimg.com/favicon.ico");
}, 250);

const observer = new MutationObserver(function(mutationsList, observer) {
  for (let mutation of mutationsList) {
    if (mutation.type === "childList" && mutation.target === document.querySelector("head>title")) {
      const newTitle = document.querySelector("head>title").textContent;
      document.querySelector("head>title").innerHTML = newTitle.replace(/\/ X$/, '/ Twitter');
      console.log("Title changed to: " + newTitle);
    }
  }
});

function observeTitleChanges() {
    const titleElement = document.querySelector('head>title');
    if (!titleElement) {
      setTimeout(observeTitleChanges, 100);
      return;
    }
  
    const observer = new MutationObserver(function (mutationsList, observer) {
      for (let mutation of mutationsList) {
        if (mutation.type === 'childList' && mutation.target === titleElement) {

          if(document.querySelector(`a[aria-label="Profile"]`)){
            const windowlocationpathname = window.location.pathname;
            const myprofileURL = new URL(document.querySelector(`a[aria-label="Profile"]`).href);
            const myprofile = myprofileURL.pathname;
            if (windowlocationpathname.startsWith("/i/communities")) {
              document.querySelector('header[role="banner"]').setAttribute('nowSelected', 'communities');
            } else if (windowlocationpathname.startsWith(myprofile)) {
              changeProfileTabPostBTN(myprofile);
              if (windowlocationpathname === `${myprofile}/communities`) {
                document.querySelector('header[role="banner"]').setAttribute('nowSelected', 'communities');
              } else if (windowlocationpathname === `${myprofile}/lists`) {
                document.querySelector('header[role="banner"]').setAttribute('nowSelected', 'lists');
              } else {
                document.querySelector('header[role="banner"]').setAttribute('nowSelected', 'profile');
              }
            } else if (windowlocationpathname === `/home`) {
              document.querySelector('header[role="banner"]').setAttribute('nowSelected', 'home');
              changeHomeLegacyPostBTN();
              checkBannerHomeBTN();
            } else if (windowlocationpathname === `/explore`) {
              document.querySelector('header[role="banner"]').setAttribute('nowSelected', 'explore');
            } else if (windowlocationpathname.startsWith("/search")) {
              document.querySelector('header[role="banner"]').setAttribute('nowSelected', 'explore');
            } else if (windowlocationpathname === `/notifications`) {
              document.querySelector('header[role="banner"]').setAttribute('nowSelected', 'notifications');
            } else if (windowlocationpathname.startsWith("/messages")) {
              document.querySelector('header[role="banner"]').setAttribute('nowSelected', 'messages');
            } else if (windowlocationpathname === `/i/verified-choose`) {
              document.querySelector('header[role="banner"]').setAttribute('nowSelected', 'verified-choose');
            } else if (windowlocationpathname === `/compose/tweet`) {
              composetweet_loader=true;
              composetweetbtnspan_changed=false;
              changePostModalBTN(true);
            } else {
              const parts = windowlocationpathname.split("/");
              const desiredPart = parts[1] ? `/${parts[1]}` : '';
              changeProfileTabPostBTN(desiredPart);
              document.querySelector('header[role="banner"]').removeAttribute('nowSelected');
            }
          }
          observer.disconnect();
  
          const newTitle = titleElement.textContent;
          const updatedTitle = newTitle.replace(/\/ X$/, '/ Twitter');
          titleElement.textContent = updatedTitle;
          checkBannerHomeBTN();
          changeHomeLegacyPostBTN();
          checkBannerPostBTN();
  
          // Reconnect the observer after making the change
          observer.observe(titleElement, { childList: true });
        }
      }
    });
  
    observer.observe(titleElement, { childList: true });
}

function onwindowloaded() {
  if(!HomeLegacyPostBTNchanged){
    checkBannerHomeBTN();
    changeHomeLegacyPostBTN();
    checkBannerPostBTN();
    setTimeout(() => {
      onwindowloaded();
    }, 100);
  }
}

window.onload = function() {
  onwindowloaded();
};

main();
observeTitleChanges();