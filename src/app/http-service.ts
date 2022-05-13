import { Injectable } from "@angular/core";
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { map, Observable, timeout } from "rxjs";

@Injectable()
export class AuthService {

    constructor(
        public http: HttpClient
    ) { }

   // login(email: string, password: string) {
  //      return this.http.post('/api/login', { email, password })
            // this is just the HTTP call, 
            // we still need to handle the reception of the token
  //          .shareReplay();
 ////   }



      login(email: string, password: string) : Observable<any> {
        let LoginFormObject = {
            'email':email,
            'password': password
           
        };
        return this.http.post<any>('https://z15tp3fcag.execute-api.us-east-1.amazonaws.com/CND-04/signin', LoginFormObject, { headers: this.getHeaderJson(), observe: 'response' })
          .pipe(timeout(4000), map(Response => {
            return Response;
          }));
      }
      getHeaderJson() {
        const contentHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': '*',
            "Access-Control-Allow-Credentials": "true",
            });
        return contentHeaders;
    }
  
}

