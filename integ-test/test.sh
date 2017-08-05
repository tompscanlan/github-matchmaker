#!/bin/bash

cleanup () {
  docker-compose -p ci kill
  docker-compose -p ci rm -f
}

trap 'cleanup ; printf "Tests failed unexpectedly\n"' HUP INT QUIT PIPE TERM
docker-compose -p ci build && docker-compose -p ci up -d
if [ $? -ne 0 ] ; then
  printf "Docker Compose Failed\n"
  exit -1
fi
TEST_EXIT_CODE=`docker wait ci_integration-test_1`

docker logs ci_integration-test_1
if [ -z "${TEST_EXIT_CODE}" ] || [ "$TEST_EXIT_CODE" -ne 0 ] ; then
  printf "Tests Failed - Exit Code: $TEST_EXIT_CODE\n"
else
  printf "Tests Passed\n"
fi
cleanup
exit $TEST_EXIT_CODE
