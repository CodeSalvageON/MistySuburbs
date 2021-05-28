const game_text = document.getElementById("game-text");
const command_input = document.getElementById("command-input");
const blip_sound = document.getElementById("blip");
const saw_sound = document.getElementById("saw");
const help_list = `
help - gets a list of commands.
chat - allows you to chat. (Example: "chat hello" would broadcast hello to the server for all to see.)
change_username - Changes your username if your username is set to null.
north - makes your character go north.
south - makes your character go south.
east - makes your character go east.
west - makes your character go west.
show_sector - shows your current position.
use - use an item, weapon, etc. (Example: "use pistol" would make your character use their pistol (if they had one) on the nearest hostile animal, player, or npc.)
inventory - shows your inventory.
reload - reloads the weapon your character is holding if the weapon in question uses projectiles.
describe - describe another player in your area. (Example: "describe player 1" would describe the first player in your area.)
build - build a structure, shelter, or defense. (Example: "build trench", "build tent", "build wall", "build phone_booth", "build bench", "build factory", "build mansion", "build house")
craft - build weapons, tools, and armor.
take - take an item. (Example: "take apple" would take whatever item was named "apple" in your current sector. However, if there all multiple items with the same name "apple" in your sector, it would take the first item named "apple" in your current sector. "take all" would take all items in your current sector.)
drop - drop an item. (Example: "drop apple" would drop whatever item was named "apple" in your inventory. However, if there are multiple items with the same name "apple", it would drop the first item named "apple" in your inventory.)
chat - allows for chatting with other players. (Example: "chat hi" would message hi to all other players.)
kill - kill animals, other players, and npcs in your area. (Example: "kill player 1" would make your character attempt to kill the first player in your area with whatever weapon they have. If you don't have a weapon, your character will simply use their body.)
get_health - shows you your current health.
get_sector - shows you the sector you are currently in.
`;

let choosing_username = false;
let chatroom_save_slot = "";