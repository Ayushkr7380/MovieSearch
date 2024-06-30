const api_key = 'f74a9b77'
const URL = 'https://www.omdbapi.com/'
const searchmovie = document.getElementById('searchmovie');
const moviebody = document.getElementById('movie-cards');
const spinner = document.getElementById('spinner');
const beforefetch = document.getElementById('beforefetch');

searchmovie.addEventListener('keypress',async (e)=>{
    const moviename = searchmovie.value.trim().toLowerCase();
    if(e.key === 'Enter'){
        if(moviename !== ''){
            let cards = ''
            beforefetch.style.display = 'none'
            spinner.style.display = 'block'
            try {               
                const response = await fetch(`${URL}?apikey=${api_key}&s=${moviename}`)
                if(!response.ok){
                    throw new Error('Network Error')
                }
                const data = await response.json();
                console.log(data)
                console.log(data.Search)
                // console.log(data.Search.length)
                
                    spinner.style.display = 'none'
                    data.Search.forEach((e) => {
                        console.log(e.Title)
                        cards += `<div class="card">
                        <img src=${e.Poster} alt=${e.Title}>
                        <p>${e.Title}</p>
                        <span>${e.Year}</span>
                        <button>Watch Now</button>
                        </div>` 
                    });
                
                    
                } catch (error) {
                    console.log(error)
                    spinner.style.display = 'none'
                    cards += `<h1>Movie Not Found</h1>`
                }   
            moviebody.innerHTML = cards
        }
    }
})
