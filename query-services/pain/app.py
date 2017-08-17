from flask import Flask
import connexion
from connexion.resolver import RestyResolver
from flask.ext.cors import CORS

app = connexion.FlaskApp(__name__)
app.add_api('swagger.yml', resolver=RestyResolver('api'))
CORS(app.app)

@app.route('/')
def default_landing():
    return 'See <a href="/v1/ui">swagger api</a> and try it <a href="v1/pain?seed=high">here</a>'

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0', port=5003)

