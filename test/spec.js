describe ( 'Homepage test', function () {

  beforeEach ( function () {
    browser.get ( 'http://localhost:12345/public/index.html' );
  } );

  it ( 'The Jedi\'s name should be Lukas', function () {
    expect(
        element(
            by.model ( 'ctrl.customer.name' )
        ).evaluate('ctrl.customer.name')
      ).toEqual ( "Lukas" );
  } );

} );
