const projectImages = import.meta.glob('../assets/images/project/*.{png,jpg,jpeg,svg,webp}', { eager: true });

export const getProjectImage = (imagePath) => {
  // If the path is a full URL or already correctly resolved
  if (imagePath.startsWith('http') || imagePath.startsWith('blob:')) return imagePath;

  // Extract filename from path (e.g., "/assets/images/project/m1.png" -> "m1.png")
  const fileName = imagePath.split('/').pop();
  
  // Find the imported image that matches the filename
  const matchedPath = Object.keys(projectImages).find(key => key.endsWith(fileName));
  
  if (matchedPath) {
    return projectImages[matchedPath].default || projectImages[matchedPath];
  }

  // Fallback to the original path (useful if it's already in public/)
  return imagePath;
};
