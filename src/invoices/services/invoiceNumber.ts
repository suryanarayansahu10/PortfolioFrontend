import fs from "fs";
import path from "path";

const counterPath = path.join(
  process.cwd(),
  "src/storage/invoice-counter.json",
);

export function getNextInvoiceNumber() {
  const data = JSON.parse(fs.readFileSync(counterPath, "utf-8"));

  const invoiceNo = `NC-${new Date().getFullYear()}-${String(data.current).padStart(3, "0")}`;

  data.current += 1;
  fs.writeFileSync(counterPath, JSON.stringify(data));

  return invoiceNo;
}
