function vuelto(personas: number[]): boolean {
  const caja = {
    25: 0,
    50: 0,
    100: 0,
  };

  if (personas.length === 0) return false;

  for (const billete of personas) {
    if (billete === 25) {
      caja[billete]++;
    } else if (billete === 50) {
      if (caja[25] === 0) {
        return false;
      }
      caja[25]--;
      caja[billete]++;
    } else if (billete === 100) {
      caja[billete]++;
      if (caja[50] > 0 && caja[25] > 0) {
        caja[50]--;
        caja[25]--;
      } else if (caja[25] >= 3) {
        caja[25] -= 3;
      } else {
        return false;
      }
    }
  }

  return true;
}

vuelto([25, 25, 50]); //? true
vuelto([25, 100]); //? false
vuelto([25, 25, 50, 25, 50, 100, 25, 100]); //? true
