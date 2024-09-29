import React from "react";
import Swal from "sweetalert2"; // Import Swal for alerts (if needed)

// Assuming you might want to handle delete operations in the future
const Card = ({ id, name, type, code, creditHours, gradeLevel, classroom }) => {
  const handleDelete = async (id) => {
    try {
      // You can call your delete function here
      // const response = await CourseService.deleteCourse(id);
      Swal.fire({
        title: "Delete Course",
        text: `Are you sure you want to delete the course ${name}?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          // Assume delete logic is implemented here
          // If successful, show success message
          Swal.fire("Deleted!", "The course has been deleted.", "success");
          // Optionally, refresh or redirect
          // window.location.reload();
        }
      });
    } catch (error) {
      Swal.fire({
        title: "Delete Course",
        text: error.response.data.message || error.message,
        icon: "error",
      });
      console.log(error);
    }
  };

  return (
    <div className="card card-compact w-72 bg-base-100 shadow-xl h-96">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Type: {type}</p>
        <p>Code: {code}</p>
        <p>Credit Hours: {creditHours}</p>
        <p>Grade Level: {gradeLevel}</p>
        <p>Classroom: {classroom}</p>
        <div className="card-actions justify-end">
          {/* If you want to implement delete functionality */}
          {/* You can optionally add the delete button here */}
          <button className="btn btn-error" onClick={() => handleDelete(id)}>
            Delete
          </button>
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
