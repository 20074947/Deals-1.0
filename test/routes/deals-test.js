var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../bin/www');
var expect = chai.expect;

chai.use(chaiHttp);
var _ = require('lodash' );
chai.use(require('chai-things'));

describe('Deals', function (){
      describe('GET /deals', function () {
              it('should return all the deals in an array', function(done) {
                    chai.request(server)
                        .get('/deals')
                        .end(function(err, res) {
      expect(res).to.have.status(200);
      expect(res.body).to.be.a('array');
      expect(res.body.length).to.equal(2);
      var result = _.map(res.body, function (deal) {
          return { id: deal.id,
              name: deal.name } 
          });
      expect(result).to.include( { id: 1000000, name: 'Early bird'  } );
      expect(result).to.include( { id: 1000001, name: 'Premium movie for 2'  } );
      done();
  });
              });
        });

  });