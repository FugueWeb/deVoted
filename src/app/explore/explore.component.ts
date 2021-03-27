import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { EtherscanService } from '../services/etherscan.service';
import { Event } from '../models/event';
import { EventResponse } from '../models/event-response';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
  providers: [EtherscanService]
})
export class ExploreComponent implements OnInit {
  events: Event[];
  eventData: EventResponse[];
  eventForm: FormGroup;
  eventDesc: String;

  constructor(private ess: EtherscanService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.ess.getEvents().subscribe(events => {
      this.events = events;
    });
    this.createFormGroups();
  }

  createFormGroups() {
    this.eventForm = this.fb.group({
      eventName: ['', [Validators.required]]
    });
  }

  updateDesc(index) {
    this.eventDesc = this.events[index].desc;
  }

  onEventSelected(index): void {
    let data: Array < any > = [this.events[index].fromBlock, this.events[index].address, this.events[index].topic];
    this.ess.getEventData(data).subscribe(events => {
      switch (this.events[index].name) {
        case "Elections":
          this.eventData = this.ess.processElections(events);
          console.log(this.eventData);
          break;
        case "New Voter Request":
          this.eventData = this.ess.processNewVoterRequest(events);
          console.log(this.eventData);
          break;
        case "Role Granted":
          this.eventData = this.ess.processRole(events);
          console.log(this.eventData);
          break;
        case "Voter Registered":
          this.eventData = this.ess.processVoterRegister(events);
          console.log(this.eventData);
          break;
        case "Vote Cast":
          this.eventData = this.ess.processVote(events);
          console.log(this.eventData);
          break;
        case "Vote Changed":
          this.eventData = this.ess.processChangeVote(events);
          console.log(this.eventData);
          break;
        case "Vote Delegated":
          this.eventData = this.ess.processDelegateVote(events);
          console.log(this.eventData);
          break;
        case "NFT Issued":
          this.eventData = this.ess.processNFTissued(events);
          console.log(this.eventData);
          break;
        default:
          console.log('error processing event data');
          break;
      }
    });
  }
}
