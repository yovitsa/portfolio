from flask import Flask, render_template, request, redirect, url_for, session, flash
import os

app = Flask(__name__)

# Secret key for session management
app.secret_key = os.urandom(24)

# Dummy user database (replace with a real database in production)
users = {
    "Jovica": "password123"
}

# Home Page
@app.route('/')
def home():
    username = session.get('username') 
    return render_template('index.html', username=username)
@app.route('/resume')
def resume():
    return render_template('resume.html')
# Login Page
# @app.route('/login', methods=['GET', 'POST'])
# def login():
#     if request.method == 'POST':
#         username = request.form['username']
#         password = request.form['password']

#         # Check if username exists and password matches
#         if username in users and users[username] == password:
#             session['username'] = username  # Store username in session
#             flash('Login successful!', 'success')
#             return redirect(url_for('dashboard'))
#         else:
#             flash('Invalid username or password', 'error')

#     return render_template('login.html')
# Login Page
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        # Check if username exists and password matches
        if username in users and users[username] == password:
            session['username'] = username  # Store username in session
            flash('Login successful!', 'success')
            return redirect(url_for('home'))  # Redirect to home (index.html)
        else:
            flash('Invalid username or password', 'error')

    return render_template('login.html')
# Dashboard Page (Protected Route)
# @app.route('/dashboard')
# def dashboard():
#     if 'username' in session:  # Check if user is logged in
#         return render_template('dashboard.html', username=session['username'])
#     else:
#         flash('You need to log in first', 'error')
#         return redirect(url_for('login'))
@app.route('/dashboard')
def dashboard():
    if 'username' in session:  # Check if user is logged in
        return redirect(url_for('home'))  # Redirect to home (index.html)
    else:
        flash('You need to log in first', 'error')
        return redirect(url_for('login'))
# Logout
@app.route('/logout')
def logout():
    session.pop('username', None)  # Remove username from session
    flash('You have been logged out', 'success')
    return redirect(url_for('home'))


if __name__ == '__main__':
    app.run(debug=True)