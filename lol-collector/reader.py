import json

player_counts = dict()

with open('data.json', 'r') as fp:
    player_counts = json.load(fp)
    
player_counts = {k: v for k, v in sorted(player_counts.items(), key=lambda x: x[1], reverse=True)}

print(player_counts)