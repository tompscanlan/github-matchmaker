
class Language:
    query = ""

    def generateIssueQuery(self, seed=""):
        query = "language:%s" % seed

        return dict(query=query), 200

class_instance = Language()

