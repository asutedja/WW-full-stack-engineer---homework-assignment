# WW-full-stack-engineer---homework-assignment

I would like to preface this with the fact that I did not finish this project in the 6-8 hours supposedly provided.

The reddit API gave me a lot of trouble with its OAuth and having the option to save a state to ensure safe authorization.
Because I am not use to parsing data from urls not in the form of data/data1/data2, I had a lot of trouble scrambling to find a way to parse the state and code coming back from the reddit API.  I also realized later, that using Redis to store state data before asking for authorization would also be needed to persist the state data, though a pop-up for OAuth was another idea I had as well.

If I was able to get past this OAuth part, I would have the equivalent of r/all on the front page if the user had no configured subreddits.  In order to show updates for when a user added, removed, or edited a subreddit option, I would have each action update the user redux store to control what to render as I pull data from the reddit API.

This was a great learning experience for me.

