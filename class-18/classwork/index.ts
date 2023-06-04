const apiKey = '46ce9ed4c1328f252f1df01a5aab79d7';
import axios from 'axios'
const ApiKey = '46c5ab3a7ed8c71a8b32bb28e9ff8643'
const movieurl = `https://api.themoviedb.org/3/trending/tv/day?api_key=${ApiKey}`

const movies = axios.get(movieurl).then((response) => {
    const titles = response.data.results.map((tv:any) => tv.name)
    const titleandoverview = response.data.results.map((tv:any) => ({
        title:tv.name,
        overview:tv.overview
    }))
    const moviefilter = response.filter(word => word.length > 10).map(word => word.toUpperCase());
    console.log(titleandoverview)
    console.log(titles)
})