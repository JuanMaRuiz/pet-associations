'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

// App modules
const server = require('./../server');
const associations = require('./../associations/associations-controller');

describe('Associations Controller', function() {
  it('/GET should get all the associations from database', function() {
    chai.request(server)
      .get('/associations')
      .end(function(err, res) {
        console.log('response: ', res);
        done();
      });

  });
});
