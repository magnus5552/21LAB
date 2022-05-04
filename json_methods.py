import json
import eel

# rewtites, creates or deletes parameter in save.json
# deletes parameter if delete = True


@eel.expose
def send_to_json(name, index, data, delete=False):

    try:
        with open('web/js/save.json', 'a+') as file:
            file.seek(0, 0)
            try:
                parse_string = json.load(file)

            except:
                parse_string = {}

            if delete == True:
                parse_string[name].pop(index)
            else:
                try:
                    parameter = parse_string[name]
                    parameter.update({index: data})

                except:
                    parameter = {index: data}

                parse_string.update({name: parameter})

            file.close()

        with open('web/js/save.json', 'w+') as file:
            json.dump(parse_string, file, indent=4)

            file.close()

    except:
        print('Не удалось открыть файл')


@eel.expose()
def take_from_json():

    try:
        with open('web/js/save.json', 'r') as file:
            try:
                parse_string = json.load(file)
                data = json.dumps(parse_string)
                file.close()
                return data
            except:
                pass

    except:
        print('Не удалось открыть файл')

