import React from "react";
import { LabelText, ValueText } from "../atoms";

type Props = {
  label: string;
  value: React.ReactNode;
};

const InfoRow = ({ label, value }: Props) => (
  <div className="grid grid-cols-2 border-t py-2 px-3 text-sm">
    <LabelText>{label}</LabelText>
    <ValueText isIp={["IP", "IPv4", "IPv6"].includes(label)}>{value}</ValueText>
  </div>
);

export default InfoRow;
