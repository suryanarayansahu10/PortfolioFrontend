export interface InvoiceItem {
  title: string;
  details: string;
  price: number;
  qty: number;
}

export interface InvoiceData {
  clientName: string;
  clientEmail: string;
  clientLocation: string;
  items: InvoiceItem[];
}
