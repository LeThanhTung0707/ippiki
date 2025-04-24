interface Props {
  title: string;
  subtitle: string;
}
const SectionTitle: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="text-center max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h1>
      <p className="text-base sm:text-lg text-gray-700">{subtitle}</p>
    </div>
  );
};
export default SectionTitle;
