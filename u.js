/* TizenTube (Erik's build) loader. The app keeps this file for days, so it only loads the real script (tt.js):
   the copy saved last time runs at once (TizenTube must be in place before YouTube's first answers), and a fresh
   one is fetched (at most an hour old) and saved for the next start; with no saved copy it runs as soon as it
   arrives. A fix thus reaches every TV within an hour, from the following start on. */
(function () {
  var KEY = 'erik.tt', saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  if (saved) {
    try { (0, eval)(saved); } catch (e) { console.error('TizenTube (Erik): saved script failed', e); saved = null; }
  }
  fetch('https://cdn.jsdelivr.net/gh/HG-ERIK/tizentube-erik@1/tt.js?h=' + Math.floor(Date.now() / 3600000))
    .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.text(); })
    .then(function (code) {
      if (!saved) (0, eval)(code);
      if (code !== saved) { try { localStorage.setItem(KEY, code); } catch (e) { console.warn('TizenTube (Erik): not saved', e); } }
    }, function (e) { console.error('TizenTube (Erik): script not fetched', e); });
})();
