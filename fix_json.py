import json

# Load the JSON file
with open('src/data/osho_cards.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Fix the last card's commentary by removing the "L'auteur" section
if "\n\n\n\n# L'" in data[-1]['commentary']:
    data[-1]['commentary'] = data[-1]['commentary'].split("\n\n\n\n# L'")[0]
    print("Fixed: Removed 'L'auteur' section from last card commentary")
else:
    print("No fix needed or pattern not found")

# Save the fixed JSON
with open('src/data/osho_cards.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("JSON file updated successfully!")
