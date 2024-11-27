import { Projects } from "../types/projects";

export const preloadImages = (projects: Projects[]) => {
  const imageLoadPromises = projects.map((projet) => {
    return new Promise<void>((resolve, reject) => {
      const img = new Image();
      img.src = projet.thumb;
      img.onload = () => resolve();
      img.onerror = () =>
        reject(
          new Error(`Erreur lors du chargement de l'image de ${projet.name}`)
        );
    });
  });

  return Promise.all(imageLoadPromises);
};
