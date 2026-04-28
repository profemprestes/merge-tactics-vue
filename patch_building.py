import re

with open("src/components/SelectionTabs.vue", "r") as f:
    content = f.read()

# Add 'Building' to rowRoles
content = content.replace(
    "const rowRoles = ['Noble', 'Clan', 'Goblin', 'Undead', 'Fire', 'Titan', 'Ace'];",
    "const rowRoles = ['Noble', 'Clan', 'Goblin', 'Undead', 'Fire', 'Titan', 'Ace', 'Building'];"
)

with open("src/components/SelectionTabs.vue", "w") as f:
    f.write(content)
