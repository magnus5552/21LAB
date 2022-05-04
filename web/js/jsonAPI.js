async function backup () {
    json_data = await eel.take_from_json ()();
    parse_string = JSON.parse(json_data);
    for (var name in parse_string) {
        for (index in parse_string[name]) {
            var data = parse_string[name][index];
            if (index != "0") {
                adrow(name, index);
            }
            window[name + "_rows_count"] = Number(index);
            update_data (name, index, data);
        }
    }
    add_menu();
};

backup();
