from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html")


# @app.route("/info")
# def info():
#     return render_template("info.html", title="Info")


@app.route("/login")
def login():
    return render_template("login.html", title="Login")


if __name__ == "__main__":
    app.run(debug=True)
