describe('blog app', function() {
  //app set up
  beforeEach(function() {
   cy.request('POST', 'http://localhost:3003/api/testing/reset')
    const user1 = {
      name: 'Joe Momma',
      username: 'Joe',
      password: 'hunter2'
    }
    const user2 ={
      name: 'User Number Two',
      username: 'User2',
      password: 'monkey'
    }
    cy.request('POST', 'http://localhost:3003/api/users', user1)
    cy.request('POST', 'http://localhost:3003/api/users', user2) 
    cy.visit('http://localhost:3000')
  })

    it('login page can be opened', function() {
      cy.visit('http://localhost:3000')
      cy.contains('username')
    })

    describe('Login',function() {
      it('succeeds with correct credentials', function() {
        cy.get('#usernameInput').type('Joe')
        cy.get('#passwordInput').type('hunter2')
        cy.get('#loginButton').click()
        cy.contains("Joe Momma")
      })
  
      it('fails with wrong credentials', function() {
        cy.get('#usernameInput').type('Joe')
        cy.get('#passwordInput').type('Wrong password')
        cy.get('#loginButton').click()
        cy.contains('Wrong')

      })

    })
      //only makes it so only this test runs
    describe.only('logged in tests', function() {
      //log in
      beforeEach( function() {
        cy.get('#usernameInput').type('Joe')
        cy.get('#passwordInput').type('hunter2')
        cy.get('#loginButton').click()
      })

      it('log in successful ', function() {
        cy.contains("Joe Momma")
      })
      //blog is not retrived from database after submission
      it('create blog', function(){
        cy.get("#newBlogButton").click()
        cy.get('#blogTitle').type("Joe's Hunting guide")
        cy.get('#blogAuthor').type('Big Joe')
        cy.get('#blogURL').type('www.huntersGuild.com')
        cy.get("#submitBlog").click()
        cy.contains("new blog created")
      })

    })
})