# deVoted

`deVoted` is an Ethereum blockchain based voting app that allows for the following unique features to conduct an election once an admin registers an address on the [smart contract](https://github.com/FugueWeb/election/blob/master/contracts/Elections.sol).

* Mobile first design, vote from a `web3` enabled browser
* Create multiple elections, each with two competing proposals and a deadline
* Voters can opt to delegate their vote to another approved voter
* Voters can opt to change their vote one time
* Inspect in realtime the current vote count of the proposals
* See the voting record of a given address
* Voters receive a non-fungible token for casting a vote
* Vote up until the last second. A winner is determined only once the election deadline has passed.

## Using the dApp

**[deVoted website!](https://fugueweb.com/dev/devoted)**

1. You'll need a `web3` browser and an Ethereum wallet to vote and interact with the smart contract, but if you just want to audit election results from a regular internet browser check out the `Explore` tab. This dApp was developed with a mobile first design, so try one of the following mobile apps. 

* [Status](https://status.im/get/)
* [Metamask](https://metamask.io/download.html)
* [Coinbase](https://www.coinbase.com/mobile)

If you're using a laptop/computer, use either Chrome, Brave, or Firefox with the [Metamask](https://metamask.io/download.html) browser extension. Opera's crypto wallet should also work.

2. This dApp is deployed to the `Ropsten` testnet. This means that you will probably need to change your network from `MainNet` to be able to connect with the smart contract. This is different depending on what app or browser you are using, please check your settings.

3. Finally, you will need some `Ropsten` testnet `ether` to send transactions. You can get some for free at [this faucet](https://faucet.ropsten.be/).

4. You're ready to interact with the dApp! Press the `Connect Wallet` button and follow the onboarding prompts from BlockNative. Use the `New Voter Request` function, which alerts the admin of your wallet address so you can registered to vote.

5. Tip, press the `i` icon buttons next to each function to read more about what they do. Some functions read data from the blockchain, some make state changes (such as casting a vote), and some may only be called by the admin.

## Auditing

No special browser or extension is required to audit the results of an election. In the `Explore` tab, you are able to see the event logs from all state-changing transactions on the smart contract. This data is pulled using [Etherscan's API](https://etherscan.io/apis) and is effectively an audit trail that provides integrity and non-repudiation of someone's voting record as well as the results of an election. Events include:

* Elections: Shows the deadline and ID of all elections
* New Voter Request: Alerts the admin of an address that requests to be assigned the `VOTER` role
* Role Granted: Show when an address has been granted either the `VOTER` or `ADMIN` role, representing that they've been registered as a participant on the dapp. Note, this just affords people the right to vote, but they still have to individually register for each election they wish to vote in.
* Voter Registered: Shows when a registered voter registers for a specific election
* Vote Cast: Shows when a voter cast their vote and for which proposal they voted in a given election
* NFT Issued: Voters receive a `deVoted` non-fungible token when they vote. This event shows the ID of the NFT and to whom it was issued.
* Vote Changed: Shows when a registered voter changes their vote for a given election
* Vote Delegated: Shows to which address a registered voter delegates their vote for a given election

## Developers

* This dApp uses smart contracts from [this project](https://github.com/FugueWeb/election) using Truffle, specifically `Elections.sol`. You'll need to compile and migrate/deploy the smart contracts to some type of blockchain (I suggest Ganache for local development) and then copy the `elections.json` ABI file into the `assets` folder of this repo.

* If you want to use the Block Native integration and Etherscan API, you'll need to put in your own API keys in the `/src/environments` folder.

* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

* Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io). Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Resources and References

* [Web3](https://github.com/ethereum/wiki/wiki/JavaScript-API)
* [Truffle](https://www.trufflesuite.com/)
* [Angular CLI](https://github.com/angular/angular-cli)
* [Block Native](https://docs.blocknative.com/)
* [Etherscan](https://etherscan.io/apis)

## Changelog and Contributing

This is an open source project. Read the [change log](https://github.com/fugueweb/deVoted/blob/master/.github/CHANGELOG.md) for recent updates. Contributions are welcomed & encouraged! :smile: If you'd like to improve the code base, please see [Contributing Guidelines](https://github.com/fugueweb/deVoted/blob/master/.github/CONTRIBUTING.md).