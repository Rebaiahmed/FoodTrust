import { Injectable } from '@angular/core';

import * as io from 'socket.io-client';
import { Observable, of } from 'rxjs';

const SERVER_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class RealTimeServiceService {

  constructor() {
    this.socket = io('http://localhost:3000');
  }


  private socket;

  public initSocket(): void {
      this.socket = io(SERVER_URL);
      console.log('socket' + this.socket);
  }


  public send(message: any): void {
    this.socket.emit('SEND_MESSAGE', message);
}

public onNotification(userid): Observable<any> {
    return new Observable<any>(observer => {
        this.socket.on('RECEIVE_Notifcation', (data: any) => observer.next(data));
    });
}


}
