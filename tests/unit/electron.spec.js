import testWithSpectron from 'vue-cli-plugin-electron-builder/lib/testWithSpectron';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
// eslint-disable-next-line no-undef
const spectron = __non_webpack_require__('spectron');

chai.should();
chai.use(chaiAsPromised);

// eslint-disable-next-line func-names
describe('Application launch', function () {
  this.timeout(30000);

  // eslint-disable-next-line func-names
  beforeEach(function () {
    return testWithSpectron(spectron).then((instance) => {
      this.app = instance.app;
      this.stopServe = instance.stopServe;
    });
  });

  // eslint-disable-next-line func-names
  beforeEach(function () {
    chaiAsPromised.transferPromiseness = this.app.transferPromiseness;
  });

  // eslint-disable-next-line consistent-return,func-names
  afterEach(function () {
    if (this.app && this.app.isRunning()) {
      return this.stopServe();
    }
  });

  // eslint-disable-next-line func-names
  it('opens a window', function () {
    return this.app.client
      .getWindowCount()
      .should.eventually.have.at.least(1)
      .browserWindow.isMinimized()
      .should.eventually.be.false.browserWindow.isVisible()
      .should.eventually.be.true.browserWindow.getBounds()
      .should.eventually.have.property('width')
      .and.be.above(0)
      .browserWindow.getBounds()
      .should.eventually.have.property('height')
      .and.be.above(0);
  });
});
