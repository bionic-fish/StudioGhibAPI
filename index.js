// app
const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'content');

app.appendChild(logo);
app.appendChild(container);

// create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function() {
    // begin accessing JSON data here
    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
        data.forEach(movie => {
            //create a div with a class of card
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            //create a h1 element and set the text content to the films title
            const h1 = document.createElement('h1');
            h1.textContent = movie.title;

            // create a paragraph and set the text content to the films description
            const p = document.createElement('p');
            movie.description = movie.description.substring(0, 300); // limit to 300 chars
            p.textContent = `${movie.description}...` // End with an ellipses

            // append the cards to the container element
            container.appendChild(card);

            // each card will contain a h1 and a paragraph
            card.appendChild(h1);
            card.appendChild(p);

            // log each movie title

            console.log(movie.title)
        })
    } else {
        console.log('error')
    }
}

// send request
request.send()



