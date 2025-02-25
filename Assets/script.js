const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headcoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-card");
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
            nickname: "Sweeper Keeper"
        },
        {
            name: "Kevin Großkreutz", position: "Defender",
            number: 2,
            nickname: "N/A"
        },
        {
            name: "Matthias Ginter", position: "Defender",
            number: 3,
            nickname: "N/A"
        },
        {
            name: "Benedikt Höwedes", position: "Defender",
            number: 4,
            nickname: "N/A"
        },
        {
            name: "Mats Hummels", position: "Defender", number: 5,
            nickname: "N/A"
        },
        {
            name: "Sami Khedira", position: "Midfielder", number: 6,
            nickname: "N/A"
        },
        {
            name: "Bastian Schweinsteiger",
            position: "Midfielder", number: 7,
            nickname: "Schweini"
        },
        {
            name: "Mesut Özil",
            position: "Midfielder", number: 8,
            nickname: "The Assist King"
        },
        {
            name: "André Schürrle", position: "Forward", number: 9,
            nickname: "N/A"
        },
        {
            name: "Lukas Podolski", position: "Forward", number: 10,
            nickname: "Poldi"
        },
        {
            name: "Miroslav Klose", position: "Forward", number: 11,
            nickname: "Record Breaker"
        },
        {
            name: "Ron-Robert Zieler", position: "Goalkeeper", number: 12,
            nickname: "N/A"
        },
        {
            name: "Thomas Müller", position: "Forward", number: 13,
            nickname: "Raumdeuter"
        },
        {
            name: "Julian Draxler", position: "Midfielder", number: 14,
            nickname: "N/A"
        },
        {
            name: "Erik Durm", position: "Defender", number: 15,
            nickname: "N/A"
        },
        {
            name: "Philipp Lahm", position: "Defender", number: 16,
            nickname: "Magic Dwarf"
        },
        {
            name: "Per Mertesacker", position: "Defender", number: 17,
            nickname: "The Big Friendly Giant"
        },
        {
            name: "Toni Kroos", position: "Midfielder", number: 18,
            nickname: "Sniper"
        },
        {
            name: "Mario Götze", position: "Forward", number: 19,
            nickname: "Super Mario"
        },
        {
            name: "Jérôme Boateng", position: "Defender", number: 20,
            nickname: "N/A"
        },
        {
            name: "Shkodran Mustafi", position: "Defender", number: 21,
            nickname: "N/A"
        },
        {
            name: "Roman Weidenfeller", position: "Goalkeeper", number: 22,
            nickname: "N/A"
        },
    ],
};

Object.freeze(myFavouriteFootballTeam);
