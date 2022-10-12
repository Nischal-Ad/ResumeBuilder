import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { delresume, clearError } from "../../../actions/resumeAction";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useEffect } from "react";

const Sample = ({ _id, template }) => {
  const { templatedata, error } = useSelector((state) => state.template);
  const { error: delError } = useSelector((state) => state.resume);
  const alert = toast;
  const dispatch = useDispatch();

  const nevigate = useNavigate();

  const resumeTemplate = templatedata.find((e) => e._id === template);

  const delProduct = (id) => {
    dispatch(delresume(id));
    alert.success("Template Deleted Successfully");
    nevigate("/");
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError());
    }

    if (delError) {
      alert.error(delError);
      dispatch(clearError());
    }
  }, [dispatch, alert, error, delError]);

  return (
    <>
      <div className="px-5 py-3">
        <div className="h-[70vh] border-2 broder-gray-200 rounded-xl">
          <iframe
            src={`/template/${resumeTemplate?.template}`}
            frameBorder="0"
            className="w-full h-full blur-[1px]"
            scrolling="no"
            title="sample"
          />
          <div className="flex justify-center relative bottom-[50%]">
            <button
              onClick={() => delProduct(_id)}
              className="bg-red-600 hover:bg-red-700 duration-500 py-[6px] px-4 mt-2 mx-4 rounded-md"
            >
              <span className="text-white">Delete</span>
            </button>
            <Link
              to={`/myresumeedit/${_id}`}
              className="bg-green-600 hover:bg-green-700 duration-500 py-[6px] px-4 mt-2 mx-4 rounded-md"
            >
              <span className="text-white">Edit</span>
            </Link>
            <Link
              to={`/myresume/${_id}`}
              className="bg-blue-600 hover:bg-blue-700 duration-500 py-[6px] px-4 mt-2 rounded-md"
            >
              <span className="text-white">CheckOut</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sample;
