import CheckedInput from "@/components/Auth/CheckedInput";
import Button from "@/components/common/Button";
import AuthLayout from "@/components/layout/AuthLayout";
import { checkedData } from "@/lib/data/checked.data";
import { ArrowRight, ChevronUp } from "lucide-react";
import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

const intialState = {
  gender: "",
  fitnessLevel: "",
  trainingType: "",
  frequency: "",
  goals: [] as string[],
};

export default function Info() {
  const navigate = useNavigate();
  const [goalsOpen, setGoalsOpen] = useState(false);
  const [form, dispatch] = useReducer(
    (state: typeof intialState, action: Partial<typeof intialState>) => ({
      ...state,
      ...action,
    }),
    intialState,
  );

  const handleChange = (value: string) => {
    dispatch({
      goals: form.goals.includes(value)
        ? form.goals.filter((g) => g !== value)
        : [...form.goals, value],
    });
  };

  return (
    <AuthLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 text-center items-center justify-center">
          <h2 className="font-bold text-4xl text-(--white-color) mt-5">
            Personalize your training experience
          </h2>
          <p className="text-(--gray-color) text-md font-semibold">
            Tell us a few things about your fitness goals so we can recommend
            the best trainers for you.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-(--white-color) text-sm font-semibold">
            What is your gender?
          </p>
          {checkedData.gender.map((item) => (
            <CheckedInput
              key={item}
              label={item}
              type="radio"
              name="gender"
              value={item}
              checked={form.gender === item}
              onChange={(val) => dispatch({ gender: val })}
            />
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-(--white-color) text-sm font-semibold">
            What is your current fitness level?
          </p>
          {checkedData.fitnessLevel.map((item) => (
            <CheckedInput
              key={item}
              label={item}
              type="radio"
              name="fitnessLevel"
              value={item}
              checked={form.fitnessLevel === item}
              onChange={(val) => dispatch({ fitnessLevel: val })}
            />
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-(--white-color) text-sm font-semibold">
            How would you like to train?
          </p>
          {checkedData.trainingType.map((item) => (
            <CheckedInput
              key={item}
              label={item}
              type="radio"
              name="trainingType"
              value={item}
              checked={form.trainingType === item}
              onChange={(val) => dispatch({ trainingType: val })}
            />
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-(--white-color) text-sm font-semibold">
            How often do you plan to train?
          </p>
          {checkedData.frequency.map((item) => (
            <CheckedInput
              key={item}
              label={item}
              type="radio"
              name="frequency"
              value={item}
              checked={form.frequency === item}
              onChange={(val) => dispatch({ frequency: val })}
            />
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-(--white-color) text-sm font-semibold">
            What is your primary fitness goal?
          </p>
          <div className="rounded-lg bg-(--color-bg-raised) overflow-hidden">
            <button
              type="button"
              onClick={() => setGoalsOpen(!goalsOpen)}
              className="w-full flex items-center justify-between px-4 py-3 text-(--color-text-secondary) text-sm">
              <span>
                {form.goals.length > 0
                  ? form.goals.join(", ")
                  : "Select Your Goals!"}
              </span>
              <ChevronUp
                size={18}
                className={`transition-transform ease ${goalsOpen ? "" : "rotate-180"}`}
              />
            </button>

            {goalsOpen && (
              <div className="flex flex-col">
                {checkedData.fitnessGoals.map((item, index) => (
                  <div key={item}>
                    <CheckedInput
                      label={item}
                      type="checkbox"
                      value={item}
                      checked={form.goals.includes(item)}
                      onChange={handleChange}
                    />
                    {index < checkedData.fitnessGoals.length - 1 && (
                      <hr className="border-(--color-text-secondary) opacity-20 mx-4" />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <Button
          text="Continue"
          icon={<ArrowRight size={16} />}
          type="button"
          onClick={() => navigate("/")}
        />
      </div>
    </AuthLayout>
  );
}
