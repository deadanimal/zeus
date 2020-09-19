import logging
import os
import signal
import time

import uvloop
import asyncio
import gmqtt

import boto3
import uuid
import datetime

import json

from send_email import send_email

asyncio.set_event_loop_policy(uvloop.EventLoopPolicy())
STOP = asyncio.Event()

import time

AWS_ACCESS_KEY_ID = '6BOODC7OGS27MFQX2Q5C'
AWS_SECRET_ACCESS_KEY = 'J01iOvZxY7V9ZMOw346lbp4QrSQPAf4JUQ4jsEBEjmQ'
AWS_STORAGE_BUCKET_NAME = 'pipeline-project'
AWS_S3_REGION_NAME = 'sgp1'
AWS_S3_ENDPOINT_URL = 'https://sgp1.digitaloceanspaces.com'

# GLOBAL
global_boss = []
global_shashi = []
global_answar = []
delta_arr_boss = []

# SB start

# session = boto3.session.Session()
s3 = boto3.client('s3',
        region_name=AWS_S3_REGION_NAME,
        endpoint_url=AWS_S3_ENDPOINT_URL,
        aws_access_key_id=AWS_ACCESS_KEY_ID,
        aws_secret_access_key=AWS_SECRET_ACCESS_KEY)

#bucket = client.get_bucket(AWS_STORAGE_BUCKET_NAME)                        

def send_data(data_object):
    file_path = "zeus/mqtt/" + str(int(time.time())) + '.json' #+ "-" + uuid.uuid4().hex + 
    #file_path = datetime.datetime.utcnow().strftime("%s") + "-" + uuid.uuid4().hex + '.json'
    # print(file_path)
    file_object = data_object

    s3.put_object(Bucket='pipeline-project', Key=file_path, Body=data_object, ACL='public-read')
    # s3.put_object(Bucket='pipeline-project', Key=file_path, Body=(bytes(json.dumps(file_object).encode('UTF-8'))), ExtraArgs={'ACL':'public-read'})
    # obj_.put(Body='lol')
    # .put_object(
    #     Key = file_path,
    #     Body = 'lol'
    #     #Body = json.dumps(file_object)
    # )
# SB end


def on_connect(client, flags, rc, properties):
    message_ = '[CONNECTED {}]'.format(client._client_id)
    send_email(['syafiqbasri@pipeline.com.my'], 'Zeus Client Connected', message_)
    #logging.info('[CONNECTED {}]'.format(client._client_id))


def on_message(client, topic, payload, qos, properties):
    message_ = '[RECV MSG {}] TOPIC: {} PAYLOAD: {} QOS: {} PROPERTIES: {}'.format(client._client_id, topic, payload, qos, properties)
    current_time = int(time.time())

    bolt_boss = 'bolt-008/current/'
    bolt_shashi = 'bolt-002s/current/'
    bolt_anwar = 'bolt-003/current/'
    maevi_boss = 'maevi/meazon/102.301.000784'

    # print(topic, payload)

    if topic == maevi_boss:
        # print(payload)
        decoded_payload = (payload.decode("utf-8"))
        ready_data = {
            'device': topic,
            'data': decoded_payload
        }

        print(ready_data)
        file_path = 'lol/' + str(int(time.time())) + '.json'
        with open(file_path, 'w') as outfile:
            json.dump(ready_data, outfile)
        #send_data(json.dumps(ready_data))


def in_depth():
    cummu_delta = sum(delta_arr_boss)
    print('ni cummulative', cummu_delta)
    if cummu_delta > 2300 and cummu_delta < 2400:
        print('AC Cassete on lah ni')
    elif cummu_delta > 2000 and cummu_delta < 2300:
        print('Deep Fryer on lah ni')
    elif cummu_delta > 1000 and cummu_delta < 1400:
        print('AC Wall on lah ni')
    elif cummu_delta > 1500 and cummu_delta < 1600:
        print('Vacuum on lah ni')
    elif cummu_delta > 1200 and cummu_delta < 1300:
        print('Induction Cooker on lah ni')
    elif cummu_delta > 900 and cummu_delta < 1000:
        print('Microwave on lah ni')
    elif cummu_delta > 700 and cummu_delta < 750:
        print('Toaster on lah ni')
    elif cummu_delta > 300 and cummu_delta < 310:
        print('Blender on lah ni')
    elif cummu_delta > 100 and cummu_delta < 160:
        print('Dryer on lah ni')
    
    delta_arr_boss.clear()


def on_disconnect(client, packet, exc=None):
    message_ = '[DISCONNECTED {}]'.format(client._client_id)
    send_email(['syafiqbasri@pipeline.com.my'], 'Zeus Client Disconnected', message_)
    #logging.info('[DISCONNECTED {}]'.format(client._client_id))


def on_subscribe(client, mid, qos, properties):
    message_ = '[SUBSCRIBED {}] QOS: {}'.format(client._client_id, qos)
    send_email(['syafiqbasri@pipeline.com.my'], 'Zeus Client Subscribed', message_)
    #logging.info('[SUBSCRIBED {}] QOS: {}'.format(client._client_id, qos))


def assign_callbacks_to_client(client):
    client.on_connect = on_connect
    client.on_message = on_message
    client.on_disconnect = on_disconnect
    client.on_subscribe = on_subscribe


def ask_exit(*args):
    STOP.set()


async def main(broker_host, broker_port, token):
    # initiate first client subscribed to TEST/SHARED/# in group mytestgroup
    sub_clientA = gmqtt.Client("clientgonnasubA")

    assign_callbacks_to_client(sub_clientA)
    sub_clientA.set_auth_credentials(token, None)
    await sub_clientA.connect(broker_host, broker_port)

    sub_clientA.subscribe('#')

    # initiate second client subscribed to TEST/SHARED/# in group mytestgroup
    sub_clientB = gmqtt.Client("clientgonnasubB")

    assign_callbacks_to_client(sub_clientB)
    sub_clientB.set_auth_credentials(token, None)
    await sub_clientB.connect(broker_host, broker_port)

    sub_clientB.subscribe('bolt-008/#')

    """
    # this client will publish messages to TEST/SHARED/... topics
    pub_client = gmqtt.Client("clientgonnapub")

    assign_callbacks_to_client(pub_client)
    pub_client.set_auth_credentials(token, None)
    await pub_client.connect(broker_host, broker_port)

    # some of this messages will be received by client sub_clientA,
    # and another part by client sub_clientB, approximately 50/50
    for i in range(100):
        pub_client.publish('TEST/SHARED/{}'.format(i), i, user_property=('time', str(time.time())))

    """

    await STOP.wait()
    #await pub_client.disconnect()
    await sub_clientA.disconnect(session_expiry_interval=0)
    await sub_clientB.disconnect(session_expiry_interval=0)


if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    logging.basicConfig(level=logging.INFO)

    host = '163.47.11.245'
    port = 1883
    token = os.environ.get('TOKEN', 'fake token')

    loop.add_signal_handler(signal.SIGINT, ask_exit)
    loop.add_signal_handler(signal.SIGTERM, ask_exit)

    loop.run_until_complete(main(host, port, token))


def send_data(data_object):
    file_path = "zeus/mqtt/" + str(int(time.time())) + '.json' #+ "-" + uuid.uuid4().hex + 
    #file_path = datetime.datetime.utcnow().strftime("%s") + "-" + uuid.uuid4().hex + '.json'
    # print(file_path)
    file_object = data_object

    s3.put_object(Bucket='pipeline-project', Key=file_path, Body=data_object, ACL='public-read')
    #s3.put_object(Bucket='pipeline-project', Key=file_path, Body=(bytes(json.dumps(file_object).encode('UTF-8'))), ExtraArgs={'ACL':'public-read'})
    #obj_.put(Body='lol')
    # .put_object(
    #     Key = file_path,
    #     Body = 'lol'
    #     #Body = json.dumps(file_object)
    # )
# SB end


def on_connect(client, flags, rc, properties):
    message_ = '[CONNECTED {}]'.format(client._client_id)
    send_email(['syafiqbasri@pipeline.com.my'], 'Zeus Client Connected', message_)
    #logging.info('[CONNECTED {}]'.format(client._client_id))


# def on_message(client, topic, payload, qos, properties):
#     message_ = '[RECV MSG {}] TOPIC: {} PAYLOAD: {} QOS: {} PROPERTIES: {}'.format(client._client_id, topic, payload, qos, properties)
#     current_time = int(time.time())

#     bolt_boss = 'bolt-008/current/'
#     bolt_shashi = 'bolt-002s/current/'
#     bolt_anwar = 'bolt-003/current/'

    # if topic == bolt_shashi or topic == bolt_boss or topic == bolt_anwar:
    #     # print('Topic: {}: Payload: {}'.format(topic, payload))
    #     values = (payload.decode("utf-8")).split(",")

    #     if len(values) > 1:
    #         data = (float(values[0]) + float(values[1]) + float(values[2]))*240
    #     else:
    #         data = float(values[0]) * 240

    #     if topic == bolt_boss:
    #         device = 'bolt-008'

    #         if len(global_boss)<5:
    #             if data != 0:
    #                 global_boss.append(data)
    #         else:
    #             if data != 0:
    #                 global_boss.pop(0)
    #                 global_boss.append(data)
            
    #         item_length = len(global_boss)
    #         if item_length==1:
    #             delta = global_boss[0]
    #         else:
    #             delta = global_boss[item_length-1] - global_boss[item_length-2]
            
    #         if delta != 0:
    #             print(" time:",current_time, "delta", delta)


    #         if delta > 3000 and delta < 3400:
    #             appliance_condition = '30293ddc-c001-48a1-8528-c6c7af1e0869'
    #             appliance_condition = 'ON'
    #             print('AC Cassette ON kot')
    #             if len(delta_arr_boss) == 0:
    #                 delta_arr_boss.append(delta)

    #         elif delta > 2500 and delta < 2800:
    #             appliance_condition = '66544aee-a139-48bb-8b59-1c3b3cbf6557'
    #             appliance_condition = 'ON'
    #             print('Deep Fryer ON kot')
    #             if len(delta_arr_boss) == 0:
    #                 delta_arr_boss.append(delta)
                    
    #         elif delta > 1700 and delta < 1800:
    #             appliance_condition = '569d27cc-3e31-4a82-a385-89401476fce4'
    #             appliance_condition = 'ON'
    #             print('AC Wall ON kot')
    #             delta_arr_boss.append(delta)
    #             if len(delta_arr_boss) == 0:
    #                 delta_arr_boss.append(delta)

    #         elif delta > 800 and delta < 870:
    #             appliance_condition = '845c4467-847a-48c2-8455-5c3e52d748da'
    #             appliance_condition = 'ON'
    #             print('Vacuum ON kot')
    #             if len(delta_arr_boss) == 0:
    #                 delta_arr_boss.append(delta)

    #         elif delta > 600 and delta < 650:
    #             appliance_condition = '7c368d67-f95a-4671-b3f8-959ecd843749'
    #             appliance_condition = 'ON'
    #             print('Toaster ON kot')
    #             if len(delta_arr_boss) == 0:
    #                 delta_arr_boss.append(delta)

    #         elif delta > 400 and delta < 460:
    #             appliance_condition = '80a25e65-485b-4826-9449-61f1bb6030f3'
    #             appliance_condition = 'ON'
    #             print('Induction Cooker ON kot')
    #             if len(delta_arr_boss) == 0:
    #                 delta_arr_boss.append(delta)

    #         elif delta > 300 and delta < 360:
    #             appliance_condition = '5ab81de0-c3ff-4b21-8967-17b272a31c8a'
    #             appliance_condition = 'ON'
    #             print('Blender ON kot')
    #             if len(delta_arr_boss) == 0:
    #                 delta_arr_boss.append(delta)

    #         elif delta > 1300 and delta < 700: ######
    #             appliance_condition = '7ffa78cc-11cd-471a-9537-5d9cf07c2797'
    #             appliance_condition = 'ON'
    #             print('Microwave ON kot')
    #             if len(delta_arr_boss) == 0:
    #                 delta_arr_boss.append(delta)
            
    #         # elif delta > 100 and delta < 200:
    #         #     appliance_condition = 'b1719f15-1fbb-4e80-97f9-f7dfcb188254'
    #         #     appliance_condition = 'ON'
    #         #     print('Dryer ON kot')
    #         #     if len(delta_arr_boss) == 0:
    #         #         delta_arr_boss.append(delta)

    #             ###############################################################################
    #         elif delta > -200 and delta < -100:
    #             appliance_condition = 'b1719f15-1fbb-4e80-97f9-f7dfcb188254'
    #             appliance_condition = 'OFF'
    #             # print('Dryer OFF')
    #         elif delta > -300 and delta < -200:
    #             appliance_condition = '5ab81de0-c3ff-4b21-8967-17b272a31c8a'
    #             appliance_condition = 'OFF'
    #             # print('Blender OFF')
    #         elif delta > -750 and delta < -700:
    #             appliance_condition = '7c368d67-f95a-4671-b3f8-959ecd843749'
    #             appliance_condition = 'OFF'
    #             # print('Toaster OFF')
    #         elif delta > -1300 and delta < -1000:
    #             appliance_condition = '80a25e65-485b-4826-9449-61f1bb6030f3'
    #             appliance_condition = 'OFF'
    #             # print('Induction Cooker OFF')
    #         elif delta > -1400 and delta < -1300:
    #             appliance_condition = '569d27cc-3e31-4a82-a385-89401476fce4'
    #             appliance_condition = 'OFF'
    #             # print('AC Wall OFF')
    #         elif delta > -1600 and delta < -1400:
    #             appliance_condition = '845c4467-847a-48c2-8455-5c3e52d748da'
    #             appliance_condition = 'OFF'
    #             # print('Vacuum OFF')
    #         elif delta > -2300 and delta <-2000:
    #             appliance_condition = '66544aee-a139-48bb-8b59-1c3b3cbf6557'
    #             appliance_condition = 'OFF'
    #             # print('Deep Fryer OFF')
    #         elif delta > -2500 and delta < -2300:
    #             appliance_condition = '30293ddc-c001-48a1-8528-c6c7af1e0869'
    #             appliance_condition = 'OFF'
    #             # print('AC Cassette OFF')
            

    #         if len(delta_arr_boss) > 0 and len(delta_arr_boss) < 5:
    #             if delta != 0:
    #                 print('nak append yang ni la:', delta)
    #                 delta_arr_boss.append(delta)

    #         elif len(delta_arr_boss) == 5:
    #             print('5')
    #             in_depth()
            
            
    #         # elif delta > -1900 and delta < -1400:
    #         #     appliance_condition = '7ffa78cc-11cd-471a-9537-5d9cf07c2797'
    #         #     appliance_condition = 'OFF'
    #         #     # print('Microwave OFF')
            
    #         #print(global_boss)
    #         #print(device, data)
    #     elif topic == bolt_anwar:
    #         device = 'bolt-003'

    #     elif topic == bolt_shashi:
    #         device = 'bolt-002s'

    #         if len(global_shashi)<5:
    #             global_shashi.append(data)
    #         else:
    #             global_shashi.pop(0)
    #             global_shashi.append(data)
    #         #print(global_shashi)

        
    #     #print(device, data)

    #     ready_data = {
    #         'device': device,
    #         'power': data,
    #         'time': current_time
    #     }
        
        
    #     send_data(json.dumps(ready_data))
        
    # Before
    # if topic == 'bolt-008/current/':
    #     print('Topic: {}, Payload: {}'.format(topic, payload))
    #     print(current_time)
    #     current_data = {
    #         "time": current_time,
    #         "data": payload
    #     }
    #     print('current: ', current_data)
        #send_data(payload) # send ni before this
        #send_data(current_data)
    # simpan data dalam object storage
    
    #logging.info('[RECV MSG {}] TOPIC: {} PAYLOAD: {} QOS: {} PROPERTIES: {}'.format(client._client_id, topic, payload, qos, properties))
