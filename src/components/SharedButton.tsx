import React from "react";
import { useDialog } from "@/context/DialogContext";
import { Button } from "./ui/button";

type ButtonVariant = "link" | "custm2" | "default" | "destructive" | "outline" | "secondary" | "ghost" | "custm1";

interface SharedButtonProps {
  variant: ButtonVariant;
}

const SharedButton: React.FC<SharedButtonProps> = ({variant}) => {
  const { setIsDialogOpen } = useDialog();

  return (
    <Button
      size={"custm1"}
      variant={variant}
      onClick={() => {
        setIsDialogOpen(true);
        console.log("hey");
      }}
    >
      Join Us
    </Button>
  );
};

export default SharedButton;
