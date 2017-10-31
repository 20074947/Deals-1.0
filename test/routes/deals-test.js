var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../bin/www');
var expect = chai.expect;

chai.use(chaiHttp);
var _ = require('lodash' );
chai.use(require('chai-things'));

describe('Deals', function (){
  describe('Dealss', function (){
        beforeEach(function(){  
            while(datastore.length > 0) {
                datastore.pop();
            }  
            datastore.push( 
                {id: 1000000, name: 'Early bird', location: 'L Atmosphere Restaurant', category: 'Food', startdate: '10/10/2017', expirydate: '27/10/2017', information: '2 PEOPLE x 3 courses', price: 20}
            );
            datastore.push( 
                {id: 1000001, name: 'Premium movie for 2', location: 'Odeon cinema', category: 'Student', startdate: '2/10/2017', expirydate: '22/10/2017', information: '2 STUDENTS x 3 tickets', price: 14}
            );
        });
      });
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
describe('POST /deals', function () {
          it('should return confirmation message and update datastore', function(done) {
              var deal = { 
    name: "Shampoo",
    location: "Deals",
    category: "beauty",
    startdate: "10/10/2017",
    expirydate: "27/10/2017",
    information: "get one = free one",
    price: 27
                };
                chai.request(server)
                  .post('/deals')
                  .send(deal)
                  .end(function(err, res) {
                       expect(res).to.have.status(200);
               expect(res.body).to.have.property('message').equal('Deal Added!' ) ;
                     done();
                  });
          });
      });
describe('PUT /deals/:id/price', function () {
    it('should return all deals with specified deal updated', function(done) {
        chai.request(server)
            .put('/deals/1000001/price')
            .end(function(err, res) {
                expect(res).to.have.status(200);
                expect(res.body).be.be.a('array');
                var result = _.map(res.body, function (deal) {
                    return { id: deal.id, 
                        price: deal.price };
                }  );
                expect(result).to.include( { id: 1000001, price: 34  } );
                done();
            });
    });
    it('should return a 404 status and message for invalid deal id', function(done) {
        chai.request(server)
            .put('/deals/1100001/price')
            .end(function(err, res) {
                expect(res).to.have.status(404);
                expect(res.body).to.have.property('message').equal('Invalid Deal Id!') ;
                done();
            });
    });
});
  });