const api_key = 'RGAPI-acc694bb-ec51-4779-8d67-0a108259f4a7'


const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class','container');

app.appendChild(container);

function myFunction() {
    
    var x = document.getElementById("mySearch").value;
    var request = new XMLHttpRequest();

    request.open('GET','https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + x + '?api_key=' + api_key,true)
    request.onload = function () {

        var data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
            
            const card = document.createElement('div');
            card.setAttribute('class','card');
            
            const h1 = document.createElement('h1');
            h1.textContent = x;
            
            const p = document.createElement('p');
            p.innerHTML = "<b>Summoner Level: </b>" + data.summonerLevel;
            
            container.appendChild(card);
            
            card.appendChild(h1);
            card.appendChild(p);
            
        }

    }
    
    request.send();
}

