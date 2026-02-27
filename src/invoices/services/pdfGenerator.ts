import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";

export async function generatePDF(html: string, invoiceNo: string) {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox"],
  });

  const page = await browser.newPage();

  await page.setContent(html, { waitUntil: "networkidle0" });

  const filePath = path.join(
    process.cwd(),
    "src/storage/invoices",
    `${invoiceNo}.pdf`,
  );

  await page.pdf({
    path: filePath,
    format: "A4",
    printBackground: true,
  });

  await browser.close();

  return filePath;
}
