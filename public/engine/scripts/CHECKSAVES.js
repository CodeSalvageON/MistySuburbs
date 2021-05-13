const save_state = localStorage.getItem("mistysuburbs-save-state");
const save_username = localStorage.getItem("mistysuburbs-save-username");
const save_sector_vertical = localStorage.getItem("mistysuburbs-save-sector-vertical");
const save_sector_horizontal = localStorage.getItem("mistysuburbs-save-sector-horizontal");
const save_inventory = localStorage.getItem("mistysuburbs-save-inventory");

$(document).ready(function () {
  if (save_state === "saved") {
    initSave();
  }

  else if (save_state === "" || save_state === null || save_state === undefined) {
    initWorld();
  }

  else if (save_state === "defect") {
    location.href = "https://youtu.be/gG4A8kxeLl4";
  }

  else {
    save_state = null;
  }
});