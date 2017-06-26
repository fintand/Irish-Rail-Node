import fetch from 'node-fetch';
import querystring from 'querystring';

const URL = 'https://data.dublinked.ie/cgi-bin/rtpi/';

const fetchStop = (stopid) => {
  const URL_POSTFIX = 'busstopinformation?';
  let q = querystring.stringify({
    stopid: stopid,
    format: 'json'
  });

  return fetch(URL + URL_POSTFIX + q)
    .then(res => res.json())
    .then(json => json)
};

const fetchBusesRealtime = (stopid) => {
  const URL_POSTFIX = 'realtimebusinformation?';
  let q = querystring.stringify({
    stopid: stopid,
    format: 'json'
  });

  return fetch(URL + URL_POSTFIX + q)
    .then(res => res.json())
    .then(json => json)
};

export {fetchStop, fetchBusesRealtime};