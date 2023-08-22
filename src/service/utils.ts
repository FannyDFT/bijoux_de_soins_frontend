export const formatPrice = (price: string) => {
  const numericPrice = parseFloat(price); // Convertir en nombre
  const roundedPrice = numericPrice.toFixed(2); // Arrondir à deux décimales
  return roundedPrice; // Retourner la valeur arrondie
};
