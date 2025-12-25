interface SkillBadgeProps {
  skill: string;
}

const SkillBadge = ({ skill }: SkillBadgeProps) => {
  return (
    <span className="inline-flex items-center px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium border border-border hover:bg-accent hover:text-accent-foreground transition-colors duration-200 cursor-default">
      {skill}
    </span>
  );
};

export default SkillBadge;
