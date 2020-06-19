export const getDataFromServer = () => {
    const movies = fetch('https://sky-frontend.herokuapp.com/movies')
    .then(data => data.json())
    .then(data => {
        return data;
    });
    return movies;
}