void(() => {
    const app = {
        CovidPositive : null,
        async initialize() {
            const fetched = await fetch("../data/pgm.json");
            const {
                users
            } = await fetched.json();
            this.users = users;
            this.cacheElements();
            this.registerListeners();
            this.updatePGMUserList();
            this.weatherElemente = new WeatherApi();
            this.fetchWeather();
            CovidPositive = new GhentOpenDataApi();
            this.fetchGhentCovidPositiveCases();
        },

        cacheElements() {
            this.teamElement = document.querySelector(".team");
            console.log(this.teamElement);
            this.weatherElement = document.querySelector(".weather");
            console.log(this.weatherElement);
            this.covidElements = document.querySelector(".covid");
            console.log(this.covidElements);
            this.searchElement = document.querySelector(".search");
            console.log(this.searchElement);
            this.conentElement = document.querySelector('.content');
            console.log(this.conentElement);
        },

        registerListeners() {
            const find = document.getElementById("find");
            const submit = document.getElementById("submit");
            this.GitHubApi = new GitHubApi()
            submit.addEventListener('click', async () => {
                const result = await this.GitHubApi.getSearchUsers(find.value)
                this.updateGHUserList(result.items)
            })
        },
        updateUserDetails(userName) {
           
        },
        updatePGMUserDetails(username) {

        },
        async fetchGhentCovidPositiveCases() {
            const covidElement = await CovidPositive.getCovidPostiveCases();
            this.updatefetchGhentCovidPositiveCases(covidElement);
        },
        updatefetchGhentCovidPositiveCases(covidCases) {
            console.log(this)
            this.covidElements.innerHTML = `
            <div class="covids">
                <div class="locatie" style="color:white">
                    <img src="../media/images/virus.jpg" width="100" height="100"/>
                    <p> ${covidCases.records[0].fields.cases} </p>
                </div>
            </div>
            `
        },
        async fetchWeather() {
            const weatherElemente = await this.weatherElemente.getCurrentWeather();
            this.renderWeather(weatherElemente);
        },
        renderWeather(weather) {
            this.weatherElement.innerHTML = `
            <div class="weer">
                
                <div class="locatie">
                    <i> ${weather.current.temp_c} C °</i>
                    <img src="${weather.current.condition.icon}"></img>
                    <p>${weather.location.name}</p> 
                </div>
            </div>
            `

        },
        fetchUser(){
            console.log('loh');
        },
        updatePGMUserList() {
            this.teamElement.innerHTML = this.users
                .map((user) => {
                    return `
                        <div class="teamliad" onclick="${this.fetchUser}">
                            <div class="logoteam">
                                <img src="${user.thumbnail}" alt="">
                            </div>
                            <div class="besh">
                                <h1>${user.name}</h1>
                                <p>${user.lastname}</p>
                            </div>
                        </div>
                    `;
                })
                .join("");
        },
        async fetchUserByName(name) {
            fetch(this.$UsersApi + name, {})

        },
        updateGHUserList(users) {
            const result = document.getElementById("result");
            result.innerHTML = '';
            for (const user of users) {
                const gh = document.createElement("div");
                gh.className = 'ghLogin';
                const image = document.createElement("img");
                image.src = user.avatar_url;
                gh.appendChild(image);
                const login = document.createElement("p");
                login.textContent = user.login;
                gh.appendChild(login);
                result.appendChild(gh);
            }
        },
        async fetchDetailsOfUser(username) {
           // const details = await this.
        },
        updateUserRepositoriesList(repos) {
            
        },
        updateUserFollowersList(followers) {

        },
        getLinkHTML(size = 32) {

        }

    }
    app.initialize();
})();