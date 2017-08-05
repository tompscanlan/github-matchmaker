from flask import Flask
import connexion
from connexion.resolver import RestyResolver


app = connexion.FlaskApp(__name__)
app.add_api('swagger.yml', resolver=RestyResolver('api'))


@app.route('/')
def default_landing():
    return 'See <a href="/v1/ui">swagger api</a> and try it <a href="v1/mock?seed=aaa">here</a>'

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')

