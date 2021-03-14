import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { EVENTSDATA } from '../models/events-data';
import { Event } from '../models/event';
import { EventResponse } from '../models/event-response';
import { DebugService } from './debug.service';
declare let require: any;
const Web3 = require('web3');

@Injectable()
export class EtherscanService {

  private apiKey = environment.ETHERSCAN_API;
  private apiUrl: Array < string > = ["https://api-ropsten.etherscan.io/api?module=logs&action=getLogs&fromBlock=", "&toBlock=latest&address=", "&topic0=", "&apikey="];
  private txUrl: string = "https://ropsten.etherscan.io/tx/";
  private web3;
  constructor(private http: HttpClient, private debugService: DebugService) {
    this.web3 = new Web3();
  }

  getEventData(data): Observable < any > {
    let url = this.apiUrl[0] + data[0] + this.apiUrl[1] + data[1] + this.apiUrl[2] + data[2] + this.apiUrl[3] + this.apiKey;
    return this.http.get < any > (url).pipe(
      tap(events => this.log(`fetched events`)),
      catchError(this.handleError('getEventData', []))
    );
  }

  getEvents(): Observable < Event[] > {
    return of(EVENTSDATA);
  }

  processElections(data): Array < EventResponse > {
    console.log(data);
    var logArray: EventResponse[] = [];
    for (var i = 0; i < data.result.length; i++) {
      var obj: EventResponse = new EventResponse();
      obj["tx"] = this.txUrl + data.result[i].transactionHash;
      obj["date"] = this.timeConverter(this.web3.utils.hexToNumber('0x' + data.result[i].data.substring(122, 132)));
      obj["electionID"] = data.result[i].data.substring(63, 66);
      obj["timestamp"] = this.timeConverter(this.web3.utils.toDecimal(data.result[i].timeStamp));
      logArray.push(obj);
    }
    return logArray;
  }

  processRole(data): Array < EventResponse > {
    console.log(data);
    var logArray: EventResponse[] = [];
    for (var i = 0; i < data.result.length; i++) {
      var obj: EventResponse = new EventResponse();
      obj["tx"] = this.txUrl + data.result[i].transactionHash;
      obj["registeredAddr"] = '0x' + data.result[i].topics[2].substring(26, 66);
      obj["role"] = data.result[i].topics[1];
      if(obj["role"] == EVENTSDATA[1].voter){
          obj["voter"] = true;
      } else if (obj["role"] == EVENTSDATA[1].admin) {
          obj["admin"] = true;
      }
      obj["timestamp"] = this.timeConverter(this.web3.utils.toDecimal(data.result[i].timeStamp));
      logArray.push(obj);
    }
    return logArray;
  }

  processVoterRegister(data): Array < EventResponse > {
    console.log(data);
    var logArray: EventResponse[] = [];
    for (var i = 0; i < data.result.length; i++) {
      var obj: EventResponse = new EventResponse();
      obj["tx"] = this.txUrl + data.result[i].transactionHash;
      obj["voterRegisterAddr"] = '0x' + data.result[i].topics[1].substring(26, 66);
      obj["voterRegisterElection"] = data.result[i].data.substring(63, 66);
      obj["timestamp"] = this.timeConverter(this.web3.utils.toDecimal(data.result[i].timeStamp));
      logArray.push(obj);
    }
    return logArray;
  }

  processVote(data): Array < EventResponse > {
    console.log(data);
    var logArray: EventResponse[] = [];
    for (var i = 0; i < data.result.length; i++) {
      var obj: EventResponse = new EventResponse();
      obj["tx"] = this.txUrl + data.result[i].transactionHash;
      obj["timestamp"] = this.timeConverter(this.web3.utils.toDecimal(data.result[i].timeStamp));
      obj["vote"] = data.result[i].data.substring(65, 66);
      obj["addrVote"] = '0x' + data.result[i].topics[1].substring(26, 66);
      logArray.push(obj);
    }
    return logArray;
  }

  processChangeVote(data): Array < EventResponse > {
    console.log(data);
    var logArray: EventResponse[] = [];
    for (var i = 0; i < data.result.length; i++) {
      var obj: EventResponse = new EventResponse();
      obj["tx"] = this.txUrl + data.result[i].transactionHash;
      obj["timestamp"] = this.timeConverter(this.web3.utils.toDecimal(data.result[i].timeStamp));
      obj["voteChanged"] = data.result[i].data.substring(65, 66);
      obj["addrChangedVote"] = '0x' + data.result[i].topics[1].substring(26, 66);
      logArray.push(obj);
    }
    return logArray;
  }

  processNFTissued(data): Array < EventResponse > {
    console.log(data);
    var logArray: EventResponse[] = [];
    for (var i = 0; i < data.result.length; i++) {
      var obj: EventResponse = new EventResponse();
      obj["tx"] = this.txUrl + data.result[i].transactionHash;
      obj["NFTissuedTo"] = '0x' + data.result[i].topics[2].substring(26, 66);
      obj["tokenID"] = data.result[i].topics[3].substring(62, 66)
      obj["timestamp"] = this.timeConverter(this.web3.utils.toDecimal(data.result[i].timeStamp));
      logArray.push(obj);
    }
    return logArray;
  }

  timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes();
    var sec = a.getSeconds() < 10 ? '0' + a.getSeconds() : a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
    return time;
  }

  private handleError < T > (operation = 'operation', result ? : T) {
    return (error: any): Observable < T > => {

      // TODO: send the error to remote logging infrastructure
      console.error(error);

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.debugService.add('EtherscanService: ' + message);
  }
}
