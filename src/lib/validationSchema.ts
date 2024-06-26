import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string()
    .required("Please enter your name")
    .min(2, "Name must be at least 2 characters"),
  email: Yup.string().required("Please enter your valid email address").email(),
  organizationName: Yup.string(),
  service: Yup.string(),
  message: Yup.string()
    .required("Please enter your message")
    .max(500, "Max length is 500"),
});
