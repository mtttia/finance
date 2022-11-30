import { useState } from "react"
import { Drawer } from "@mui/material"

export default function MobileDrawer({isOpen, onClose})
{

  return (
    
      <Drawer
        anchor={'bottom'}
        open={isOpen}
        onClose={onClose}
      >
        <p>one</p>
        <p>one</p>
        <p>one</p>
      </Drawer>
    
  )
}