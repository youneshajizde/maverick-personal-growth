"use client"


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
        <div className="rounded-full bg-foreground w-8 h-8 f-center">+</div>
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
