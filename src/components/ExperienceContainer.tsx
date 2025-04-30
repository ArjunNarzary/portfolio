import { IExperience } from "../interfaces"
import { EXPERIENCES } from "../utils/constants"

const ExperienceContainer = () => {
  return (
    <>
      <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
        Experience
      </h3>
      <div className="space-y-6">
        {EXPERIENCES.map((experience: IExperience) => (
          <ExperienceItem {...experience} />
        ))}
      </div>
    </>
  )
}

export default ExperienceContainer

function ExperienceItem({ title, company, period, description }: IExperience) {
  return (
    <div className="border-l-2 border-neutral-300 dark:border-neutral-700 pl-4 py-1">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
        <h4 className="text-lg font-bold text-black dark:text-white">
          {title}
        </h4>
        <span className="text-sm text-neutral-500 dark:text-neutral-400">
          {period}
        </span>
      </div>
      <div className="mb-2 font-medium text-neutral-700 dark:text-neutral-300">
        {company}
      </div>
      <p className="text-neutral-600 dark:text-neutral-400">{description}</p>
    </div>
  )
}
