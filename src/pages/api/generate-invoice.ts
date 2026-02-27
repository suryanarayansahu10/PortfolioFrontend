import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

import {
  premiumInvoice,
  DocumentType,
} from "@/invoices/templates/premiumInvoice";
import { getNextInvoiceNumber } from "@/invoices/services/invoiceNumber";
import { generatePDF } from "@/invoices/services/pdfGenerator";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const invoiceNo = getNextInvoiceNumber();

    const type: DocumentType =
      req.body.type === "quotation" ? "quotation" : "invoice";

    const html = premiumInvoice(req.body, invoiceNo, type);

    const filePath = await generatePDF(html, invoiceNo);

    const pdfBuffer = fs.readFileSync(filePath);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${invoiceNo}.pdf`,
    );

    res.send(pdfBuffer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Invoice generation failed" });
  }
}
