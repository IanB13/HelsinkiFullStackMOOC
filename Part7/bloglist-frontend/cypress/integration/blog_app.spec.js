describe('blog app', function() {
  //app set up
  beforeEach(function() {
   cy.request('POST', 'http://localhost:3003/api/testing/reset')
    cy.request('POST', 'http://localhost:3003/api/users', user1)
    cy.request('POST', 'http://localhost:3003/api/users', user2) 
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
      it('logout succeeds', function(){
        cy.get('#logout').click()
        cy.contains('username')
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
        cy.login({username: user1.username, password: user1.password})
        cy.visit('http://localhost:3000')

      })

      it('log in successful ', function() {
        cy.contains("Joe Momma")
      })

      it('create blog', function(){
        cy.get("#newBlogButton").click()
        cy.get('#blogTitle').type("Joe's Hunting guide")
        cy.get('#blogAuthor').type('Big Joe')
        cy.get('#blogURL').type('www.huntersGuild.com')
        cy.get("#submitBlog").click()
        cy.request('GET', 'http://localhost:3003/api/blogs') 
        cy.contains("new blog created")
        cy.contains("Joe's Hunting guide Big Joe")
      })
      it('like blog', function(){
        cy.get("#newBlogButton").click()
        cy.get('#blogTitle').type("Joe's Hunting guide")
        cy.get('#blogAuthor').type('Big Joe')
        cy.get('#blogURL').type('www.huntersGuild.com') 
        cy.get("#submitBlog").click()
        cy.request('GET', 'http://localhost:3003/api/blogs') 
        cy.contains("new blog created")
        cy.contains("Joe's Hunting guide Big Joe")
        cy.get('Button.view').click()
        cy.get('Button.like').click()
        cy.contains("1")
      })

      it('delete blog', function() {
        cy.addBlog({	title: "cool BABOON facts",
        author: "Ian",
        url: "https://www.coolWHALEfacts.com/",
        likes: 1454})
        cy.reload()
        cy.contains("cool BABOON facts")
        cy.get('Button.view').click()
        cy.get('Button.remove').click()
        cy.contains("cool BABOON facts").should('not.exist')
      })

      it.only('check blog sorting' , function(){
        cy.addBlog({	title: "blog 2", author: "Dan",  likes: 50})
        cy.addBlog({	title: "blog 1", author: "Ian",  likes: 73})
        cy.addBlog({	title: "blog 3", author: "Joe",  likes: 12})
        cy.addBlog({	title: "blog 4", author: "Ted",  likes: 3})
        cy.reload()
        cy.get('div:nth-child(2)').contains('blog 1 Ian')
        cy.get('div:nth-child(3)').contains('blog 2 Dan')
        cy.get('div:nth-child(4)').contains('blog 3 Joe')
        cy.get('div:nth-child(5)').contains('blog 4 Ted')
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

