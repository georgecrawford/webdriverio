/*jshint expr: true*/
describe('getCommandHistory', function() {

    before(h.setup());

    it('text should be visible after clicking on .btn1', function() {
        return this.client.getTitle().click('body').getCommandHistory().then(function(commandList) {
            commandList = commandList.slice(-5);
            commandList[0].name.should.be.equal('getTitle');
            commandList[0].args.should.have.length(0);
            commandList[1].name.should.be.equal('title');
            commandList[0].args.should.have.length(0);
            commandList[2].name.should.be.equal('click');
            commandList[2].args[0].should.be.equal('body');
            commandList[3].name.should.be.equal('element');
            commandList[3].args[0].should.be.equal('body');
            commandList[4].name.should.be.equal('elementIdClick');
        });
    });

});