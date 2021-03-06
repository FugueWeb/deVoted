import { Event } from './event';

export const EVENTSDATA: Event[] = [
  {
	name: "Elections",
	fromBlock: 9922004,
	address: "0xFeaFC845d898Ef4005c030f65F4bBE0E480a33dB",
	topic: "0xad1c105fabaa3596c786e62a5a2613941ca89382bcd2bab4c489091a2522fc4f",
	contract: "Elections.sol",
    admin: "",
    voter: "",
    desc: "List of all created elections by ID"
  },
  {
	name: "New Voter Request",
	fromBlock: 9922004,
	address: "0xFeaFC845d898Ef4005c030f65F4bBE0E480a33dB",
	topic: "0x880af2094cfc5bb58c36e8961e2748eb9b51e4c309b7a774acdcf29a47ba48b3",
	contract: "Elections.sol",
    admin: "",
    voter: "",
    desc: "Alerts the admin that a voter requests their address be registered as eligible to vote"
  },
  {
	name: "Role Granted",
	fromBlock: 9922004,
	address: "0xFeaFC845d898Ef4005c030f65F4bBE0E480a33dB",
	topic: "0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d",
	contract: "Elections.sol",
    admin: "0xa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775",
    voter: "0x72c3eec1760bf69946625c2d4fb8e44e2c806345041960b434674fb9ab3976cf",
    desc: "Specific role (VOTER or ADMIN) granted to a given address"
  },
  {
	name: "Voter Registered",
	fromBlock: 9922004,
	address: "0xFeaFC845d898Ef4005c030f65F4bBE0E480a33dB",
	topic: "0xf16ce2c2236e2c6e3df646f80d657bceef4cd7f3a240c47e82adfa17a5f47241",
	contract: "Elections.sol",
    admin: "",
    voter: "",
    desc: "Address with VOTER role has registered for a specific election"
  },
  {
	name: "Vote Cast",
	fromBlock: 9922004,
	address: "0xFeaFC845d898Ef4005c030f65F4bBE0E480a33dB",
	topic: "0x41df84b3b467b06744e40c92613c666324e7c640ce0a41ec06efdf602d367606",
	contract: "Elections.sol",
    admin: "",
    voter: "",
    desc: "List of all votes cast for a specific election"
  },
  {
	name: "NFT Issued",
	fromBlock: 9922004,
	address: "0xFeaFC845d898Ef4005c030f65F4bBE0E480a33dB",
	topic: "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
	contract: "ERC-721",
    admin: "",
    voter: "",
    desc: "Non-fungible token issued by ID to an address as a reward for casting a vote"
  },  
  {
	name: "Vote Changed",
	fromBlock: 9922004,
	address: "0xFeaFC845d898Ef4005c030f65F4bBE0E480a33dB",
	topic: "0xd5251aa5e719e1c6bfff7e845c36426ff4ae55a17d261391af3d03bc14bfe6b1",
	contract: "Elections.sol",
    admin: "",
    voter: "",
    desc: "Vote changed for a specific election"
  },
  {
	name: "Vote Delegated",
	fromBlock: 9922004,
	address: "0xFeaFC845d898Ef4005c030f65F4bBE0E480a33dB",
	topic: "0x4c85de320295d82020d93c3f198b630d3a58d8b95a273b9a6a0d8ff925aac254",
	contract: "Elections.sol",
    admin: "",
    voter: "",
    desc: "Vote delegated to another eligible voter for a specific election"
  }
];