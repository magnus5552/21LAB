import eel
import counting as ct
import json

import json_methods

eel.init("C:\\Users\\Степа\\Desktop\\eel\\web")

# function that takes values from cells and count values of parameters
# returns list of counted parameters


@eel.expose
def schet(list_input, class_name):
    print("connected", list_input)

    list_prepared = [
        '1' if row == '' or row == ""
        else row
        for row in list_input
    ]

    values = ct.functions[class_name](list_prepared)

    return [str(value) for value in values.names()]


eel.start("index.html#one", port=8000, host="localhost", size=(1500, 500))
