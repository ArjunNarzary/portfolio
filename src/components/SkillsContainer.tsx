import { ISkill } from "../interfaces"
import { SKILLS } from "../utils/constants"

const SkillsContainer = () => {
  return (
    <>
      <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
        Skills
      </h3>
      <div className="flex flex-wrap gap-2">
        {SKILLS.map((skill) => (
          <Skill {...skill} />
        ))}
      </div>
    </>
  )
}

export default SkillsContainer

function Skill({ title, imgName }: ISkill) {
  return (
    <div className="px-3 py-1 rounded-md border text-neutral-800 bg-neutral-100  border-neutral-400 text-sm flex items-center gap-2">
      <img src={imgName} className="h-3.5 w-3.5" />
      <span>{title}</span>
    </div>
  )
}
