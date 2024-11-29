import { Http2ServerRequest } from "http2";
import { EnumTripDirection } from "./../../../../schemas/travels/travels";
import { EnumPassengerType } from "./../../../travel/ilsa-passenger-v2/schemas/int-passenger.interface";

import * as fs from "fs";

const jsonThemeFile = Object.assign(
  {},
  genericConfig.default,
  colors.default,
  tokenColors.default
);

const jsonString = JSON.stringify(jsonThemeFile, null, 2);

// Inline comment
/**
 * jsdoc comment
 */
fs.writeFileSync(
  `${__dirname}\\..\\themes\\Adeso-Darkokai-color-theme.json`,
  jsonString
);



export interface IntIlsaTicketSummaryDataPair {
  label: string;
  value: string;
  address: String;
}

export interface IntTravelLabels {
  locator: string;
  purchaser: string;
  tripDeparture: string;
  tripReturn: string;
  train: string;
  trainCode?: string;
  seat: string;
  tarrif: string;
  amount: string;
  points: string;
  cardDiscounts: string;
  ticketNumber: string;
  downloadTickets: string;
  accessories: string;
  services: string;
  complement: string;
  linkText: string;
  ratingText: string;
  complementTitle: string;
  email: string;
  phone: string;
  edit: string;
  bookingStatus?: string;
  bookingStatusShort?: string;
  cancelledStatus?: string;
}

export interface IntPassengerTravelData {
  id: string;
  name: string;
  firstSurname: string;
  email: string;
  secSurname: string;
  phoneNumber: string;
  prefixNumber: string;
  documentType: string;
  documentNumber: string;
  disabilityType: boolean;
  passengerType?: EnumPassengerType;
}

export interface IntTravel {
  type: EnumTripDirection;
  uicDepartureStation: string;
  uicArrivalStation: string;
  travelDate: string;
  durationTravel: string;
  departureDateTime: string;
  arrivalDateTime: string;
  serviceName?: string;
  travel?: IntTravel[];
}

export interface IntProducts {
  itemId: string;
  points: number;
  passengerId: string;
  code: string;
  cardDescount: string;
  ticketNumber: string;
  incluideAddons: string[];
  requestedServices: IntIlsaTicketSummaryDataPair[];
  addonsReservation: IntIlsaTicketSummaryDataPair[];
  seat: IntSeat;
  price: string | number;
  originalPrice: string | number;
  type?: string;
  address?: String;
}
export interface IntTravelData {
  statusReserved: "active" | "noActive";
  bookingNumber: string;
  type: EnumTripDirection;
  passengers: IntPassengerTravelData[];
  travel: IntTravel[];
  products: IntProducts[];
}

export interface IntSeat {
  carriage: string;
  number: string;
  address: String;
}

export interface IntStations {
  connectedStations: string[];
  name: string;
  shortCode: string;
  timezone: string;
  uicStationCode: string;
}

export enum EnumEntityType {
  PERSON = "person",
  COMPANY = "company"
}

export const myObj = {
  age: 17,
  adult: false,
  getAge: (age) => { age }
}

@Decorator()
class CreateFileDropProvider implements vscode.DocumentDropEditProvider {

  myenum: typeof EnumEntityType = EnumEntityType;
  myString: typeof string = "hello";

  myObj = {
    name: "hello",
    age: 65
  }
  doSomething() {

    const invoiceData = {
      name: "filip",
      id: 233212
    }

    var myLovin = "lailolailolaaaai";

    for (let prop in invoiceData) {
      console.log(prop);
    }
  }


  constructor() {
    super();

  }

  deleteAge() {
    delete myObj[age];
  }

  async provideDocumentDropEdits(_document: vscode.textDocument, _position: vscode.Position.dataTranfer: any) {
    const pngFile = _document.get('image/png')?.asFile();
    if (!pngFile && _document) {
      myObj.age;
      myObj.getAge(34);
      return;
    }
  }
}
// Read file
// This results in the entire file content being copied over the extension host.
const contents = await pngFile.data();
const path = vscode.Uri.joinPath(vscode.workspace.workspaceFolders![0].uri, 'image.png', vscode.workspace.workspaceFolders());
let age = 34;
var regex = /^[1-9]\d{0,2}$/g
regex.test('2') // outputs true

if (18 >= 37) {

}
var trigger = "2",
  regexp = new RegExp('^[1-9]\d{0,2}$'),
  test = regexp.test(trigger);
alert(test + ""); // will display true

Object.keys(invalidControls).forEach((key) => {
  this.errorMessages[key]['message'] = this.labels.errors.VA0006;
  this.errorMessages[key]['hasError'] = true;
})

if (exception?.errors.length > 0) {
  console.log("hello");
}

