import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()

export class UserService {

  constructor(private http: HttpClient) {}

  is_User_LoggedIn() {
    return localStorage.getItem('token');
  }

  login(email: string, password: string) {
    return this.http.post<any>(
      'https://localhost:44388/api/users/login',
      {'Email': email, 'Password': password});
  }

  logOut(): void {
    localStorage.clear();
  }

  register = (user: any ) => {
    return this.http.post<any>(
      'https://localhost:44388/api/users/register',
      {'Email': user.email,
              'FullName': user.name,
              'Password': user.password,
              'Gender': user.gender
      }
    )
  }

  getAllUsersEmail = () => {
    return this.http.get('https://localhost:44388/api/users/GetAllUsersEmail');
  }
}
