'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

// App modules
const app = require('./../server');
const associations = require('./../associations/associations-controller');

describe('Associations Controller', function(done) {
  it('/GET should get all the associations from database', function() {
    chai.request(app)
      .get('/associations')
      .end(function(err, res) {
        //expect(res).to.have.status(200);
        expect(res.body.length).to.equal(444);
        done();                               // <= Call done to signal callback end
      });

  });
});
