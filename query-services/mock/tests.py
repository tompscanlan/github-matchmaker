import os
import unittest
from api import *

class TestCase(unittest.TestCase):

    def test_generate_empty_issue_query(self):
        m = Mock()
        assert m.generateIssueQuery() == ""

    def test_generate_text_issue_query(self):
        m = Mock("text")
        assert m.generateIssueQuery() == "text"


if __name__ == '__main__':
    unittest.main()
