import MorphingText from "@/components/ui/morphing-text";
import ScriptCopyBtn from "@/components/ui/script-copy-btn";
import { MagicCard } from "@/components/ui/magic-card";

export function MagicCardDemo() {
  const customCommandMap1 = {
    ".py": "print(\"hello\")",
  };
  const customCommandMap2 = {
    ".cpp": "cout << \"hello\";",
  };
  const customCommandMap3 = {
    ".c": "printf(\"hello\");",
  };
  const customCommandMap4 = {
    ".js": "console.log(\"hello\");",
  };
  const texts = [
    "Hello",
    "I am Deekshith H R",
    "This",
    "Are",
    "Some",
    "Languages",
    "Am familiar",
  "With"
  ];
  return (
    <div
      className={
        "flex h-screen w-[90%]   mx-auto flex-col bg-black gap-4 lg:h-[250px] lg:flex-row"
      }
    >
<MorphingText className="h-[20%] mb-5" texts={texts} />
      <MagicCard
        className="cursor-pointer flex-col items-center bg-black justify-center whitespace-nowrap text-4xl shadow-2xl"
        gradientColor="#D9D9D955"
      >
        <ScriptCopyBtn
        showMultiplePackageOptions={true}
        codeLanguage="shell"
        darkTheme="vitesse-dark"
        commandMap={customCommandMap1}
      />
      </MagicCard>
      <MagicCard
        className="cursor-pointer flex-col items-center bg-black justify-center whitespace-nowrap text-4xl shadow-2xl"
        gradientColor= "#D9D9D955"
      >
        <ScriptCopyBtn
        showMultiplePackageOptions={true}
        codeLanguage="shell"
        darkTheme="vitesse-dark"
        commandMap={customCommandMap2}
      />
      </MagicCard>
      <MagicCard
        className="cursor-pointer flex-col items-center bg-black justify-center whitespace-nowrap text-4xl shadow-2xl"
        gradientColor="#D9D9D955"
      >
        <ScriptCopyBtn
        showMultiplePackageOptions={true}
        codeLanguage="shell"
        darkTheme="vitesse-dark"
        commandMap={customCommandMap3}
      />
      </MagicCard>
      <MagicCard
        className="cursor-pointer flex-col items-center bg-black justify-center whitespace-nowrap text-4xl shadow-2xl"
        gradientColor= "#D9D9D955"
      >
        <ScriptCopyBtn
        showMultiplePackageOptions={true}
        codeLanguage="shell"
        darkTheme="vitesse-dark"
        commandMap={customCommandMap4}
      />
      </MagicCard>
    </div>
  );
}

