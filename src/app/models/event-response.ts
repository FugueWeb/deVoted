export class EventResponse {
	tx: string;
    date: string;
	amount: number;
    timestamp: string;
    electionID: string;
    admin: boolean;
    voter: boolean;
    registeredAddr: string;
    voterRegisterAddr: string;
    voterRegisteredElection: number;
    role: string;
    tokenID: number;
    NFTissuedTo: string;
    addrVote: string;
    vote: number;
    voteElectionID: number;
    newVoterRequest: string;
    addrChangedVote: string;
    changeVoteElectionID: number;
    delegateToAddr: string;
    delegateFromAddr: string;
    delegateElectionID: number;
    voteChanged: number;
}