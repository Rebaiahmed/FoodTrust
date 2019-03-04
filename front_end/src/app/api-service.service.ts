import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';





// we can now access environment.apiUrl
const API_URL = 'http://localhost:3000';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor( private http: HttpClient) {


  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }






//_________________________Method to gel All Products //
getAllProducst(): Observable<any> {
  return this.http.get(API_URL + '/products/').pipe(
    map(this.extractData));
}


//_________________________Method to gel All Products //
getFarmerProducts(farmerId): Observable<any> {
  return this.http.get(API_URL + '/products/farmer/' + farmerId).pipe(
    map(this.extractData));
}



//_________________________Method to gel All Suppliers //
getListSuppliers(): Observable<any> {
  return this.http.get(API_URL + '/suppliers').pipe(
    map(this.extractData));
}



//_________________________Method to gel All Retailers //
getListRetailers(): Observable<any> {
  return this.http.get(API_URL + '/retailers').pipe(
    map(this.extractData));
}





//_________________________Method to gel All Products //
getProductHistory(productId): Observable<any> {
  return this.http.get(API_URL + '/products/history/' + productId).pipe(
    map(this.extractData));
}


//___________Add a Product_________________//

createProduct(product): Observable<any> {


    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
      })
    };
    console.log(product);
    return this.http.post<any>(API_URL + `/createProduct`, JSON.stringify(product), httpOptions);


}




//___________send Product to supplier_________________//

sendProducttoSupplier(product): Observable<any> {


  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
    })
  };
  console.log(product);
  return this.http.post<any>(API_URL + `/producttosupplier`, JSON.stringify(product), httpOptions);


}


//___________send Product to retailer_________________//

sendProductToRetailer(product): Observable<any> {


  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
    })
  };
  console.log(product);
  return this.http.post<any>(API_URL + `/supplier_retailer`, JSON.stringify(product), httpOptions);


}






//___________CreateAccount_________________//

createAccount(account): Observable<any> {


  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
    })
  };
  console.log(account);
  return this.http.post<any>(API_URL + `/createAccount`, JSON.stringify(account), httpOptions);


}



//___________SignIn_________________//

Signin(account): Observable<any> {


  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
    })
  };
  console.log(account);
  return this.http.post<any>(API_URL + `/login`, JSON.stringify(account), httpOptions);


}




//_________________________Method to gel All Retailers //
getUserImage(userId): Observable<any> {
  return this.http.get(API_URL + '/user/image/:'+ userId).pipe(
    map(this.extractData));
}



//_________________________Method to gel All Retailers //
getUserNotifications(userId): Observable<any> {
  return this.http.get(API_URL + '/user/notifications/:'+ userId).pipe(
    map(this.extractData));
}










}
