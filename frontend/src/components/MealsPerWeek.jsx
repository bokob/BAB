import { Dropdown, DropdownButton } from "react-bootstrap";

export default function MealsPerWeek() {
  // 주별 식단표
  return (
    <>
      <DropdownButton id="dropdown-item-button" title="주별 식단표">
        <Dropdown.ItemText>선택</Dropdown.ItemText>
        <Dropdown.Item as="button">본관</Dropdown.Item>
        <Dropdown.Item as="button">양성재</Dropdown.Item>
        <Dropdown.Item as="button">양진재</Dropdown.Item>
        <Dropdown.Item as="button">한빛</Dropdown.Item>
        <Dropdown.Item as="button">별빛</Dropdown.Item>
        <Dropdown.Item as="button">은하수</Dropdown.Item>
      </DropdownButton>
    </>
  );
}
