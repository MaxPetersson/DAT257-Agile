import random as r
import datetime as date
import json

#Time constants randomized for mockup usage
month = r.randrange(1,12)
day = r.randrange(1,31)
hour = r.randrange(0,24)
minute = r.randrange(0,59)

#Constants for different cities, harbours and ships to create mockup
cities = ["Gothenburg","Kiel","Frederikshavn","Fredrikstad","Aland","Stockholm"]
harbours = ["Masthuggskajen","Arendal","Ryahamnen","Skandiahamnen","Bilhamnen"]
ships = ["Jutlandica","Danica","Germanica","Vinga","Scandinavica","Fionia"]


def main_generator(input):
    file = open("mockup.txt","w")

    for i in range(input):
        month = r.randrange(1,12)
        day = r.randrange(1,20)
        hour = r.randrange(0,24)
        minute = r.randrange(0,59)
        departure = date.datetime(2019,month,day,hour,minute)
        hour = (hour + r.randrange(24)) % 24
        arrival = date.datetime(2019, month, day,hour, minute)
        dictionary = dict()
        dictionary["Origin"] = cities[r.randrange(6)]
        for city in cities:
            if city != dictionary.get("Origin"):
                dictionary["Destination"] = city
                break
        dictionary["oHarbour"] = harbours[r.randrange(5)]
        for harb in harbours:
            if harb != dictionary["oHarbour"]:
                dictionary["dHarbour"] = harb
                break
        dictionary["Ship"] = ships[r.randrange(len(ships))]
        dictionary["dTime"] = departure.strftime("%d/%m/%y %H:%M")
        dictionary["aTime"] = arrival.strftime("%d/%m/%y %H:%M")
        json.dump(dictionary,file)
        file.write("\n")
        # list = []
        # list.append(cities[r.randrange(6)])
        # for city in cities:
        #     if city != list[0]:
        #         list.append(city)
        #         break
        # list.append(harbours[r.randrange(5)])
        # for harb in harbours:
        #     if harb != list[2]:
        #         list.append(harb)
        #         break
        # list.append(ships[r.randrange(6)])
        # list.append(departure.strftime("%d/%m/%y %H:%M"))
        # list.append(arrival.strftime("%d/%m/%y %H:%M"))
        # json.dump(list,file)
        # file.write("\n")

main_generator(20)
