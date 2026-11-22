/* TizenTube (Erik's build) loader. The app keeps this file for days; the real script (tt.js) is fetched fresh at
   least every hour, so a fix reaches every TV within an hour. */
(function () {
  var url = 'https://cdn.jsdelivr.net/gh/HG-ERIK/tizentube-erik@1/tt.js?h=' + Math.floor(Date.now() / 3600000);
  fetch(url).then(function (r) {
    if (!r.ok) throw new Error('HTTP ' + r.status);
    return r.text();
  }).then(function (code) { (0, eval)(code); }, function (e) { console.error('TizenTube (Erik): script not loaded', e); });
})();
