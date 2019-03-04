import random
import json

import cassiopeia as cass

cass.set_riot_api_key("")
cass.set_default_region("NA")

player_counts = dict()

summoner = cass.get_summoner(name="WxWatch")

print("Beginning match history parsing...")

for match in summoner.match_history:
    for participant in match.participants:
        summoner_name = participant.summoner.name
        if (summoner_name == "WxWatch"):
            continue

        player_counts[summoner_name] = player_counts.get(summoner_name, 0) + 1

print("Match history parsing complete...")
print("Saving data.json...")

with open('data.json', 'w') as fp:
    json.dump(player_counts, fp)

print("Finished writing to data.json")
