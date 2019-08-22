function moviesDB (DB, genre, movie) {

    var position = 0;
    var genre_found = false;
    var movie_found = false;
    var emptymovies = [];
    var newmovie = {genre: '', movies: emptymovies};

    for (var key in DB) {
       if (DB[key].genre === genre) {
            position = key;
            genre_found = true;
            for (var key_movie in DB[key].movies) {
                if (DB[key].movies[key_movie].title === movie.title) {
                    movie_found = true;
                    break;
                }
            }
       }
    }

    if (genre_found === false) {
        newmovie.genre = genre;
        newmovie.movies.push(movie);
        DB.push(newmovie);
    } else {
        if (movie_found === false) {
             DB[position].movies.push(movie);
        } else {
            return (`the movie ${movie.title} is already in the database!`);
        }
    }
    return DB;
}
