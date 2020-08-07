const blogs =
    [
        {
            _id: "5a422a851b54a676234d17f7",
            title: "React patterns",
            author: "Michael Chan",
            url: "https://reactpatterns.com/",
            likes: 7, __v: 0
        },
        {
            _id: "5a422aa71b54a676234d17f8",
            title: "Go To Statement Considered Harmful",
            author: "Edsger W. Dijkstra",
            url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
            likes: 5, __v: 0
        },
        {
            _id: "5a422b3a1b54a676234d17f9",
            title: "Canonical string reduction",
            author: "Edsger W. Dijkstra",
            url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
            likes: 12, __v: 0
        },
        {
            _id: "5a422b891b54a676234d17fa",
            title: "First class tests",
            author: "Robert C. Martin",
            url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
            likes: 10, __v: 0
        },
        {
            _id: "5a422ba71b54a676234d17fb",
            title: "TDD harms architecture",
            author: "Robert C. Martin",
            url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
            likes: 0, __v: 0
        },
        {
            _id: "5a422bc61b54a676234d17fc",
            title: "Type wars",
            author: "Robert C. Martin",
            url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
            likes: 2, __v: 0
        }
    ]

const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogList) =>{
    const likes = blogList.reduce( (totalLikes,blog) => {
        totalLikes += blog.likes;
        return totalLikes
    },0) 

    return likes
}

const favouriteBlog = (blogList) =>{
   let favblog = blogList[0];
    for(blog of blogList){
        if(favblog.likes < blog.likes){
            favblog = blog
        }
    }
    return favblog
}

const mostblog = (bloglist) => {
    //gets a list of authors, with one instance of the authors name for each blog written
    const authorlistnum = bloglist.map(blog => blog.author)
    //gets a list of unique authors
    const authorlist = Array.from(new Set(authorlistnum))
    //sets up the object 
    const authorObject = authorlist.map(author => {
        return ({ "author": author, blogs: 0 })

    })

    for (author of authorObject) {
        for (blog of bloglist) {
            if (blog.author === author.author) {
                author.blogs += 1;
            }

        }
    }

    let mostBlogs = { "author": null, "blogs": 0 }
    for (author of authorObject) {
        if (mostBlogs.blogs < author.blogs) {
            mostBlogs = author
        }
    }
    return mostBlogs
}

const mostLikes = (bloglist) => {
    //gets a list of authors, with one instance of the authors name for each blog written
    const authorlistnum = bloglist.map(blog => blog.author)
    //gets a list of unique authors
    const authorlist = Array.from(new Set(authorlistnum))
    //sets up the object 
    const authorObject = authorlist.map(author => {
        return ({ "author": author, likes: 0 })

    })

    for (author of authorObject) {
        for (blog of bloglist) {
            if (blog.author === author.author) {
                author.likes += blog.likes;
            }

        }
    }

    let mostLikes = { "author": null, "likes": 0 }
    for (author of authorObject) {
        if (mostLikes.likes < author.likes) {
            mostLikes = author
        }
    }
    return mostLikes
}
console.log(mostLikes(blogs))



module.exports = {
    dummy,
    totalLikes,
    favouriteBlog,
    mostblog,
    mostLikes
}


       