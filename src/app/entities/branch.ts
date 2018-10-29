import { Address } from "./address";

export class Branch {
  id: string;
  name: string;
  phone: number;
  mobile: number;
  email: any;
  pan: any;
  tan: any;
  gstin: string;
  lat: number;
  lng: number;
  address: Address = new Address();
  isMain: boolean = false;
  active: boolean = true;
}
