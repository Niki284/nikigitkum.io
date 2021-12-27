

class GitHubApi {
    getSearchUsers = async (name) => {
        try {
            const response = await fetch(
                `https://api.github.com/search/users?sort=desc&page=1&per_page=10&q=${name}`
            );
            const data = await response.json();
            return data;
        } catch (err) {
            throw err
        }
    };
    getReposOfUsers = async (username) => {
        try {
            const response = await fetch(`https://api.github.com/users/${username}/repos?page=1&per_page=50`);
            const data = await response.json();
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };
    getFollowersOfUsers = async (username) => {
        try {
            const response = await fetch(`https://api.github.com/users/${username}/followers?page=1&per_page=100`);
            const data = await response.json();
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };
    getSubscriptionsOfUser = async (username) => {
        try {
            const response = await fetch(`https://api.github.com/users/%24%7Busername%7D/followers?page=1&per_page=100${username}`);
            const data = await response.json();
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };
}

function UsersApi() {
    this.getUser = async () => {
        try {
            const response = await fetch(
                "https://api.github.com/search/users?sort=desc&page=1&per_page=100&q=%24%7Bname%7D"
            );
            const data = await response.json();
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };
}

class WeatherApi {
    getCurrentWeather = async () => {
        try {
            const response = await fetch(` http://api.weatherapi.com/v1/current.json?key=df41aa4128c54dd6a9d175806211712&q=Ghent`);
            const data = await response.json();
            console.log(data);
            return data;
        } catch (err) {
            console.log(err);
        }
    };
}

class GhentOpenDataApi {
    getCovidPostiveCases = async () => {
        const response = await fetch(
            "https://data.stad.gent/api/records/1.0/search/?dataset=dataset-of-cumulative-number-of-confirmed-cases-by-municipality&q="
        );
        const data = await response.json();
        return data;
    };
















    
}