
const getAssetsByCategory = (assets, category) => {
  const filteredAssets = assets.filter((asset) => {
    // pour l'accueil on veut tout afficher => tous les posts

    return asset.category_id === category.id;
  });

  return filteredAssets;
};

export default getAssetsByCategory;