import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class ConfigProviderService implements OnInit{

  constructor(private http:HttpClient) { console.log('Configuration provider works'); }

  private configUrl = "../assets/config.json";
  private rawData:any;

  ngOnInit() {
    console.log('ngoninit...');
  }


  load() {
    return new Promise<void>((resolve, reject) => {

      //Observable to Promise
      this.http.get(this.configUrl).toPromise()

        //Success
        .then((response: Response) => {
          console.log('Fetch returned', response);
          this.rawData = response;
          resolve();
        })

        //Failure
        .catch((err) => {
          console.log('Error', err);
          reject();
        });

    }); //Promise<void>

  } //load

  getMessage() {

    return this.rawData;


  }

}

export function loadConfig(configProvder:ConfigProviderService) {
  return () => configProvder.load();
}

export function getMessage() {
  console.log('executing getMessage with this.rawData',this.rawD);
  
  return this.rawData;
}


