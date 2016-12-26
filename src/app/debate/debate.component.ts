import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';

//import { DebateService } from './client/client.service';

@Component ({
    selector: 'debate-component',
    templateUrl: './debate.component.html',
    styleUrls: ['./debate.component.css']
})
export class DebateComponent {
    replies = [];
    conn;
    reply;

    // constructor(private debateService: DebateService) {}

    // ngOnInit() {
    //     // this.conn = this.debateService.getReplies().subscribe(reply => {
    //     //     this.replies.push(reply[1] + ": " + reply[0]);
    //     // })
    // }

    // sendReply() {
    //     this.debateService.sendReply(this.reply);
    //     this.reply = '';
    // }

    // ngOnDestroy() {
    //     this.conn.unsubscribe();
    // } 
}

