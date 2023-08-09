import { ReactComponent as CursorIcon } from 'assets/cursor.svg';
import { ReactComponent as BracketsIcon } from 'assets/brackets.svg';
import { ReactComponent as SelectionMultipleIcon } from 'assets/selectionMultiple.svg';
import { FunctionComponent, SVGProps } from 'react';

interface SelectionItem {
  title: string;
  svg: FunctionComponent<SVGProps<SVGSVGElement>>;
  code: string;
  imgSrc: string;
  singleEl: string;
}

interface TaskSelectionItemProps {
  item: SelectionItem;
  ind: number;
}

export const TaskSelectionItem = ({ item, ind }: TaskSelectionItemProps) => {
  return (
    <li className={'selection' + ind}>
      <span>
        <item.svg />
        {item.title}
      </span>
      <span>
        <CursorIcon />
        {item.code}
      </span>
      <span>
        <BracketsIcon />
        {item.imgSrc}
      </span>
      <span>
        <SelectionMultipleIcon />
        {item.singleEl}
      </span>
    </li>
  );
};
