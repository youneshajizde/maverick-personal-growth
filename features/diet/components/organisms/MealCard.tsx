"use client";

import { Modal } from "@/shared/components/organisms/modal";
import { SearchIcon } from "lucide-react";

const MealCard = () => {
  return (
    <div className="rounded-3xl transition-all ease-in-out duration-500 f-align justify-between bg-white w-full h-auto p-3">
      <div className="space-y-3">
        <p className="font-medium text-primary">Breakfast</p>
        <span className="f-align gap-3">
          <p className="bg-danger/40 p-1.5 rounded-lg w-8 h-8 f-center">🔥</p>
          <p className="f-align gap-1.5">
            <span className="text-sm">801</span>
            <span className="text-sm text-black/30">Kcal</span>
          </p>
        </span>
      </div>

      <div className="f-align">
        <Modal>
          <Modal.OpenBtn className="btn btn-round text-black bg-foreground w-8 h-8 f-center">
            +
          </Modal.OpenBtn>
          <Modal.Body>
            <Modal.Header>Add Food</Modal.Header>

            <div className="mt-3">
              <div className="w-full bg-foreground rounded-xl f-align gap-1.5 p-3">
                <SearchIcon className="" size={20} />
                <input
                  placeholder="Search between more than dozen foods"
                  className="w-full text-sm outline-none placeholder:text-xs"
                />
              </div>

              <ul className="mt-3 w-full space-y-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <li key={i} className="f-align justify-between border-b pb-3 last:border-none border-black/10 w-full">
                    <p>Banana</p>

                    <span className="f-align gap-1.5">
                      <button className="btn btn-accent">+</button>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Modal.Body>
        </Modal>
        <div className="rounded-full text-sm -ml-3 bg-light w-8 h-8 f-center">
          B
        </div>
        <div className="rounded-full  text-sm -ml-3 bg-light w-8 h-8 f-center">
          C
        </div>
        <div className="rounded-full text-sm -ml-3 bg-light w-8 h-8 f-center">
          D
        </div>
      </div>
    </div>
  );
};

export default MealCard;
