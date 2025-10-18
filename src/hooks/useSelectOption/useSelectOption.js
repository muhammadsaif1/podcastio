import { useEffect, useRef, useState } from "react";
const useSelectOption = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownValue, setDropDownValue] = useState("");
  const dropdownBtnRef = useRef(null);
  const dropdownRef = useRef(null);
  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };
  const closeDropdownOutside = (event) => {
    if (dropdownRef.current && dropdownBtnRef.current) {
      const isClickedInsideDropdown = dropdownRef.current.contains(
        event.target
      );
      const isClickedOnDropdownBtn = dropdownBtnRef.current.contains(
        event.target
      );
      if (!isClickedOnDropdownBtn && !isClickedInsideDropdown) {
        setIsOpen(false);
      }
    }
  };

  const handleValue = (e) => {
    // Get the parent element of the current target
    const parentElement = e.currentTarget?.parentElement;
    // Get the child elements of the parent element
    const childElements = parentElement
      ?.querySelector("ul")
      ?.querySelectorAll("li");
    // Loop through each child element
    childElements?.forEach((child) => {
      // Remove the "active" class if the child element's text content is not the current dropdown value
      if (child.textContent !== dropdownValue) {
        child.classList.remove("active");
      }
      // Add a click event listener to each child element
      child.addEventListener("click", () => {
        // Set the dropdown value to the text content of the clicked child element
        setIsOpen(false);
        setDropDownValue(child.textContent);
        // Add the "active" class to the clicked child element
        child.classList.add("active");
      });
    });
  };
  useEffect(() => {
    document.addEventListener("click", closeDropdownOutside);
    return () => {
      // Clean up the event listener when the component unmounts
      document.removeEventListener("click", closeDropdownOutside);
    };
  }, []);
  return {
    isOpen,
    dropdownBtnRef,
    dropdownRef,
    handleDropdownClick,
    handleValue,
    dropdownValue,
  };
};
export default useSelectOption;
