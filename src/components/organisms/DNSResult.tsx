import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import { DNSResponse } from "@/types/dns";

const typeMap: Record<number, string> = {
  1: "A",
  28: "AAAA",
  15: "MX",
  2: "NS",
  6: "SOA",
  16: "TXT",
};

function typeToName(type: number): string {
  return typeMap[type] || `TYPE${type}`;
}

type Props = {
  data: DNSResponse | undefined;
};

export default function DNSResult({ data }: Props) {
  if (!data) return null;

  const answers = data.Answer || [];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>TYPE</strong>
            </TableCell>
            <TableCell>
              <strong>DOMAIN</strong>
            </TableCell>
            <TableCell>
              <strong>TTL</strong>
            </TableCell>
            <TableCell>
              <strong>VALUE</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {answers.length > 0 ? (
            answers.map((record, idx) => (
              <TableRow key={idx}>
                <TableCell>{typeToName(record.type)}</TableCell>
                <TableCell>{record.name}</TableCell>
                <TableCell>{record.TTL}</TableCell>
                <TableCell>{record.data}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4}>
                <Typography>No DNS records found.</Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
