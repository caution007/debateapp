import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Injectable }    from '@angular/core';
import * as io from 'socket.io-client';

import { Client } from './client';

@Injectable()
export class ClientService {
    private url = 'http://localhost:5000';  
    private socket = null;

    private client = new Client();

    connect () {
        this.socket = io(this.url);     
    }

    // getSocketId() {
    //     let obsrv = new Observable(obsrv => {
    //         this.socket.on('socket-id', (data) => {
    //             obsrv.next(data);
    //         });
    //     });

    //     return obsrv;
    // }

    createClient(username) {
        this.client.setName(username);
        this.client.setIsAuthed(true);
        this.client.setId(this.socket.id);  
        this.socket.emit('client-connect', this.client.getName());
        console.log(this.client);
    }

    getAuthentication() {
        return this.client.getIsAuthed();
    }

    sendMsg(msg) {
        let list = [msg, this.client.getName()];
        this.socket.emit('send-msg', list);
    }

    retrieveClientList() {
        this.socket.emit('retrieve-clients');
    }

    recieveClientList() {
        let obsrv = new Observable(obsrv => {
            this.socket.on('client-list', (data) => {
                obsrv.next(data);
            });
        });
        return obsrv;
    }

    observableMethod(msg) {
        let obsrv = new Observable(obsrv => {
            this.socket.on(msg, (data) => {
                obsrv.next(data);
            });
        });
        return obsrv;
    }
}