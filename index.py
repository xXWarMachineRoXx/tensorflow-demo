from flask import Flask,jsonify,request
from flask_cors import CORS
import json

from form import Tensorform
# import cat
import os
# from threading import Thread


app = Flask(__name__)
app.secret_key = os.urandom(42)

CORS(app)
@app.route('/', methods=['GET'])
def home():
    return "Home"

@app.route('/flask', methods=['GET'])
def index():
   
   
    # return_json="{:^8} => " +args.get("Tags")+"\n\tText => "+args.get("Text")
    print("\n\nreceived request on /flask\n")
    return jsonify("Hello from flask , python is running!!")
    




@app.route('/flask/cat',methods=['POST'])
async def dynamic_page():
    content_type = request.headers.get('Content-Type')
   
    jsonData = request.get_json()

    print("\n"*1,"="*110)
    print("\n"*1,'received type:',content_type,"\n"*1,'Data :',jsonData)
   
    from cat import categorize
    Text=jsonData["Text"]
    Tags=jsonData["Tags"]
    if(type(Text)!=type(" ") or type(Tags)!=type(" ") or content_type!='application/json'):

        print('\nBad Request\n')

    return jsonify(categorize(Text,Tags))

   
  
    import cat

    print("="*len("2023-01-10 16:33:26.709008: I tensorflow/core/platform/cpu_feature_guard.cc:193] This TensorFlow binary is optimized"))
    return args
    print(args)
    

    

if __name__ == "__main__":
    app.run(port=8001, debug=True)