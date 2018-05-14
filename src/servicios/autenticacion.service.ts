
import { Observable } from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map'

export class AutenticacionService{
    
    constructor(public http: HttpClient) {
        console.log('Hello RestServiceProvider Provider');
      }

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