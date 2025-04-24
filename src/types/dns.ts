export type DNSRecord = {
  name: string;
  type: number;
  TTL: number;
  data: string;
};

export type DNSResponse = {
  Answer?: DNSRecord[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Question?: any[];
  Status: number;
};
