
class Pain:
    query = ""

    def generateIssueQuery(self, seed=""):
        if seed == "high":
            query = "comments:>30 critical in:comments"
        elif seed == "medium":
            query = "comments:5..30 hurts in:comments"
        else:
            query = ""

        return dict(query=query), 200

class_instance = Pain()

