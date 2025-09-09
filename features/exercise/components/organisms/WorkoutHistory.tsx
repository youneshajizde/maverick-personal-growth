import { ChevronRightIcon } from "lucide-react";

const WorkoutHistory = () => {
  return (
    <div className="bg-primary rounded-2xl p-6 col-span-2 mt-6 sm:mt-0">
      <p className="font-medium text-white">history</p>
      <ul className="mt-6 space-y-3">
        <li className="grid text-sm grid-cols-[50px_1fr_50px] items-center text-white py-2">
          <span>Sep 12</span>
          <span className="text-center">Arms & Triceps</span>
          <span className="justify-self-end">
            <ChevronRightIcon size={15} />
          </span>
        </li>
        <li className="grid grid-cols-[50px_1fr_50px] text-sm items-start text-white py-2">
          <span>Sep 11</span>
          <span className="text-center">cardio</span>
          <span className="justify-self-end">
            <ChevronRightIcon size={15} />
          </span>
        </li>
        <li className="grid grid-cols-[50px_1fr_50px] text-sm items-start text-white py-2">
          <span>Sep 10</span>
          <span className="text-center">Chest & Abs</span>
          <span className="justify-self-end">
            <ChevronRightIcon size={15} />
          </span>
        </li>
        <li className="grid grid-cols-[50px_1fr_50px] text-sm items-center text-white py-2">
          <span>Sep 9</span>
          <span className="text-center">Rest</span>
          <span className="justify-self-end">
            <ChevronRightIcon size={15} />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default WorkoutHistory;
