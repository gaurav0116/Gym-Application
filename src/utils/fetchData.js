// Exercise API Options
export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9adeea4700msh23f9ab30020a7dfp11cb26jsnf46dc5183aec',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

// Youtube API options
export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9adeea4700msh23f9ab30020a7dfp11cb26jsnf46dc5183aec',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};

// API fetching function
export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
};