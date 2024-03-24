import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class JobFeedGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        const applicant_access_token = localStorage.getItem('applicant_access_token');
        if (!applicant_access_token) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }
}