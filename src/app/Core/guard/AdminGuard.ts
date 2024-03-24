import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        const admin_access_token = localStorage.getItem('admin_access_token');
        if (!admin_access_token) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }
}