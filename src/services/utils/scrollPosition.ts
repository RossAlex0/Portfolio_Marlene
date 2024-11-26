export function scrollPosition(setter: (state: number) => void) {
  const handleScroll = () => {
    setter(window.scrollY);
  };
  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}
