import {clientId, secret, url, headers} from './settings.js'

//const header = new Headers({'Access-Control-Allow-Origin': '*'});

const myHeader = { method: 'GET',
               //headers: header,
               mode: 'no-cors',
             }

const helper = {
	authorize: (string) => {
		window.location.href = `https://www.reddit.com/api/v1/authorize?client_id=${clientId}&response_type=code&state=${string}&redirect_uri=${url}&duration=temporary&scope=mysubreddits`
	},
	token: (code) => {
			$.ajax({
			url: 'https://www.reddit.com/api/v1/access_token',
			dataType:'json',
			type:'POST',
			data: `grant_type=authorization_code&code=${code}&redirect_uri=${url}`
		})
	}

};

module.exports = helper;