import os
import openai
import requests
# from typing import Dict
from flask import Flask, request, jsonify

openai.api_key = 'YOUR API KEY'
openai.Model.list()
# print(openai.Model.list())

response = openai.Completion.create(
  model="text-davinci-003",
  prompt="What's the color of sky?",
  temperature=0.9,
  max_tokens=1000,
  top_p=1,
  frequency_penalty=0,
  presence_penalty=0
)

print(response)


# app = Flask(__name__)

# headers = {'Authorization':f"Bearer {openai.api_key}"}
# data = {}