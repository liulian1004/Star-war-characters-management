

// @Injectable({
//   providedIn: 'root'
// })
export class LogService {

  constructor() { }

  writeLog(logText:string){
    console.log(logText)
  }
}
