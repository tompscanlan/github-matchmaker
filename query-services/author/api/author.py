import requests
import operator

class Author:
    query = ""
    def generateIssueQuery(self, seed):
        languages_count = dict()
        query_string = 'https://api.github.com/users/AUTHOR/repos'
        r = requests.get(query_string.replace('AUTHOR', seed))
        result = r.json()
        for language in result:
            if language['language'] in languages_count:
                languages_count[language['language']] += 1
            else:
                languages_count[language['language']] = 1
        # lang = max(languages_count.iteritems(), key=operator.itemgetter(1))[0]
        sorted_languages_count = sorted(languages_count.items(), key=operator.itemgetter(1))
        if sorted_languages_count[-1][0] == None:
            return dict(query=sorted_languages_count[-2][0]), 200
        return dict(query=sorted_languages_count[-1][0]), 200

class_instance = Author()

