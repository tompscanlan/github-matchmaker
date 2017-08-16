import json
import requests 

class Repository:

	
	
    def getStars(self,x):
        return {
           'low': '1..10',
           'medium': '10..100',
           'high': '>1000'
            }.get(x, '1..10')
		

    def generateIssueQuery(self, seed=""):

		
        stars = self.getStars(seed)
		

        data = []
        query_string ='https://api.github.com/search/repositories?q=stars:STARS'
        r = requests.get(query_string.replace("STARS",stars))
        result = r.json()
        for item in result["items"]:
            data.append("repo:%s" % item['full_name'])
        return json.dumps(dict(query=" ".join(data))), 200
		


class_instance = Repository()

