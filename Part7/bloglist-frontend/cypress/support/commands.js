Cypress.Commands.add('login', ({ username, password }) => {
    cy.request('POST', 'http://localhost:3003/api/login', {
        username, password
      }).then(response => {
        localStorage.setItem('loggedinBlogUser', JSON.stringify(response.body))
      })
  })
//needs bearer auth
Cypress.Commands.add('addBlog', ({ url, title,author,likes }) => {

    cy.request(
        {
            method: 'POST',
            url: 'http://localhost:3003/api/blogs',
            body: {
                url, title, author, likes,
            },
            headers: {
                'Authorization': `bearer ${JSON.parse(localStorage.getItem('loggedinBlogUser')).token}`
            }

        }
    )
  })
