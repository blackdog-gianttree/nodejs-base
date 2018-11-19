/* global it */

const { expect } = require('chai');
const request = require('request');

it('Main page content', (done) => {
  request('http://localhost:3000', (error, response, body) => {
    expect(body).to.equal('Hello World\n');
    done();
  });
});
