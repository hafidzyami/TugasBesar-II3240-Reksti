import paho.mqtt.client as mqtt
import json
import random
import keyboard
import time

# MQTT broker details
broker = "mqtt.thingsboard.cloud"
port = 1883
topic = "v1/devices/me/telemetry"
username = "r4k685i8qmvrj1ahf6kk"

def get_humidity():
    """Generate a random humidity value."""
    if keyboard.is_pressed('q'):
        return random.uniform(71, 73)
    else:
        return random.uniform(33, 35)

# Define the MQTT client
client = mqtt.Client()

# Set the username for authentication
client.username_pw_set(username)

# Connect to the broker
client.connect(broker, port)

try:
    while True:
        # Generate a random humidity value based on key press
        humidity = get_humidity()

        # Create the payload
        payload = json.dumps({"humidity": humidity})

        # Publish the message with QoS 1
        result = client.publish(topic, payload)

        # Wait for the message to be sent
        result.wait_for_publish()

        # Print the published humidity for confirmation
        print(f"Published humidity: {humidity:.2f}")
        time.sleep(1)

except KeyboardInterrupt:
    print("Terminating the script.")

# Disconnect from the broker
client.disconnect()
