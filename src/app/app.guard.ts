import { Injectable }    from '@angular/core';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot, CanActivate } from '@angular/router';

import { ClientService } from './client/client.service';

@Injectable()
export class AppGuard implements CanActivate {
    constructor(
        private clientService: ClientService,
        private router: Router) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.clientService.getAuthentication()) {
            console.log('AUTH ACCEPTED');
            return true;
        } else {
            console.log('AUTH REJECTED');
            this.router.navigate(['/']);
            return false;
        }
    }
}