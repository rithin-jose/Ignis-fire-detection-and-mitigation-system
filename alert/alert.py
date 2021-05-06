from twilio.rest import Client
from dotenv import dotenv_values

config = dotenv_values(".env")
SID = config['SID']
Token = config['Token']

account_sid = SID
auth_token = Token
client = Client(account_sid, auth_token)

message = client.messages.create(
                              body='Smoke and fire detected at cam 0',
                              from_='+17855041565',
                              to='+917012434015'
                          )
print(message.sid)