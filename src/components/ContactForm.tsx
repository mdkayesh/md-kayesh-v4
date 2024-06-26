"use client";

import { useToast } from "@/components/ui/use-toast";
import { validationSchema } from "@/lib/validationSchema";
import emailjs from "@emailjs/browser";
import { useGSAP } from "@gsap/react";
import { useFormik } from "formik";
import gsap from "gsap";
import { useRef, useState } from "react";
import CustomButton from "./CustomButton";

// styles
const {
  formItem,
  inputContainer,
  inputNumber,
  input,
  inputInnerContainer,
  label,
} = {
  inputNumber: "text-muted-foreground font-semibold",
  inputContainer: `flex gap-10 items-start`,
  formItem: `py-7 border-t-2`,
  input: `mt-1 py-3 outline-none border-none text-lg flex-1 bg-transparent`,
  inputInnerContainer: `flex flex-col w-full`,
  label: `text-xl sm:text-2xl font-medium block w-full`,
};

const ContactForm = () => {
  const ref = useRef(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        organizationName: "",
        service: "",
        message: "",
      },

      validationSchema,
      onSubmit: async (values) => {
        setLoading(true);
        const { name, email, message, service } = values;

        try {
          await emailjs.send(
            process.env.NEXT_PUBLIC_SERVICE_ID as string,
            process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
            {
              from_name: name,
              from_email: email,
              to_name: "Md Kayesh",
              subject: service,
              message: message,
            },
            process.env.NEXT_PUBLIC_PUBLIC_KEY as string
          );

          toast({
            title: "Thank you!",
            description: `I'll get back to you soon!`,
          });
        } catch (error) {
          toast({
            title: "Something went wrong! in the server",
            variant: "destructive",
          });
        } finally {
          setLoading(false);
        }
      },
    });

  useGSAP(
    () => {
      gsap.from(".submitBtn", {
        x: -100,
        scrollTrigger: {
          trigger: ".submitBtn",
          start: "top bottom",
          scrub: 1.2,
        },
      });
    },
    { scope: ref }
  );

  return (
    <>
      <form onSubmit={handleSubmit} className="md:w-2/3" ref={ref}>
        {/* name */}
        <div className={formItem}>
          <div className={inputContainer}>
            <p className={inputNumber}>01</p>

            <div className={inputInnerContainer}>
              <label htmlFor="name" className={label}>
                What&apos;s your name?
              </label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                className={input}
              />
            </div>
          </div>
          {errors.name && touched.name && (
            <div className="flex gap-10 items-center text-red-600">
              <div className="h-2 w-2 bg-red-600 rounded-full font-medium" />
              <p>{errors.name}</p>
            </div>
          )}
        </div>

        {/* email */}
        <div className={formItem}>
          <div className={inputContainer}>
            <p className={inputNumber}>02</p>

            <div className={inputInnerContainer}>
              <label htmlFor="email" className={label}>
                What&apos;s your email?
              </label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                type="text"
                name="email"
                id="email"
                placeholder="johndoe@gmail.com"
                className={input}
              />
            </div>
          </div>
          {errors.email && touched.email && (
            <div className="flex gap-10 items-center text-red-600">
              <div className="h-2 w-2 bg-red-600 rounded-full font-medium" />
              <p>{errors.email}</p>
            </div>
          )}
        </div>

        {/* organization */}
        <div className={formItem}>
          <div className={inputContainer}>
            <p className={inputNumber}>03</p>

            <div className={inputInnerContainer}>
              <label htmlFor="organizationName" className={label}>
                What&apos;s the name of your organization?
              </label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.organizationName}
                type="text"
                name="organizationName"
                id="organizationName"
                placeholder="John & Doe"
                className={input}
              />
            </div>
          </div>
        </div>

        {/* service */}
        <div className={formItem}>
          <div className={inputContainer}>
            <p className={inputNumber}>04</p>

            <div className={inputInnerContainer}>
              <label htmlFor="service" className={label}>
                What services are you looking for?
              </label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.service}
                type="text"
                name="service"
                id="service"
                placeholder="Web Design, Web Development ..."
                className={input}
              />
            </div>
          </div>
        </div>

        {/* message */}
        <div className={`${formItem} border-b-2`}>
          <div className={inputContainer}>
            <p className={inputNumber}>05</p>

            <div className={inputInnerContainer}>
              <label htmlFor="message" className={label}>
                Your message
              </label>

              <textarea
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
                name="message"
                id="message"
                placeholder="Hello Md, can you help me with ...*"
                className={`${input} resize-none`}
                rows={8}
              ></textarea>
            </div>
          </div>
          {errors.message && touched.message && (
            <div className="flex gap-10 items-center text-red-600">
              <div className="h-2 w-2 bg-red-600 rounded-full font-medium" />
              <p>{errors.message}</p>
            </div>
          )}
        </div>

        <div className="submitBtn flex justify-end -mt-20 pr-6">
          <CustomButton
            type="submit"
            variant={"rounded"}
            size={"rounded"}
            btnContainerClass="dark:bg-background"
          >
            {loading ? "Sending..." : "Send it"}
          </CustomButton>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
