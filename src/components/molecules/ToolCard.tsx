"use client";
import { useToast } from "@/lib";
import { SvgIconComponent } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  name: string;
  description: string;
  path: string;
  Icon?: SvgIconComponent;
};

const ToolCard = ({ name, description, path, Icon }: Props) => {
  const router = useRouter();
  const toast = useToast();

  const handleNavigate = async () => {
    try {
      const res = await fetch(path, { method: "HEAD", cache: "force-cache" });
      if (res.ok) {
        router.push(path);
      } else {
        toast.info("Coming soon...");
      }
    } catch {
      toast.info("Coming soon...");
    }
  };

  return (
    <Card
      className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col justify-between"
      sx={{ padding: 1.5 }}
    >
      <CardContent>
        {Icon && (
          <Icon fontSize="large" color="primary" style={{ marginBottom: 8 }} />
        )}
        <Typography variant="h6" fontWeight="600" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions className="px-4 pb-2 w-[70%]">
        <Button
          variant="contained"
          size="small"
          fullWidth
          onClick={handleNavigate}
        >
          Try Now
        </Button>
      </CardActions>
    </Card>
  );
};

export default ToolCard;
