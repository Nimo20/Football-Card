const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");

const myFavouriteFootballTeam = {
    team: "Germany",
    sport: "Football",
    year: "2014",
    isWorldCupWinner: true,
    headCoach: {
        coachName: "Joachim Löw",
        matches: 7,
    },
    players: [
        {
            name: "Manuel Neuer", position: "Goalkeeper",
            number: 1,
            isCaptain: false,
            nickname: "Sweeper Keeper"
        },
        {
            name: "Kevin Großkreutz", position: "Defender",
            number: 2,
            isCaptain: false,
            nickname: "N/A"
        },
        {
            name: "Matthias Ginter", position: "Defender",
            number: 3,
            isCaptain: false,
            nickname: "N/A"
        },
        {
            name: "Benedikt Höwedes", position: "Defender",
            number: 4,
            isCaptain: false,
            nickname: "N/A"
        },
        {
            name: "Mats Hummels", position: "Defender", number: 5,
            isCaptain: false,
            nickname: "N/A"
        },
        {
            name: "Sami Khedira", position: "Midfielder", number: 6,
            isCaptain: false,
            nickname: "N/A"
        },
        {
            name: "Bastian Schweinsteiger",
            position: "Midfielder", number: 7,
            isCaptain: false,
            nickname: "Schweini"
        },
        {
            name: "Mesut Özil",
            position: "Midfielder", number: 8,
            isCaptain: false,
            nickname: "The Assist King"
        },
        {
            name: "André Schürrle", position: "Forward", number: 9,
            isCaptain: false,
            nickname: "N/A"
        },
        {
            name: "Lukas Podolski", position: "Forward", number: 10,
            isCaptain: false,
            nickname: "Poldi"
        },
        {
            name: "Miroslav Klose", position: "Forward", number: 11,
            isCaptain: false,
            nickname: "Record Breaker"
        },
        {
            name: "Ron-Robert Zieler", position: "Goalkeeper", number: 12,
            isCaptain: false,
            nickname: "N/A"
        },
        {
            name: "Thomas Müller", position: "Forward", number: 13,
            isCaptain: false,
            nickname: "Raumdeuter"
        },
        {
            name: "Julian Draxler", position: "Midfielder", number: 14,
            isCaptain: false,
            nickname: "N/A"
        },
        {
            name: "Erik Durm", position: "Defender", number: 15,
            isCaptain: false,
            nickname: "N/A"
        },
        {
            name: "Philipp Lahm", position: "Defender", number: 16,
            isCaptain: false,
            nickname: "Magic Dwarf"
        },
        {
            name: "Per Mertesacker", position: "Defender", number: 17,
            isCaptain: false,
            nickname: "The Big Friendly Giant"
        },
        {
            name: "Toni Kroos", position: "Midfielder", number: 18,
            isCaptain: false,
            nickname: "Sniper"
        },
        {
            name: "Mario Götze", position: "Forward", number: 19,
            isCaptain: false,
            nickname: "Super Mario"
        },
        {
            name: "Jérôme Boateng", position: "Defender", number: 20,
            isCaptain: false,
            nickname: "N/A"
        },
        {
            name: "Shkodran Mustafi", position: "Defender", number: 21,
            isCaptain: false,
            nickname: "N/A"
        },
        {
            name: "Roman Weidenfeller", position: "Goalkeeper", number: 22,
            isCaptain: false,
            nickname: "N/A"
        },
    ],
};

Object.freeze(myFavouriteFootballTeam);
const { sport, team, year, players } = myFavouriteFootballTeam;
const { coachName } = myFavouriteFootballTeam.headCoach;


typeOfSport.textContent = sport;
worldCupYear.textContent = year
headCoach.textContent = coachName;
teamName.textContent = team;

const setPlayerCards = (arr = players) => {
    playerCards.innerHTML += arr.map(({ name, position, number, isCaptain, nickname }) => {
        return `
        <div class="player-card">
        <h2>${isCaptain ? "(Captain)" : ""} ${name}</h2>
        <p>Position: ${position}</p>
        <p>Number: ${number}</p>
        <p>Nickname: ${nickname !== null ? nickname : "N/A"}</p>
        </div>
        `
    }).join("");
};

playersDropdownList.addEventListener("change", (e) => {
    playerCards.innerHTML = "";

    switch (e.target.value) {
        case "nicknames":
            setPlayerCards(players.filter((player) => player.nickname !== null));
            break;
        case "forward":
            setPlayerCards(players.filter((player) => player.position === "Forward"));
            break;

        case "midfielder":
            setPlayerCards(players.filter((player) => player.position === "Midfielder"));
            break;
        case "defender":
            setPlayerCards(players.filter((player) => player.position === "Defender"));
            break;
        case "goalkeeper":
            setPlayerCards(players.filter((player) => player.position === "Goalkeeper"));
            break;
        default:
            setPlayerCards();
    }
})