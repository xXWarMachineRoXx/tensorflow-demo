from flask import Flask,jsonify,request
from flask_cors import CORS

import json
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
def dynamic_page():
    
    import cat
    args=request.args
    print("="*len("2023-01-10 16:33:26.709008: I tensorflow/core/platform/cpu_feature_guard.cc:193] This TensorFlow binary is optimized"))

    Text=args.get('Text')
    Tags=args.get('Tags')
    print(args)
    if(type(Text)!=type(" ") or type(Tags)!=type(" ")):

        print('\nBad Request\n')
        return "Bad Request"

    print('received request : ',"Text :" ,Text, "Tags",Tags)
    return jsonify(cat.categorize(Text,Tags))
    

if __name__ == "__main__":
    app.run(port=8001, debug=True)