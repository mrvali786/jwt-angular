import {Injectable} from '@angular/core';
import {jwtDecode} from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class JwtUtilService {
  constructor() {
  }

  decodeToken(token: string): any {
    try {
      return jwtDecode(token);
    } catch (error) {
      console.log("Error while decoding the token")
    }
  }

  getFullNameFromToken(token: string): any {
    const decodedToken = this.decodeToken(token);
    if (decodedToken) {
      return decodedToken.fullName;
    }
  }

  getUserNameFromToken(token: string): any {
    const decodedToken = this.decodeToken(token);
    if (decodedToken) {
      return decodedToken.sub;
    }
  }

  getRoleFromToken(token: string): any {
    const decodedToken = this.decodeToken(token);
    if (decodedToken) {
      return decodedToken.role;
    }
  }

  getExpirationTimeFromToken(token: string): any {
    const decodedToken = this.decodeToken(token);
    if (decodedToken) {
      return decodedToken.exp;
    }
  }

  getUnitFromToken(token: string): any {
    const decodedToken = this.decodeToken(token);
    if (decodedToken) {
      return decodedToken.unit;
    }
  }

  isTokenExpired(token: string): boolean {
    const expDate = this.getExpirationTimeFromToken(token);
    const floorDate = Math.floor(Date.now() / 1000);
    if (expDate) {
      return expDate < floorDate;
    } else
      return false;
  }
}
