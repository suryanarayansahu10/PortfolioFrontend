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

export type DocumentType = "invoice" | "quotation";

export const premiumInvoice = (
  data: InvoiceData,
  invoiceNo: string,
  type: DocumentType = "invoice",
) => {
  const isInvoice = type === "invoice";

  const documentTitle = isInvoice ? "Service Invoice" : "Service Quotation";

  const numberLabel = isInvoice ? "Invoice Number" : "Quotation Number";

  const dateLabel = isInvoice ? "Invoice Date" : "Quotation Date";

  const totalLabel = isInvoice ? "Total" : "Quoted Amount";

  const footerMessage = isInvoice
    ? "Thank You For Your Business"
    : "We look forward to working with you";

  const terms = isInvoice
    ? `
    • Payment due upon receipt unless otherwise agreed.<br/>
    • Services delivered as per mutually agreed engagement scope.<br/>
    • NexChunk provides engineering and software services only.<br/>
    • This invoice serves as official service acknowledgement.<br/>
  `
    : `
    • This quotation is valid for 15 days from issue date.<br/>
    • Work will commence upon written confirmation or advance payment.<br/>
    • Scope limited strictly to items listed above.<br/>
    • Additional requirements will be quoted separately.<br/>
  `;

  /* ---------- BUILD TABLE ROWS ---------- */

  const rows = data.items
    .map((item, i) => {
      const total = item.price * item.qty;

      return `
      <tr>
      <td>${String(i + 1).padStart(2, "0")}</td>

      <td>
        <div class="item-title">${item.title}</div>
        <div class="item-details">${item.details}</div>
      </td>

      <td>₹${item.price}</td>
      <td>${item.qty}</td>
      <td>₹${total}</td>
    </tr>
      `;
    })
    .join("");

  const grandTotal = data.items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0,
  );

  const today = new Date().toLocaleDateString("en-IN");

  /* ---------- HTML TEMPLATE ---------- */

  return `

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8"/>

<style>

/* ===============================
   A4 PRINT SETTINGS
================================ */

@page {
  size: A4;
  margin: 0;
}

html, body {
  margin:0;
  padding:0;
  font-family: Arial, Helvetica, sans-serif;
  background:white;
}

.invoice {
  width:210mm;
  min-height:297mm;
  display:flex;
  flex-direction:column;
}

/* ===============================
   HEADER
================================ */

.header{
  background:#1D1F47;
  color:white;
  padding:28px 30px;
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
}

.brand{
  display:flex;
  gap:14px;
  align-items:center;
}

.brand img{
  height:70px;
}

.brand-text{
  font-size:30px;
  font-weight:bold;
}

.tagline{
  font-size:13px;
  opacity:.9;
}

.invoice-meta{
  text-align:start;
}

.invoice-meta h2{
  margin:0
}

/* ===============================
   CONTENT
================================ */

.content{
  flex:1;
  padding:35px 40px;
}

.row{
  display:flex;
  justify-content:space-between;
  margin-bottom:25px;
}

.label{
  color:#7ac142;
  font-weight:bold;
}

.name{
  font-size:18px;
  font-weight:bold;
  margin-top:6px;
}

/* ===============================
   TABLE
================================ */

table{
  width:100%;
  border-collapse:collapse;
  margin-top:30px;
  font-size:14px;
}

th{
  background:#6DB03F;
  padding:14px;
  text-align:left;
  color:white;
}

td{
  padding:14px;
  border-bottom:1px solid #ddd;
}

tr:nth-child(even){
  background:#f5f5f5;
}



.item-title{
  font-weight:bold;
  font-size:14px;
  margin-bottom:4px;
}

.item-details{
  font-size:12px;
  color:#777;
  white-space: pre-line;
  line-height:1.4;
}

/* ===============================
   TOTAL BOX
================================ */

.total-box{
  display:flex;
  justify-content:flex-end;
  margin-top:25px;
}

.total{
  background:#6DB03F;
  padding:16px 28px;
  font-size:18px;
  font-weight:bold;
  color:white;
}

/* ===============================
   FOOTER
================================ */

.footer{
  background:#1D1F47;
  color:white;
  padding:22px 40px;
  font-size:13px;
}

.footer-row{
  display:flex;
  justify-content:space-between;
  gap:40px;
}

ul{
  margin:6px 0 0 18px;
  padding:0;
}

.linkedin{
  font-size:11px;
  opacity:0.9;
}

.linkedin a{
  color:white;
  text-decoration:none;
}

.linkedin a:hover{
  text-decoration:underline;
}

</style>

</head>

<body>

<div class="invoice">

<!-- ================= HEADER ================= -->

<div class="header">

  <div class="brand">
    <img src="${process.env.NEXT_PUBLIC_BASE_URL}/logo-email.png"/>
    <div>
      <div class="brand-text">NexChunk</div>
      <div class="tagline">
        Data Reconciliation • Automation • Scalable Web Systems
      </div>
    </div>
  </div>

  <div class="invoice-meta">
    <h2>${documentTitle}</h2>
    ${numberLabel}: ${invoiceNo}<br/>
    ${dateLabel}: ${today}
    ${!isInvoice ? "<br/>Validity: 15 Days" : ""}
  </div>

</div>

<!-- ================= CONTENT ================= -->

<div class="content">

  <div class="row">

    <div>
      <div class="label">To:</div>
      <div class="name">${data.clientName}</div>
      ${data.clientLocation}<br/>
      ${data.clientEmail}
    </div>

    <div>
      <div class="label">From:</div>
      <div class="name">NexChunk</div>
      Bangalore, India<br/>
      contact@nexchunk.com
    </div>

  </div>

  <table>

    <tr>
      <th style="width:8%">NO</th>
      <th>PRODUCT DESCRIPTION</th>
      <th>PRICE</th>
      <th>QTY</th>
      <th>TOTAL</th>
    </tr>

    ${rows}

  </table>

  <div class="total-box">
    <div class="total">
      ${totalLabel} ₹${grandTotal}
    </div>
  </div>

  <div style="margin-top:40px">

  <div style="
      color:#6DB03F;
      font-weight:bold;
      margin-bottom:8px;">
      Terms & Conditions
  </div>

  <div style="
      font-size:12px;
      color:#666;
      line-height:1.6;">

   ${terms}

  </div>

</div>

</div>


<!-- ================= FOOTER ================= -->

<div class="footer">

  <div class="footer-row">

    <div>
      NexChunk provides specialised solutions across:
      <ul>
        <li>Data Reconciliation & Migration Validation</li>
        <li>Internal Automation Systems</li>
        <li>Scalable Web Application Development</li>
      </ul>
    </div>

    <div style="text-align:right">
      Provider not GST registered — GST not applicable.<br/><br/>
      ${footerMessage}<br/>
      https://nexchunk.com | <a href="https://www.linkedin.com/company/nexchunk" style="
       color:white;
       text-decoration:none;
       vertical-align:middle;
       display:inline-block;
     ">
     Follow NexChunk on LinkedIn
  </a>
  </div>

</div>

</div>

</body>
</html>
`;
};
