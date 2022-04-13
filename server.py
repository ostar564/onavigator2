from flask import Flask, redirect, url_for, render_template, request
#create flask object with file name
app = Flask(__name__)

#route index page to root of web site
@app.route('/homepage', methods=['GET', 'POST'])
def homepage():
    if request.method == 'POST':
        return 'you requested a POST'
    elif request.method == 'GET':
        return render_template('homepage.html')

@app.route('/mappage', methods=['POST','GET'])
def mappage():
    
    if request.method == 'POST':
        return 'you requested a POST'
    elif request.method == 'GET':
        return render_template('mappage.html')

@app.route('/', methods=['GET', 'POST'])
def start():
    if request.method == 'POST':
        return 'you requested a POST'
    elif request.method == 'GET':
        return render_template('homepage.html')

#This code run when this file is call but not when it imported by other file
if __name__== "__main__":
    #start running the web page
    app.run(debug=True)
