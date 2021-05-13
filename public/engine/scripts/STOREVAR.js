const game_text = document.getElementById("game-text");
const command_input = document.getElementById("command-input");
const blip_sound = document.getElementById("blip");
const help_list = `
help - gets a list of commands.
change_username - Changes your username if your username is set to null.
north - makes your character go north.
south - makes your character go south.
east - makes your character go east.
west - makes your character go west.
use - use an item, weapon, etc. (Example: "use pistol" would make your character use their pistol (if they had one) on the nearest hostile animal, player, or npc.)
reload - reloads the weapon your character is holding if the weapon in question uses projectiles.
describe - describe another player in your area. (Example: "describe player 1" would describe the first player in your area.)
build - build a structure, shelter, or defense.
craft - build weapons, tools, and armor.
drop - drop an item.
chat - allows for chatting with other players. (Example: "chat hi" would message hi to all other players.)
kill - kill animals, other players, and npcs in your area. (Example: "kill player 1" would make your character attempt to kill the first player in your area with whatever weapon they have. If you don't have a weapon, your character will simply use their body.)
get_health - shows you your current health.
get_hunger - shows you your current hunger.
get_hydration - shows you your current hydration level.
get_sector - shows you the sector you are currently in.
`;

let choosing_username = false;
let chatroom_save_slot = "";