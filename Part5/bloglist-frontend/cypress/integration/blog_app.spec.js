describe('blog app', function() {
  //app set up
  beforeEach(function() {
   cy.request('POST', 'http://localhost:3000/api/testing/reset')
    cy.request('POST', 'http://localhost:3000/api/users', user1)
    cy.request('POST', 'http://localhost:3000/api/users', user2) 
  })

    it('login page can be opened', function() {
      cy.visit('http://localhost:3000')
      cy.contains('username')
    })

    describe('Login',function() {
      it('succeeds with correct credentials', function() {
        cy.visit('http://localhost:3000')
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
    describe('logged in tests', function() {
      //log in
      beforeEach( function() {
        cy.request('POST', 'http://localhost:3000/api/login', {
          username: 'Joe', password: 'hunter2'
        }).then(response => {
          localStorage.setItem('loggedinBlogUser', JSON.stringify(response.body))
          cy.visit('http://localhost:3000')
        })
      })

      it('log in successful ', function() {
        cy.contains("Joe Momma")
      })
      //blog is not retrived from database after submission
      it('create blog', function(){
        cy.get("#newBlogButton").click()
        cy.get('#blogTitle').type("Joe's Hunting guide")
        cy.get('#blogAuthor').type('Big Joe')
        cy.get('#blogURL').type('www.huntersGuild.com') //URL not showing up
        cy.wait(500)
        cy.get("#submitBlog").click()
        cy.request('GET', 'http://localhost:3000/api/blogs') 
        cy.contains("new blog created")
        cy.reload()//need to reload to show blog, I don't know why?
        cy.contains("Joe's Hunting guide Big Joe")
      })
      it('like blog', function(){
        cy.get("#newBlogButton").click()
        cy.get('#blogTitle').type("Joe's Hunting guide")
        cy.get('#blogAuthor').type('Big Joe')
        cy.get('#blogURL').type('www.huntersGuild.com') //URL not showing up
        cy.wait(500)
        cy.get("#submitBlog").click()
        cy.request('GET', 'http://localhost:3000/api/blogs') 
        cy.contains("new blog created")
        cy.reload()//need to reload to show blog, I don't know why?
        cy.contains("Joe's Hunting guide Big Joe")
        cy.get('Button.view').click()
        cy.get('Button.like').click()
        cy.contains("1")
      })

      it('testing non UI post', function() {

      })
    })
})
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
const blog1 = {
  

}
