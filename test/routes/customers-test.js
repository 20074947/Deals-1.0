var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../bin/www');
var expect = chai.expect;

chai.use(chaiHttp);
var _ = require('lodash' );
chai.use(require('chai-things'));

describe('Customers', function() {
    describe('GET /customers', function() {
        it('should return all the customers in an array', function(done) {
            chai.request(server)
                .get('/customers')
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.a('array');
                    expect(res.body.length).to.equal(2);
                    var result = _.map(res.body, function(customer) {
                        return {
                            id: customer.id,
                            firstName: customer.firstName
                        }
                    });
                    expect(result).to.include({
                        id: 1234567,
                        firstName: 'Emma'
                    });
                    expect(result).to.include({
                        id: 7654321,
                        firstName: 'Jaja'
                    });
                    done();
                });
        });
    });
    describe('POST /customers', function() {
        it('should return confirmation message and update datastore', function(done) {
            var customer = {
                firstName: "Manuel",
                secondName: "Doudi",
                email: "Manue2274@live.com",
                password: "axdevf",
                phone: "0899789887",
                address: "Lismore"
            };
            chai.request(server)
                .post('/customers')
                .send(customer)
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('message').equal('customer Added!');
                    done();
                });
        });
    });
});