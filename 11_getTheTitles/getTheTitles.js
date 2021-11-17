//returns an array of book titles from an array of book titles and authors

const getTheTitles = function(books) {
    let titles = [];
    for(i = 0; i < books.length; i += 1) {
        titles.push(books[i].title);
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;


