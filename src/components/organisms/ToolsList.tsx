"use client";

import { useState } from "react";
import { Typography, TextField } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";
import { ToolCard } from "../molecules";
import { ToolGroup } from "@/app/tools/page";

interface Props {
  groupedTools: ToolGroup[];
  toolIcons: { [key: string]: SvgIconComponent };
  categoryIcons: { [key: string]: SvgIconComponent };
}
const ToolList: React.FC<Props> = ({
  groupedTools,
  toolIcons,
  categoryIcons,
}) => {
  const [search, setSearch] = useState("");

  const filteredGroups = groupedTools
    .map((group) => ({
      ...group,
      tools: group.tools.filter((tool) =>
        tool.name.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((group) => group.tools.length > 0);

  return (
    <div className="space-y-10">
      <TextField
        label="Search tools..."
        variant="outlined"
        fullWidth
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="!mb-6"
      />

      {filteredGroups.map((group) => {
        const Icon = categoryIcons[group.category];
        return (
          <div key={group.category} className="space-y-4 mb-10">
            <div className="flex items-center gap-2 mb-2">
              {Icon && <Icon fontSize="medium" color="primary" />}
              <Typography variant="h5" fontWeight={600}>
                {group.category}
              </Typography>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.tools.map((tool) => (
                <ToolCard
                  key={tool.path}
                  name={tool.name}
                  description={tool.description}
                  path={tool.path}
                  Icon={toolIcons[tool.name]}
                />
              ))}
            </div>
          </div>
        );
      })}

      {filteredGroups.length === 0 && (
        <Typography variant="body1">
          No tools found matching your search.
        </Typography>
      )}
    </div>
  );
};

export default ToolList;
