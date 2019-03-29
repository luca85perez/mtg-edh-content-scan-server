const fetch = require('node-fetch');
const HttpsProxyAgent = require('https-proxy-agent');

/**
 * @description
 * @param {*} root
 * @param {*} args
 * @param {*} context
 * @returns
 */
function commanders(root, args, context) {
  const { colors } = args;

  return fetch(
    `https://api.scryfall.com/cards/search?q=identity=${colors}+is:commander`,
    {
      agent: new HttpsProxyAgent('http://lucas.pereira:L%40124578@10.0.0.254:3128/')
    }
  )
    .then(response => response.json())
    .then(result => {
      const { data } = result;
      return data;
    });
}

/**
 * @description
 * @param {*} root
 * @param {*} args
 * @param {*} context
 * @returns
 */
async function videos(root, args, context) {
  const { name, pageToken } = args;

  const options = [
    'part=snippet',
    `q=${name.replace(/\s/g, '+')}+edh`,
    'order=date',
    'type=video',
    'maxResults=50',
    'key=AIzaSyAXzdppHQxlLzFc9UV9SmcIdLz9zEtkA50',
  ];

  if (pageToken) {
    options.push(`pageToken=${pageToken}`);
  }

  return fetch(
    `https://www.googleapis.com/youtube/v3/search?${options.join('&')}`,
    {
      agent: new HttpsProxyAgent('http://lucas.pereira:L%40124578@10.0.0.254:3128/')
    }
  )
    .then(response => {
      const json = response.json();
      return json;
    })
    .then(result => {
      return result;
    });
}

module.exports = {
  commanders,
  videos
};
