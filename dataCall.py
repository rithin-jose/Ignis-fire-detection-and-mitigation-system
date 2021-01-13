import requests
import datetime
import time
import config

def getTime():
    now = datetime.datetime.now() 
    print (now.strftime("%d-%m-%Y %H:%M:%S"))
    r = requests.get('https://api.openweathermap.org/data/2.5/weather?lat=11.646&lon=76.364&appid='+config.API_KEY)
    print(r.json())

  

starttime = time.time()
while True:
    getTime()
    time.sleep(900.0)