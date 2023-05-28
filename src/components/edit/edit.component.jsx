import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link, useLocation, useParams } from "react-router-dom";
import left from "../../assets/left-left.png";
export const HandelEdit = () => {
  let params = useParams();
  console.log(params.id);
  const editSchema = Yup.object().shape({
    to: Yup.string().min(3, "min").max(50, "max").required("Required"),
    email: Yup.string().email("email").required("Required"),
    dueDate: Yup.date().required("Required"),
    term: Yup.number().required("Required"),
    description: Yup.string(),
    price: Yup.number(),
  });
  return (
    <Formik
      initialValues={{
        to: "",
        email: "",
        dueDate: "",
        term: "",
        description: "",
        price: "",
      }}
      validationSchema={editSchema}
      onSubmit={(value) => {
        console.log(value);
        fetch(import.meta.env.VITE_API_URL + `/invoices/${params.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
          },
          body: JSON.stringify({
            userId: 2,
            paid: true,
            email: value.email,
            to: value.to,
            dueDate: value.dueDate,
            term: value.term,
            createdDate: value.dueDate,
            description: value.description,
            price: value.price,
          }),
        });
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="invoices__container">
            <Link to="/" className="text-black text-decoration-none">
              <img src={left} alt="" /> Go back
            </Link>
            <div className="invoices mt-3  align-items-center gap-3">
              <h5>Edit #XM9141</h5>
              <br />

              <p className="mb-1 mt-2">Client’s Name</p>
              <Field name="to" className="w-100 form-control" type="text" />
              {errors.to && touched.to ? <div>{errors.to}</div> : null}
              <p className="mb-1 mt-2">Client’s Email</p>
              <Field name="email" className="w-100 form-control" type="email" />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}

              <div className="d-flex justify-content-between">
                <div>
                  <p className="mb-1 mt-2">Due Date</p>
                  <Field
                    name="dueDate"
                    className="w-100 form-control"
                    type="date"
                  />
                  {errors.dueDate && touched.dueDate ? (
                    <div>{errors.dueDate}</div>
                  ) : null}
                </div>
                <div>
                  <p className="mb-1 mt-2">Payment Terms</p>
                  <Field
                    name="term"
                    className="w-100 form-control"
                    type="text"
                  />
                  {errors.term && touched.term ? (
                    <div>{errors.term}</div>
                  ) : null}
                </div>
              </div>
              <p className="mb-1 mt-2">Project Description</p>
              <Field
                name="description"
                className="w-100 form-control"
                type="text"
              />
              {errors.description && touched.description ? (
                <div>{errors.description}</div>
              ) : null}

              <p className="mb-1 mt-2">Price</p>
              <Field name="price" className="w-100 form-control" type="text" />
              {errors.price && touched.price ? <div>{errors.price}</div> : null}

              <div className="d-flex">
                <Link to="/" className="btn rounded-5 mt-3 p-3 btn-light">
                  Discard
                </Link>
                <button
                  type="submit"
                  className="btn rounded-5 mt-3 p-3 text-light"
                  style={{ background: " #7C5DFA", marginLeft: "286px" }}
                >
                  Save & Send
                </button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};
