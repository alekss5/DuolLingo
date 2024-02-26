const authMiddleware = require('../middleware/is-auth')
const expect = require('chai').expect
const jwt = require('jsonwebtoken')
const sinon = require('sinon')

describe('Auth middleware:', function(){

    it('error if no auhorization header is present',function(){
        const req = {
            get: function(heatherName){
                return null
            }
        }
        expect(authMiddleware.bind(this,req,{},()=>{
    
        })).to.throw('Not authorized')
    })
    
    it('error if no auhorization header is only one string',function(){
        const req = {
            get: function(heatherName){
                return 'xzy'
            }
        }
        expect(authMiddleware.bind(this,req,{},()=>{
    
        })).to.throw()
    })
    it('error if the token is not verified',function(){
        const req = {
            get: function(heatherName){
                return 'xzy'
            }
        }
        expect(authMiddleware.bind(this,req,{},()=>{
    
        })).to.throw()
    })

    it('shoud pass user id after decoding the token ',function(){
        const req = {
            get: function(heatherName){
                return 'xzy'
            }
        }
        sinon.stub(jwt,'verify')

        jwt.verify.returns({
            userId: 'user'
        })
        
        authMiddleware(req,{},()=>{})
        expect(req).to.have.property('userId')

        jwt.verify.restore()
    })
})
// const chai = require('chai');
// const sinon = require('sinon');
// const jwt = require('jsonwebtoken');
// const middleware = require('../middleware/is-auth') // Replace with the actual path to your middleware file
// const expect = chai.expect;

// describe('Auth Middleware', () => {
//     let req, res, next;

//     beforeEach(() => {
//         req = { get: sinon.stub() };
//         res = {};
//         next = sinon.spy();
//     });

//     afterEach(() => {
//         sinon.restore(); // Restore all stubbed methods after each test
//     });

//     it('should throw an error if no authorization header is present', () => {
//         req.get.withArgs('Authorization').returns(undefined);

//         expect(() => middleware(req, res, next)).to.throw('Not authorized');
//         expect(next.called).to.be.false;
//     });

//     it('should throw an error if the token is invalid', () => {
//         req.get.withArgs('Authorization').returns('Bearer invalidtoken');
//         sinon.stub(jwt, 'verify').throws(new Error('Invalid token'));

//         expect(() => middleware(req, res, next)).to.throw('Invalid token');
//         expect(next.called).to.be.false;
//     });

//     it('should set userId in the request object if the token is valid', () => {
//         const token = 'validtoken';
//         req.get.withArgs('Authorization').returns(`Bearer ${token}`);

//         sinon.stub(jwt, 'verify').returns({ userId: 'someUserId' });

//         middleware(req, res, next);

//         expect(next.calledOnce).to.be.true;
//         expect(req.userId).to.equal('someUserId');
//     });
// });
