# github-matchmaker

A project to help you pick a github project to contribute to.  Also, you can contribute to this one :)

Proposed as a [VMware](http://www.vmware.com) Borathon project.



## A loose direction:

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

