describe('blog app', function() {
  //app set up
  beforeEach(function() {
    //cy.request('POST', 'http://localhost:3001/api/testing/reset') need to write api/testing/reset
    cy.visit('http://localhost:3000')
  })

    it('login page can be opened', function() {
      cy.visit('http://localhost:3000')
      cy.contains('username')
    })

    it('front end login form is avalible', function(){


    })
  })