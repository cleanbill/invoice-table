import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

type Data = {
  name: string;
};

export default function handler(
  _req: NextApiRequest,
  response: NextApiResponse<Data>,
) {
  const filePath = path.join(__dirname, "../../../../../dummy.pdf");
  const stat = fs.statSync(filePath);

  response.writeHead(200, {
    "Content-Type": "application/pdf",
    "Content-Length": stat.size,
  });

  const readStream = fs.createReadStream(filePath);
  // We replaced all the event handlers with a simple call to readStream.pipe()
  readStream.pipe(response);
}
