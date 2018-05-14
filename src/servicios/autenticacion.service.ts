import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

export class AutenticacionService{
    
    constructor(private http: HttpClient) { }

    login(email: string, password: string) {
        return this.http.post<any>('http://localhost/loginExample/src/rest/login.php', { email: email, password: password })
            .map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            });
    }

    terminarSesion() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

}