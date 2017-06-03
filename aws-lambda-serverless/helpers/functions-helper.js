"use strict";

module.exports.responseHelper = (code, res, message) => {
  let response = res || { message: message, err: true};
  return {
    statusCode: code,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(response)
  };
};