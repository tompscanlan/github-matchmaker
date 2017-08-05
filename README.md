# github-matchmaker

A project to help you pick a github project to contribute to.  Also, you can contribute to this one :)

Proposed as a [VMware](http://www.vmware.com) Borathon project by team who-has-free-time.


## Description
Sometimes we have got a bit of free time, and would love to help a small
project fix issues or add features.
If we could identify a high visibility issue that
* could be completed in our allotted time frame
* matches our skill level
* is in a specific language or technology area

then we would be more likely to submit patches that have a big impact
to an existing project.

I envision enabling a search of github issues to 
help learn indicators of 
* project criticality (kubernetes vs cowsay) 
* pain level the issue is at (number of people having issue, discussing it, thumbs up?) 
* estimation of difficulty level of the code change (tags on issues may help, may be other indicators, like someone claiming it "should be easy" in the discussion) 
* Once some data has been collected, maybe we can identify searches that will select issues meeting our needs, and we can wrap the github search to arrive at the desired set. 
* possibly enabling personal ranking of found issues to influence the engine and your own resulting searches

## Outcomes
* Prevent project sprawl by helping to ID code repositories doing things you are interested in. 
* give best bang for your contribution 
* enable low skill coders to contribute to projects that may not be tagged in a way to facilitate contributions 
* allow experimentation in a language you would like to learn 
* allow scratching the code itch without starting a whole new project

## A loose direction

* look into ways to generate github search terms to find issues based on
  *  language
  * repository visibility
  * level of pain of the issue
  * available time commitment (level of difficulty of the fix)

That indicates a UI that we can enter those preferences into,
to generate the right search.  Submit it to github,
display resulting issues (or repositories) that match best.
[Clarity Seed](https://github.com/vmware/clarity-seed) is probably the starting point.

There must be some data used to create search terms that lead to the right kind of issues.  This is probably some trained NN that we create before starting the app, that is loaded at runtime.

feature? Allow thumbs-up or down on matches, store data and use it when training the NN, or to train the running system.

This may be how we initially train it... run searches, rank thumbs up/down, store results, train, search, rank, train....?



## Testing
Tested on a mac, but real requirement is docker-compose.

```
# git clone this repo

git clone https://github.com/tompscanlan/github-matchmaker
cd github-matchmaker/integ-test/
./test.sh

```

