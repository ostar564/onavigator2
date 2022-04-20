from cgi import test
from datetime import datetime
from operator import ge
from xmlrpc.client import DateTime
from flask import Flask, redirect, url_for, render_template, request, session
from flask_session import Session
from flask_sqlalchemy import SQLAlchemy
#create flask object with file name
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'  #define connection string
app.config["SESSION_PERMANENT"] = True
app.config["SESSION_TYPE"] = "filesystem"
Session(app)
db = SQLAlchemy(app)  #define database


class Todo(db.Model):
    gender = db.Column(db.String(7))	
    date = db.Column(db.String(100))
    email = db.Column(db.String(200), primary_key=True)
    password = 	db.Column(db.String(200))
    first_name = db.Column(db.String(200))
    last_name = db.Column(db.String(200))
    def __repr__(self):
        return self.gender, self.date, self.email, self.password, self.first_name, self.last_name



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


@app.route('/signup', methods=['POST','GET'])
def signup():
    if session["name"] != None:
        return "You are already signed in"
    if request.method == 'POST':
        first_name = request.form['fname']
        last_name = request.form['lname']
        date = request.form['date']
        email = request.form['email']
        password = request.form['pass']
        gender = request.form['gender']

        new_task = Todo(gender = gender, date = date, email = email, password = password, first_name = first_name, last_name = last_name)
        try:
            db.session.add(new_task)
            db.session.commit()
            return redirect('/login')
        except:
            return 'There was an issue adding your new task to db!!'
    elif request.method == 'GET':
        return render_template('signup.html')

@app.route('/login', methods=['POST','GET'])
def login():
    if session["name"] != None:
        return "You are already signed in"
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['pass']
        user_data = Todo.query.filter_by(email = email).first()
        if user_data is None:
            return 'Email does not exist'
        if user_data.password == password:
            session["name"] = user_data.first_name
            return redirect('/mappage')
        else:
            return 'not correct password'
    elif request.method == 'GET':
        return render_template('login.html')

@app.route("/logout")
def logout():
    session["name"] = None
    return redirect("/homepage")


#This code run when this file is call but not when it imported by other file
if __name__== "__main__":
    #start running the web page
    app.run(debug=True)
