import json

class Mock:
    query = ""

    def generateIssueQuery(self, seed=""):
        self.query = seed
        return json.dumps(dict(query=self.query)), 200

class_instance = Mock()

