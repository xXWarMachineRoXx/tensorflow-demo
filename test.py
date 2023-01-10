from flask import Flask,jsonify
# import cat
import os
# from threading import Thread



app = Flask(__name__)
app.secret_key = os.urandom(42)


@app.route('/', methods=['GET'])
def home():
    return "Home"

@app.route('/flask', methods=['GET'])
def index():
    return "Flask server"

@app.route('/flask/cat',methods=['GET'])
def dynamic_page():
    
    import cat
    return cat.categorize()

if __name__ == "__main__":
    app.run(port=8001, debug=True)