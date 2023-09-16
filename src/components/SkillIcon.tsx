import { skillIcons } from "@/constants/skills";
import { cn } from "@/lib/utils";
import { Tooltip } from "@nextui-org/react";

const SkillIcon = ({
  skill,
  className,
}: {
  skill: string;
  className?: string;
}) => {
  const Component = skillIcons[skill];

  return (
    <Tooltip showArrow={true} content={skill}>
      <button aria-labelledby={skill}>
        <Component className={cn("w-6 h-6 inline-block mr-2", className)} />
      </button>
    </Tooltip>
  );
};

export default SkillIcon;
