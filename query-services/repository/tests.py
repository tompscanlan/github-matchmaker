#!/usr/bin/env python

import os
import unittest
from api import *

class TestCase(unittest.TestCase):

    def test_generate_empty_issue_query(self):
        m = Mock()
        assert m.generateIssueQuery() == ('{"query": ""}', 200)

    def test_generate_text_issue_query(self):
        m = Mock()
        assert m.generateIssueQuery("text") == ('{"query": "text"}', 200)


if __name__ == '__main__':
    unittest.main()
