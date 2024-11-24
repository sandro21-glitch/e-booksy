const getCookie = (name) => {
  const value = `; ${document.cookie}`; // Prepend a semicolon for consistent splitting
  const parts = value.split(`; ${name}=`); // Split by the cookie name

  // Check if cookie was found
  if (parts.length === 2) {
    const cookieValue = parts.pop().split(";")[0]; // Get the cookie value
    return cookieValue ? cookieValue : null;
  }
  return null; // Return null if cookie is not found
};

export default getCookie;
