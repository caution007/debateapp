import { Component }              from '@angular/core';
import { OnInit }                 from '@angular/core';
import { Router }                 from '@angular/router';

import { ClientService }          from '../client/client.service';

@Component({
    selector: 'login-component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    private conn;
    private socketId;
    username = '';

    constructor(private clientService: ClientService, private router: Router) {}

    ngOnInit() {
        this.clientService.connect();
        // this.conn = this.clientService.getSocketId().subscribe(socketId => {
        //     this.socketId = socketId;
        // })
    }

    // ngOnDestroy() {
    //     this.conn.unsubscribe();
    // } 

    createClient() {
        this.clientService.createClient(this.username);
        this.router.navigate(['/main']);
    }

    keypressHandler(event) {
        if(event.keyCode == 13) {
            this.createClient();
        }
    }
}