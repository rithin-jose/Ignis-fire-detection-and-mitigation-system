from twilio.rest import Client
from dotenv import dotenv_values
import json

config = dotenv_values(".env")
SID = config['SID']
Token = config['Token']
Service = config['Service']

account_sid = SID
auth_token = Token
NOTIFY_SERVICE_SID = Service
client = Client(account_sid, auth_token)

notification = client.notify.services(NOTIFY_SERVICE_SID).notifications.create(
    to_binding=[
      json.dumps({'binding_type': 'sms', 'address': '+917012434015'}),
      json.dumps({'binding_type': 'sms', 'address': '+918078493452'}),
      json.dumps({'binding_type': 'sms', 'address': '+917907504373'}),
      json.dumps({'binding_type': 'sms', 'address': '+918075876208'}),
      ],
    body="Fire detected at cam 0"
)
print(notification)