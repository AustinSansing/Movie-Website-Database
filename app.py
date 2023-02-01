from ensurepip import bootstrap
from flask import Flask, render_template
from flask_bootstrap5 import Bootstrap

app = Flask(__name__)
bootstrap = Bootstrap(app)

@app.route('/')
def homepage():
    return render_template("home.html")


if __name__ == '__main__':
    app.run(debug=True)
