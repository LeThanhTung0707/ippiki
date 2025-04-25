import { SvgIconComponent } from "@mui/icons-material";
import { ToolList } from "../organisms";
import { ToolGroup } from "@/app/tools/page";
import { SectionTitle } from "../atoms";
interface Props {
  title: string;
  subtitle: string;
  groupedTools: ToolGroup[];
  toolIcons: { [key: string]: SvgIconComponent };
  categoryIcons: { [key: string]: SvgIconComponent };
}
const ToolsPage: React.FC<Props> = ({
  title,
  subtitle,
  groupedTools,
  toolIcons,
  categoryIcons,
}) => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <SectionTitle title={title} subtitle={subtitle} />
      <h1 className="text-3xl font-bold mb-6">🛠 All Tools</h1>
      <ToolList
        groupedTools={groupedTools}
        toolIcons={toolIcons}
        categoryIcons={categoryIcons}
      />
    </div>
  );
};

export default ToolsPage;
