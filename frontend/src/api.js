// src/api.js
const apiUrl = import.meta.env.VITE_BACKEND_URL;

export async function fetchCourses() {
  try {
    const response = await fetch(`${apiUrl}/courses`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch courses');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching courses:', error);
    return null;
  }
}

export async function createCourse(courseData) {
  try {
    const response = await fetch(`${apiUrl}/courses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(courseData),
    });
    if (!response.ok) {
      throw new Error('Failed to create course');
    }
    return await response.json();
  } catch (error) {
    console.error('Error creating course:', error);
    return null;
  }
}
