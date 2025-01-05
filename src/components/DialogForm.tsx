"use client";
import React from "react";
import { useDialog } from "@/context/DialogContext";
import { useForm, SubmitHandler } from "react-hook-form";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { AlertCircle } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface FormInputs {
  name: string;
  email: string;
  faculty: string;
  phone_number: string;
  current_skills: string;
  improve_and_learn: string;
  joining_reason: string;
  agreeTorules: boolean;
  presence: boolean;
}

const DialogForm: React.FC = () => {
  const { isDialogOpen, setIsDialogOpen } = useDialog();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, errors, isSubmitting },
  } = useForm<FormInputs>({
    mode: "onTouched",
    reValidateMode: "onSubmit",
  });

  const faculties = [
    "Faculty of Science",
    "Faculty of Engineering",
    "Faculty of Literature",
    "Faculty of Law",
  ];

  const currentSkills = [
    "Web Development",
    "Graphic Design",
    "Marketing",
    "Project Management",
  ];

  const improveSkills = [
    "Learn Data Science",
    "Improve Public Speaking",
    "Enhance Leadership Skills",
  ];

  const joiningReasons = [
    "Networking",
    "Learning new skills",
    "Collaborating on projects",
    "Career growth",
  ];

  const nameValidation = {
    required: "Name is required",
    minLength: { value: 2, message: "Name must be at least 2 characters" },
    pattern: {
      value: /^[a-zA-Z\s]*$/,
      message: "Name should only contain letters and spaces",
    },
  };

  const emailValidation = {
    required: "Email is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Invalid email address",
    },
  };

  const phoneValidation = {
    required: "Phone number is required",
    pattern: {
      value: /^(06|07|05)[0-9]{8}$/,
      message:
        "Phone number must start with 06, 07, or 05 and contain 10 digits",
    },
  };

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      const {...sanitizedData } = {
        ...data,
        name: data.name.trim(),
        email: data.email.toLowerCase().trim(),
        phone_number: data.phone_number.trim(),
      };
  
      const { data: existingEmail } = await supabase
        .from("form_inputs")
        .select("email")
        .eq("email", sanitizedData.email)
        .single();
  
      if (existingEmail) {
        alert("This email is already registered. Please use a different email.");
        return;
      }
  
      const { error } = await supabase
        .from("form_inputs")
        .insert([sanitizedData]);
  
      if (error) {
        throw new Error(error.message || "Failed to insert data");
      }
  
      alert("Form submitted successfully!");
  
      setIsDialogOpen(false);
      reset();
    } catch (error) {
      if (error instanceof Error) {
        console.error("Submission error:", error);
        alert(error.message || "An unexpected error occurred. Please try again.");
      } else {
        console.error("Unexpected error:", error);
        alert("An unexpected error occurred. Please try again.");
      }
    }
  };
  
  
  

  const Cancel = () => {
    if (
      confirm("Are you sure you want to cancel? All entered data will be lost.")
    ) {
      setIsDialogOpen(false);
      reset();
    }
  };

  const InputWrapper = ({
    children,
    label,
    error,
    touched,
  }: {
    children: React.ReactNode;
    label: string;
    error?: string;
    touched?: boolean;
  }) => (
    <div className="flex flex-col space-y-1">
      <label className="text-[#6C2BF7] font-roboto font-medium text-sm md:text-base">
        {label}
      </label>
      {children}
      {touched && error && (
        <span className="text-red-500 text-xs flex items-center gap-1">
          <AlertCircle className="w-3 h-3" />
          {error}
        </span>
      )}
    </div>
  );

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen} >
      <DialogContent className="p-0 overflow-hidden max-h-[90vh] overflow-y-auto">
        <DialogTitle>
          <div className="bg-[#6C2BF7] py-4 sticky top-0 z-10 ">
            <h1 className="md:text-[2.5rem] py-4 text-2xl text-center font-yearOfCamel font-black text-white">
              SkillUP Society
            </h1>
          </div>
        </DialogTitle>

        <form onSubmit={handleSubmit(onSubmit)} className="px-6 py-4 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <InputWrapper label="Full Name" error={errors.name?.message}>
              <Input
                id="name"
                type="text"
                {...register("name", nameValidation)}
                className="border-[#D9D9D9] focus:border-[#6C2BF7] transition-colors"
                autoComplete="name"
              />
            </InputWrapper>

            <InputWrapper label="Email" error={errors.email?.message}>
              <Input
                id="email"
                type="email"
                {...register("email", emailValidation)}
                className="border-[#D9D9D9] focus:border-[#6C2BF7] transition-colors"
                autoComplete="email"
              />
            </InputWrapper>

            <InputWrapper label="Faculty" error={errors.faculty?.message}>
              <select
                id="faculty"
                {...register("faculty", { required: "Faculty is required" })}
                className="w-full rounded-md border border-[#D9D9D9] focus:border-[#6C2BF7] p-2 transition-colors"
              >
                <option value="">Select Faculty</option>
                {faculties.map((faculty, index) => (
                  <option key={index} value={faculty}>
                    {faculty}
                  </option>
                ))}
              </select>
            </InputWrapper>

            <InputWrapper
              label="Phone Number"
              error={errors.phone_number?.message}
            >
              <Input
                id="phone_number"
                type="tel"
                {...register("phone_number", phoneValidation)}
                className="border-[#D9D9D9] focus:border-[#6C2BF7] transition-colors"
                autoComplete="tel"
              />
            </InputWrapper>
          </div>

          <div className="space-y-4">
            <InputWrapper
              label="Current Skills"
              error={errors.current_skills?.message}
            >
              <select
                id="current_skills"
                {...register("current_skills", {
                  required: "Current skills are required",
                })}
                className="w-full rounded-md border border-[#D9D9D9] focus:border-[#6C2BF7] p-2 transition-colors"
              >
                <option value="">Select Current Skills</option>
                {currentSkills.map((skill, index) => (
                  <option key={index} value={skill}>
                    {skill}
                  </option>
                ))}
              </select>
            </InputWrapper>

            <InputWrapper
              label="What would you like to improve or learn?"
              error={errors.improve_and_learn?.message}
            >
              <select
                id="improve_and_learn"
                {...register("improve_and_learn", {
                  required: "Improvement area is required",
                })}
                className="w-full rounded-md border border-[#D9D9D9] focus:border-[#6C2BF7] p-2 transition-colors"
              >
                <option value="">Select an area to improve</option>
                {improveSkills.map((skill, index) => (
                  <option key={index} value={skill}>
                    {skill}
                  </option>
                ))}
              </select>
            </InputWrapper>

            <InputWrapper
              label="Why do you want to join SkillUP Society?"
              error={errors.joining_reason?.message}
            >
              <select
                id="joining_reason"
                {...register("joining_reason", {
                  required: "Joining reason is required",
                })}
                className="w-full rounded-md border border-[#D9D9D9] focus:border-[#6C2BF7] p-2 transition-colors"
              >
                <option value="">Select Reason</option>
                {joiningReasons.map((reason, index) => (
                  <option key={index} value={reason}>
                    {reason}
                  </option>
                ))}
              </select>
            </InputWrapper>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="agreeTorules"
                {...register("agreeTorules", {
                  required: "You must agree to the rules",
                })}
                className="mt-1 border-[#D9D9D9]"
              />
              <div className="flex flex-col">
                <label htmlFor="agreeTorules" className="text-[#6C2BF7]">
                  I agree to follow club&apos;s rules and actively participate
                </label>
                {errors.agreeTorules && (
                  <span className="text-red-500 text-xs flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.agreeTorules.message}
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="presence"
                {...register("presence", {
                  required: "You must consent to be contacted",
                })}
                className="mt-1 border-[#D9D9D9]"
              />
              <div className="flex flex-col">
                <label htmlFor="presence" className="text-[#6C2BF7]">
                  I consent to be contacted about upcoming events and
                  opportunities
                </label>
                {errors.presence && (
                  <span className="text-red-500 text-xs flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.presence.message}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-row-reverse gap-4 pt-4">
            <Button
              variant="custm1"
              size="submit"
              type="submit"
              disabled={!isValid || isSubmitting}
              className="min-w-[100px]"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
            <Button
              variant="default"
              size="lg"
              onClick={Cancel}
              type="button"
              className="min-w-[100px]"
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DialogForm;
