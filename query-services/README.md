# Query Services

These services can be written in any language.  They must provide a REST interface
with an endpoint that allows GET with a url parameter of "seed", and returns a 
Github search query string.

The service should use the seed to modify the query result.  Various seeds 
can produce drasticly different results.  

The service should be named according to the type of query will be produced.
For example, the "pain" service is tasked with identifying pain levels of issues
based on experience with past issue conversations.  It could be human experience 
or be a trained neaural net that produces the responses.

These services should be able to stand alone.  They may keep state.

A future addition may allow for ranking produced results for training feedback 
into a "smart" service.
