#!/usr/bin/env python

import os
import re
import unittest
from api import *

class TestCase(unittest.TestCase):

    def test_generate_empty_issue_query(self):
        l = Pain()
        (output, rc) = l.generateIssueQuery()
        assert output["query"] == ""
        assert rc == 200

    def test_generate_level_issue_query(self):
        p = re.compile(r"comments")

        l = Pain()
        (output, rc) = l.generateIssueQuery(seed="high")
        assert rc == 200
        m = p.match(output["query"])
        assert m.group()

        (output, rc) = l.generateIssueQuery(seed="medium")
        assert rc == 200
        m = p.match(output["query"])
        assert m.group()


if __name__ == '__main__':
    unittest.main()
