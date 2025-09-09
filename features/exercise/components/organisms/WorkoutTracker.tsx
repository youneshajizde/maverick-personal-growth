import { FlameIcon, PlusIcon } from "lucide-react";
import Image from "next/image";

const WorkoutTracker = () => {
  return (
    <div className="flex flex-col border border-dashed border-black/30 justify-between h-full bg-white  rounded-xl col-span-1 p-6">
      <p className="font-medium text-primary">Workout tracker</p>

      <div className="mt-6 "> 
        <p className="font-medium">Last workout</p>

        <div>
          <div className="!mt-3">
            <p className="f-align gap-1.5">
              <Image
                src={"/images/icons/leg.svg"}
                alt="leg"
                width={20}
                height={20}
              />
              <span>Leg day</span>
            </p>
            <ul className="mt-1.5 *:text-black/30 f-align gap-1.5 *:text-sm truncate">
              <li>Squat</li>
              <li>Leg curl</li>
              <li>Lunge</li>
            </ul>
          </div>
          <div className="mt-3">
            <p className="f-align gap-1.5">
              <FlameIcon size={15} />
              <span>Calories burned</span>
            </p>
            <p className="flex *:text-black/30 items-end gap-1.5">
              <span className="">507</span>
              <span className="text-sm">Kcal</span>
            </p>
          </div>
        </div>

          <button className="mb-6 sm:mb-0 mt-6  f-align justify-center w-full gap-1.5 bg-secondary p-3 rounded-xl text-white">
            <span>Add workout</span>
            <PlusIcon size={18} />
          </button>
      </div>
    </div>
  );
};

export default WorkoutTracker;
