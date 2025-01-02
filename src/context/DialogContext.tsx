"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DialogContextProps {
  isDialogOpen: boolean;
  setIsDialogOpen: (open: boolean) => void;
}

const DialogContext = createContext<DialogContextProps | undefined>(undefined);

export const DialogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <DialogContext.Provider value={{ isDialogOpen, setIsDialogOpen }}>
      {children}
    </DialogContext.Provider>
  );
};

export const useDialog = (): DialogContextProps => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error('useDialog must be used within a DialogProvider');
  }
  return context;
};
