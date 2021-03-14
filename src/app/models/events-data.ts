import { Event } from './event';

export const EVENTSDATA: Event[] = [
  {
	name: "Elections",
	fromBlock: 9831538,
	address: "0x7BcD778AF7D847d3BD68dAEE1227E905C6f78368",
	topic: "0xad1c105fabaa3596c786e62a5a2613941ca89382bcd2bab4c489091a2522fc4f",
	contract: "Elections.sol",
    admin: "",
    voter: ""
  },
  {
	name: "Role Granted",
	fromBlock: 9831538,
	address: "0x7BcD778AF7D847d3BD68dAEE1227E905C6f78368",
	topic: "0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d",
	contract: "Elections.sol",
    admin: "0xa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775",
    voter: "0x72c3eec1760bf69946625c2d4fb8e44e2c806345041960b434674fb9ab3976cf"
  },
  {
	name: "Voter Registered",
	fromBlock: 9834386,
	address: "0x7BcD778AF7D847d3BD68dAEE1227E905C6f78368",
	topic: "0xf16ce2c2236e2c6e3df646f80d657bceef4cd7f3a240c47e82adfa17a5f47241",
	contract: "Election.sol",
    admin: "",
    voter: ""
  },
  {
	name: "Vote Cast",
	fromBlock: 9834386,
	address: "0x7BcD778AF7D847d3BD68dAEE1227E905C6f78368",
	topic: "0x1abe610cf2bf87e57dcc1181fcf5ac0934e843d8344ab9eed6e86c799f62585e",
	contract: "Election.sol",
    admin: "",
    voter: ""
  },
  {
	name: "Vote Changed",
	fromBlock: 9834386,
	address: "0x7BcD778AF7D847d3BD68dAEE1227E905C6f78368",
	topic: "0x67003adb11af4d5bffbd11b576deb8a743be6736f477757eb0a5286a4a2a861a",
	contract: "Solidity.sol",
    admin: "",
    voter: ""
  },
  {
	name: "NFT Issued",
	fromBlock: 9834386,
	address: "0x7BcD778AF7D847d3BD68dAEE1227E905C6f78368",
	topic: "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
	contract: "ERC-721",
    admin: "",
    voter: ""
  }
];