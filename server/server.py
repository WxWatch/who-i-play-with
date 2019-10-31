import random
import json
import os

import cassiopeia as cass

from flask import Flask, request
app = Flask(__name__)


# Get Environmental Variables
#API_KEY = os.getenv('RIOT_API_KEY')
#cass.set_riot_api_key(API_KEY)

@app.route('/')
def hello_world():
	return 'Hello, World!'

@app.route('/data', methods=['GET'])
def get_data():
	summoner = request.args.get('summoner')
	region = request.args.get('region')

	cass.set_default_region(region)
	player_counts = dict()
	summoner = cass.get_summoner(name=summoner)

	print("Beginning match history parsing...")

	for match in summoner.match_history:
	    for participant in match.participants:
	        summoner_name = participant.summoner.name
	        if (summoner_name == summoner):
	            continue

	        player_counts[summoner_name] = player_counts.get(summoner_name, 0) + 1

	print("Match history parsing complete...")
	print("Saving data.json...")

	#with open('data.json', 'w') as fp:
	#    json.dump(player_counts, fp)

	player_counts = {k: v for k, v in sorted(player_counts.items(), key=lambda x: x[1], reverse=True)}

	print("Finished writing to data.json")
	return json.dumps(player_counts)