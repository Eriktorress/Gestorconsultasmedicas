import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AutenthicationService } from './autenthication.service';

@Injectable({
  providedIn: 'root'
})
export class AutService {
  constructor(
  public authenticationService:AutenthicationService,
  public router:Router
  ) { }
canActivate(): boolean {
  return this.authenticationService.isAuthenticated();
}
}