import { Injectable } from '@angular/core';
import { bindNodeCallback, Observable } from 'rxjs';
import * as Web3 from 'web3';

import * as TruffleContract from 'truffle-contract';
import { NullInjector } from '@angular/core/src/di/injector';

declare let require: any;

declare let window: any;

@Injectable({
  providedIn: 'root'
})
export class EtherServiceService {

private web3Provider: null;
//public web3: Web3;
private contracts: {};



constructor() {

  /*if (typeof window.web3 !== 'undefined') {

  this.web3Provider = window.web3.currentProvider;

  } else {

  this.web3Provider = new Web3.providers.HttpProvider('http://localhost:8545');

  }

  window.web3 = new Web3(this.web3Provider);
  this.web3 = new Web3('http://localhost:8545');
  //this.web3.eth.accounts.create();
*/
  }



//___________________//
public getAccounts(): Observable<string[]> {
 // return bindNodeCallback(this.web3.eth.getAccounts)();
 return null ;
}


//__________________________//


CreateAccount(params:any)
{

 /* return Web3.eth.accounts.create(params, function(data){
    console.log('dtatat'+ data);
  });*/
}



//_______________________________________//

getAccountInfo() {

  /*return new Promise((resolve, reject) => {

  window.web3.eth.getCoinbase(function(err, account) {

  if(err === null) {

    Web3.eth.getBalance(account, function(err, balance) {

  if(err === null) {

  return resolve({fromAccount: account, balance:Web3.fromWei(balance, "ether")});

  } else {

  return reject("error!");

  }

  });

  }

  });

  });*/

  }





}
