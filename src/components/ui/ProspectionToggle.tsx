"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button-1"
import {
  Popover,
  PopoverDialog,
  PopoverTrigger,
} from "@/components/ui/popover-1"
import { Switch } from "@/components/ui/switch-1"

interface ProspectionToggleProps {
  onToggle?: (isEnabled: boolean) => void;
}

export default function ProspectionToggle({ onToggle }: ProspectionToggleProps) {
  const [isRuncallEnabled, setIsRuncallEnabled] = useState(false);

  const handleToggle = (isSelected: boolean) => {
    setIsRuncallEnabled(isSelected);
    onToggle?.(isSelected);
  };

  return (
    <PopoverTrigger>
      <Button variant="outline" className="bg-white/10 backdrop-blur text-white border-white/20 hover:bg-white/20">
        🎯 Prospection
      </Button>
      <Popover className="bg-white">
        <PopoverDialog>
          <div className="flex flex-col gap-4 min-w-[200px]">
            <h3 className="font-semibold text-gray-900 mb-2">Mode de Prospection</h3>
            <Switch 
              defaultSelected={isRuncallEnabled}
              onChange={handleToggle}
              className="text-gray-700"
            >
              <div className="flex items-center gap-2">
                <span className={!isRuncallEnabled ? 'font-semibold' : ''}>Sans RunCALL</span>
                <span className="text-gray-400">|</span>
                <span className={isRuncallEnabled ? 'font-semibold text-primary' : ''}>Avec RunCALL</span>
              </div>
            </Switch>
            <div className="text-sm text-gray-600 mt-2">
              {isRuncallEnabled ? (
                <div className="space-y-1">
                  <p>✅ Closers experts créolophones</p>
                  <p>✅ 8% de conversion minimum</p>
                  <p>✅ Focus 100% sur votre métier</p>
                </div>
              ) : (
                <div className="space-y-1">
                  <p>❌ 3h/jour au téléphone</p>
                  <p>❌ 2% de conversion</p>
                  <p>❌ Leads froids abandonnés</p>
                </div>
              )}
            </div>
          </div>
        </PopoverDialog>
      </Popover>
    </PopoverTrigger>
  )
}