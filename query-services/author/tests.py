#!/usr/bin/env python

import os
import unittest
import re

from api import *

class TestCase(unittest.TestCase):

    def test_generate_empty_issue_query(self):
        p = re.compile(r"((repo:.*) ?)+")
        r = Repository()

        (output, rc) = r.generateIssueQuery()

        assert rc == 200
        m = p.match(output["query"])
        assert m.group()

if __name__ == '__main__':
    unittest.main()
