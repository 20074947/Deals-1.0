var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../bin/www');
var expect = chai.expect;

chai.use(chaiHttp);
var _ = require('lodash' );
chai.use(require('chai-things'));

describe('Customers', function() {
        describe('customers', function() {
        beforeEach(function() {
            while (datastore.length > 0) {
                datastore.pop();
            }
            datastore.push({
                 id: 1234567,
    firstName: 'Emma',
    secondName: 'O Donnell',
    email: 'emma.odonnell2@live.com',
    password: 'fullclip',
    phone: '0877877654',
    address: 'Deerpark East'
            });
            datastore.push({
                id: 7654321,
    firstName: 'Jaja',
    secondName: 'O Donnell',
    email: 'jaja.odonnell2@live.com',
    password: 'lololo',
    phone: '0873426754',
    address: 'Cork'
            });
        });
    });
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
    describe('DELETE /customers/:id', function() {
        it('should delete customer with a valid id', function(done) {
            chai.request(server)
                .delete('/customers/1234567')
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    done();
                });

        });
        it('should return a 404 status for invalid customer id to delete', function(done) {
            chai.request(server)
                .delete('/customers/1100001')
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    done();

                });
        });
    });
    describe('GET /customers/:id', function() {
        it('should return a specific customer with a valid id', function(done) {
            chai.request(server)
                .get('/customers/1234567')
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    done();
                });
        });

        it('should return a 404 status and message for invalid customer id', function(done) {
            chai.request(server)
                .get('/customers/1100001')
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('message').equal('customer NOT Found!');
                    done();
                });
        });
    });
});