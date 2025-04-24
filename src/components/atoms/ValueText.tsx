const ValueText = ({
  isIp,
  children,
}: {
  isIp?: boolean;
  children: React.ReactNode;
}) => (
  <span className={`${isIp ? "text-red-500" : "text-black"} text-xl`}>
    {children}
  </span>
);
export default ValueText;
