
class Language:
    query = ""

    def generateIssueQuery(self, seed=""):
        if seed != "":
            query = "language:%s" % seed
        else:
            query = ""

        return dict(query=query), 200

class_instance = Language()

