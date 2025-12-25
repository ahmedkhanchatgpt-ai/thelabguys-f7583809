interface SkillBadgeProps {
  skill: string;
  gradient?: string;
}

const SkillBadge = ({ skill, gradient }: SkillBadgeProps) => {
  return (
    <span className={`inline-flex items-center px-4 py-2 rounded-full glass text-sm font-medium border border-white/10 hover:border-white/20 transition-all duration-300 cursor-default group`}>
      <span className={`w-2 h-2 rounded-full mr-2 ${gradient || 'bg-gradient-to-r from-purple-500 to-pink-500'}`} />
      {skill}
    </span>
  );
};

export default SkillBadge;
