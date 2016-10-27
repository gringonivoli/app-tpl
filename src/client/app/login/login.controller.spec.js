/* jshint -W117, -W030 */
describe('LoginController', function () {
    var controller;

    beforeEach(function () {
        bard.appModule('app.login');
        bard.inject('$controller', '$log', '$q', '$rootScope');
    });

    it('true is true', function () {
        expect(true).to.be.true;
    });

    it('exists', function () {
        expect(controller).to.be.defined;
    });
});
