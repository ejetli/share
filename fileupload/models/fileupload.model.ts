export class FileuploadModel {
  constructor(  
    public type: string,
    public file: string,
    public issuedDate: string,
    public expiryDate: string
  ) {}
}
