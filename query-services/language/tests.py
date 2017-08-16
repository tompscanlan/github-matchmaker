#!/usr/bin/env python

import os
import unittest
from api import *

class TestCase(unittest.TestCase):

    def test_generate_empty_issue_query(self):
        l = Language()
        assert l.generateIssueQuery() == ({'query': ''}, 200)

    def test_generate_text_issue_query(self):
        l = Language()
        assert l.generateIssueQuery("text") == ({'query': 'language:text'}, 200)


if __name__ == '__main__':
    unittest.main()
