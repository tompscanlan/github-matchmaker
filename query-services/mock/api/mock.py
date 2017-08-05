
class Mock:
    query = ""
    def __init__(self, seed=""):
        if seed:
            self.query = seed

    def generateIssueQuery(self):
        return self.query

class_instance = Mock()

