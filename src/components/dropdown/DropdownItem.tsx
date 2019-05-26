import React from 'react'
import { DropdownItemType } from "./DropdownItemType";

interface DropdownItemProps {
  type: DropdownItemType
  name: string
}

interface DropdownItemState {
  selected: boolean
}

export class DropdownItem extends React.Component<DropdownItemProps, DropdownItemState> {
  constructor(props: DropdownItemProps) {
    super(props);
    this.state = { selected: false }
  }

  render() {
    return (
      <div>
        {this.props.name}
      </div>
    );
  }
}
