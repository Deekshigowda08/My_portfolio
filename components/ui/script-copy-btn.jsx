"use client";;
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function ScriptCopyBtn({
  showMultiplePackageOptions = false,
  codeLanguage,
  darkTheme,
  commandMap,
  className
}) {
  const packageManagers = Object.keys(commandMap);
  const [packageManager, setPackageManager] = useState(packageManagers[0]);
  const [highlightedCode, setHighlightedCode] = useState("");
  const command = commandMap[packageManager];

  useEffect(() => {
    async function loadHighlightedCode() {
      try {
        const highlighted = await codeToHtml(command, {
          lang: codeLanguage,
          themes: {
             darkTheme
          },
          defaultColor:"dark"
        });
        setHighlightedCode(highlighted);
      } catch (error) {
        console.error("Error highlighting code:", error);
        setHighlightedCode(`<pre>${command}</pre>`);
      }
    }

    loadHighlightedCode();
  }, [command,  codeLanguage,  darkTheme]);

  

  return (
    
    <div
      className={cn("mx-auto flex w-[80%] items-center justify-center", className)}>
      <div className="w-full space-y-2">
        <div className="mb-2 flex items-center justify-between">
          {showMultiplePackageOptions && (
            <div className="relative">
              <div
                className="inline-flex overflow-hidden rounded-md border border-border text-xs">
                {packageManagers.map((pm, index) => (
                  <div key={pm} className="flex items-center">
                    {index > 0 && (
                      <div className="h-4 w-px bg-border" aria-hidden="true" />
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`relative rounded-none bg-black px-2 py-1 hover:bg-black${
                        packageManager === pm
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                      onClick={() => setPackageManager(pm)}>
                      {pm}
                      {packageManager === pm && (
                        <motion.div
                          className="absolute inset-x-0 bottom-[1px] mx-auto h-0.5 w-[90%] bg-primary"
                          layoutId="activeTab"
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                          }} />
                      )}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="relative flex items-center">
          <div className="text-purple-800 text-xl min-w-[300px] grow font-mono">
          <div className="rounded-md p-2 px-4 font-mono">
          {command}
          </div>
          
        </div>
      </div>
    </div>
    </div>
  );
}
