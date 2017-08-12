import { Http, Headers, ResponseContentType, RequestOptionsArgs, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


export const ENDPOINT_API = 'https://api.github.com';

@Injectable()
export class DataService {

  constructor(private http: Http) {
  }

//   getWorkflowExecutionLogs(workflowId: string, executionId: string, logContext?: LogContext) {
//     const logsUrl = ENDPOINT_API + '/workflows/' + workflowId + '/executions/' + executionId + '/syslogs';
//     const ctx = logContext ? logContext : new LogContext();

//     // Extract to private helper method if more post occurrences are implemented
//     return this.http.post(logsUrl, ctx).map(response => response.status === 200 ? response.json() : Observable.throw(response))
//       .catch(error => Observable.throw(error));
//   }

  getRepositories() {
     return this.doGet(ENDPOINT_API + '/repositories');
    //return this.doGet("/repos/angular/angular.js/issues?state=open&sort=updated&page=1&per_page=100&assignee=*");
  }

  getRepo(repoId: string) {
    return this.doGet(ENDPOINT_API + '/repositories/' + repoId);
  }

  getIssues(issuesUrl: string) {
    let index = issuesUrl.lastIndexOf('{/number}');
    issuesUrl = issuesUrl.substring(0, index);
    return this.doGet(issuesUrl);
  }

  getIssuesForLanguage(language: string ) { //array of languages?
    let issuesUrl = ENDPOINT_API + '/search/issues?q=language:' + language +"+state:open";
    // doublecheck that this works
    return this.doGet(issuesUrl);
  }

  getIssueDetails(issueDetailsUrl: string) {
     return this.doGet(issueDetailsUrl);
  }

  private doPost(url: string, body?: any): Observable<any> {
    return this.http.post(ENDPOINT_API + url, body)
      .map(res => this.handleResponse(res))
      .catch(error => Observable.throw(this.handleResponse(error)));
  }

  private doGet(url: string, headers?: Object[]): Observable<any> {
    let reqOptions: RequestOptionsArgs;
    if (headers) {
      reqOptions = new RequestOptions();
      reqOptions.headers = new Headers(headers);
    }

    return this.http.get(url, reqOptions);
     //  .map(res => res.json());
  }

  private doPut(url: string, body: any): Observable<any> {
    return this.http.put(ENDPOINT_API + url, body)
      .catch(error => Observable.throw(error.json()));
  }

  private doPatch(url: string, body: any): Observable<any> {
    return this.http.patch(ENDPOINT_API + url, body)
      .catch(error => Observable.throw(error.json()));
  }

  private doDelete(url: string): Observable<any> {
    return this.http.delete(ENDPOINT_API + url);
  }

  private handleResponse(response: any): any {
    try {
      return response.json() || JSON.parse(response['_body']);
    } catch (jsonParseError) {
      return response;
    }
  }
}
