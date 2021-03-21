import flask

app = flask.Flask(__name__)


# app.config["DEBUG"] = True


@app.route('/', methods=['GET'])
def home():
    return """
        <h1>Distant Reading Archive</h1>
        <p>This site is a prototype API for distant reading of science fiction novels.</p>
        """


@app.route('/test', methods=['GET'])
def test():
    result = {
        'key1': 1,
        'key2': 2
    }
    return result


app.run()
